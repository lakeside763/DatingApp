<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-sm-4">
                <div class="card border-light">
                    <div class="card-img-wrapper">
                        <div style="overflow: hidden;">
                            <div class="row mt-5">
                                <div class="col-md-8 offset-2">
                                    <img v-bind:src="member.photoUrl" width="100%" alt="altText"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div>
                            <p class="text-1">
                                <strong>Location: </strong>
                                <span>{{member.city}}, {{member.country}}</span>
                            </p>
                            <p class="text-1">
                                <strong>Age: </strong>
                                <span>{{member.age}}</span>
                            </p>
                            <p class="text-1">
                                <strong>Last Active: </strong>
                                <span>{{member.lastActive}}</span>
                            </p>
                            <p class="text-1">
                                <strong>Member since: </strong>
                                <span>{{member.created}}</span>
                            </p>
                        </div>
                    </div>
                    <div class="card-footer text-center">
                        <button class="btn btn-info">Like</button>
                        <button class="btn btn-success">Message</button>
                    </div>
                </div> 
            </div>
            <div class="col-sm-8">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Description</a>
                        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Interest</a>
                        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Photo</a>
                    </div>
                </nav>
                    <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <h6 class="mt-4">Description</h6>
                    <p>{{member.introduction}}</p>   

                    <h6 class="mt-4">Looking For</h6>
                    <p>{{member.lookingFor}}</p>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <h6 class="mt-4">Interest</h6>
                        <p>{{member.interests}}</p>
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <h6 class="mt-4">Photos</h6>
                        <div v-for="(image, index) in images" :key="index">
                            <img :src="image.url"  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .text-1 {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
</style>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { GetMember } from '../services/user-api';
import { Photo } from '@/store/models/photo';


@Component({
})
export default class MemberDetail extends Vue {
    private memberName: string = '';
    private member: {} = {};
    private images?: Photo[] = [];

    private async getMember() {
        const id = parseInt(this.$route.params.id);
        await GetMember(id).subscribe((response) => {
            this.member = response.data;
            this.images = response.data.photos;
            console.log(this.images);
        });
    }
    private created() {
        this.getMember();
    }
    
}
</script>
