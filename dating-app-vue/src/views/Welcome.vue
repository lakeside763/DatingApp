<template>
    <div class="container">
      <div class="row">
        <!-- <div class="col-md-12">
          <ul class="">
            <li v-for="(value, index) in values" :key="index" class="list-item">{{value.name}}</li>
          </ul>p
        </div> -->
        <div class="col-md-12 text-center" style="margin-top: 50px;">
          <h3>Welcome to Online Dating App</h3>
          <h5><router-link class="text-primary" to="/register">Sign Up</router-link></h5>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import users from '../store/modules/users';
import { Value } from '../store/models/users.d';

@Component({
  components: {
  },
})
export default class Home extends Vue {
  private values: Value[] = [];

  public created() {
      users.values().then(() => {
        this.values = users.value;
      });
  }
}
</script>
