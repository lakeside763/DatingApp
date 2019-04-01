<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-md-6 c">
                <div class="col-md-10 col-sm-6">
                    <div class="card border-light">
                    <div class="card-img-wrapper">
                        <div style="overflow: hidden;">
                            <div class="row mt-5">
                                <div class="col-md-10 offset-1">
                                    <img v-bind:src="member.photoUrl" width="100%" alt="altText"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        
                    </div>
                    <div class="card-footer text-center">
                            <input type="file" @change="onFileSelected" />
                    </div>
                </div> 
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <h5>Edit profile {{ member.knownAs }}</h5>
                <form id="edit-profile">
                    <div class="form-group">
                        <label class="text-10" :class="{'validation-error' : $v.knownAs.$error}">Nickname</label>
                        <input @blur="$v.knownAs.$touch()" type="text" class="form-control" placeholder="Nickname" v-model="knownAs" />
                        <div class="input" :class="{invalid : $v.knownAs.$error}">
                            <p v-if="!$v.knownAs.required" class="validation-error">Field cannot be empty</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="text-10" :class="{'validation-error' : $v.city.$error}">City</label>
                        <input @blur="$v.city.$touch()" type="text" class="form-control" placeholder="City" v-model="city" />
                        <div class="input" :class="{invalid : $v.city.$error}">
                            <p v-if="!$v.city.required" class="validation-error">Field cannot be empty</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="text-10">Country</label>
                        <input @blur="$v.country.$touch()" type="text" class="form-control" placeholder="Country" v-model="country" />
                        <div class="input" :class="{invalid : $v.country.$error}">
                            <p v-if="!$v.country.required" class="validation-error">Field cannot be empty</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="text-10">Interests</label>
                        <textarea @blur="$v.interests.$touch()" type="text" class="form-control" placeholder="Interests" v-model="interests"></textarea>
                        <div class="input" :class="{invalid : $v.interests.$error}">
                            <p v-if="!$v.interests.required" class="validation-error">Field cannot be empty</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="text-10">Looking For</label>
                        <textarea @blur="$v.lookingFor.$touch()" type="text" class="form-control" placeholder="Interests" v-model="lookingFor"></textarea>
                        <div class="input" :class="{invalid : $v.lookingFor.$error}">
                            <p v-if="!$v.lookingFor.required" class="validation-error">Field cannot be empty</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="text-10">Introduction</label>
                        <textarea type="text" class="form-control" placeholder="Introduction" v-model="introduction"></textarea>
                        <div class="input" :class="{invalid : $v.introduction.$error}">
                            <p v-if="!$v.introduction.required" class="validation-error">Field cannot be empty</p>
                        </div>
                    </div>
                    <button class="btn btn-info" @click="updateProfile()" :disabled="$v.$invalid">Update Profile</button>
                </form>
            </div>
        </div>
    </div>
</template>
<style>
    .text-10 {
        font-size: 10px;
    }
    .input{
      display: none;
    }
    .invalid {
        display: block !important;
    }
    .validation-error {
        color: #ff1641;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 12px;
    }
</style>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { User, ProfileData } from '@/store/models/users';
import users from '../store/modules/users';
import jwt from 'jsonwebtoken';
import { GetMember, UpdateProfile, AddPhoto } from '../services/user-api';
import { required, email } from 'vuelidate/lib/validators';
@Component({
    validations: {
        knownAs: { required, },
        city: { required, },
        country: { required, },
        introduction: { required, },
        interests: { required, },
        lookingFor: { required, },
    },
})
export default class MemberEdit extends Vue {
    private member: User | {} = {};
    private tokenData: {} | null = {};
    private memberId?: number;
    private knownAs: string = '';
    private city: string = '';
    private country: string = '';
    private introduction?: string = '';
    private interests?: string = '';
    private lookingFor?: string = '';
    private data: Partial<ProfileData> = {};
    private fileSelected: any;

    private async getMember(id: number) {
        await GetMember(id).subscribe((response) => {
            this.member = response.data;
            this.knownAs = response.data.knownAs;
            this.city = response.data.city;
            this.country = response.data.country;
            this.introduction = response.data.introduction;
            this.interests = response.data.interests;
            this.knownAs = response.data.knownAs;
            this.lookingFor = response.data.lookingFor;
            console.log(this.member);
        });
    }

    private async updateProfile() {
        const id = this.profileId();
        // console.log(id);
        await UpdateProfile({
            knownAs: this.knownAs,
            city: this.city,
            country: this.country,
            introduction: this.introduction,
            interests: this.interests,
            lookingFor: this.lookingFor,
        }, id!)
    }

    private profileId() {
            if (users.token.token) {
            const token = users.token.token;
            this.tokenData = jwt.decode(token);
            const stringify = JSON.stringify(jwt.decode(token));
            const memberId = parseInt(JSON.parse(stringify).nameid);
            return memberId;
        }
    }

    private async onFileSelected(event: any) {
        this.fileSelected = event.target.files[0];
        const fd = new FormData();
        const uploadFile = fd.append('image', this.fileSelected, this.fileSelected.name);
        await AddPhoto(uploadFile, this.profileId()!);
    }

    private created() {
        if (users.token.token) {
            const token = users.token.token;
            this.tokenData = jwt.decode(token);
            const stringify = JSON.stringify(jwt.decode(token));
            const memberId = parseInt(JSON.parse(stringify).nameid);
            this.getMember(memberId);
        }
    }

    
}
</script>