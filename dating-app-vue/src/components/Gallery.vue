<template>
    <div class="image">
        <!-- <img class="image" v-bind:src="url" /> -->
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Image } from '@/store/models/users.d';

@Component({})
export default class Gallery extends Vue {
    // @Prop() private image?: Image;
}
</script>
