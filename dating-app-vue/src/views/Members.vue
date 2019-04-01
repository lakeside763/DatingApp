<template>
    <div class="container">
        <div class="row" style="margin-top: 20px;">
            <MemberCard :key="index" :member="member" v-for="(member, index) in members"></MemberCard>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { User } from '@/store/models/users';
import { GetMembers } from '../services/user-api';
import { Subscription } from 'rxjs';
import MemberCard from '../components/MemberCard.vue';

@Component({
    components: {
        MemberCard,
    },
})
export default class Members extends Vue {
    private members: User[] = [];
    private sub$!: Subscription;

    public created() {
        this.getMembers();
    }

    public async getMembers() {
        this.sub$ = await GetMembers().subscribe((response) => {
            this.members = response.data;
        });
    }

    public destroyed() {
        this.sub$.unsubscribe();
    }
}
</script>
