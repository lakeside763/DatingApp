<template>
    <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card border-light mb-3 mr-3" style="max-width: 200px; margin-right: 15px;">
            <div class="card-img-wrapper">
                <div style="overflow: hidden;">
                    <img v-bind:src="member.photoUrl" width="100%" alt="altText"/>
                </div>
                <ul class="list-inline member-icons animate text-center">
                    <li class="list-inline-item">
                        <router-link v-bind:to="'/member/' + member.id" class="btn btn-info"><i class="text-center fa fa-user"></i></router-link>
                        <button class="btn btn-info"><i class="text-center fa fa-heart"></i></button>
                        <button class="btn btn-info"><i class="text-center fa fa-envelope"></i></button>
                    </li>
                </ul>
            </div>
            <div class="card-body text-info">
                <h5 class="card-title text-center">{{member.knownAs}}, {{member.age}}</h5>
                <p class="card-text text-center">{{ member.city }}</p>
            </div>
        </div>        
    </div>
</template>
<style>
.card:hover img {
    transform: scale(1.2, 1.2);
    transition-duration: 500ms;
    transition-timing-function:  ease-out;
}
.card img {
    transform: scale(1.0, 1.0);
    transition-duration: 500ms;
    transition-timing-function:  ease-out;
}
.card-img-wrapper {
    position: relative;
    cursor: pointer;
}
.member-icons {
    position: absolute;
    bottom: -30%;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
    opacity: 0;
}
.btn {
    margin: 5px;
}
.card-img-wrapper:hover .member-icons{
    bottom: 0;
    opacity: 1;
}
.animate {
    transition: all 0.3s ease-in-out;
}
</style>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { User } from '@/store/models/users';
import { Subscription } from 'rxjs';
import { GetMembers } from '../services/user-api';

@Component({})
export default class MemberCard extends Vue {
    @Prop() private member!: User;
}
</script>
