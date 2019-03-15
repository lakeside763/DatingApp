<template>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul class="">
            <li v-for="(value, index) in values" :key="index" class="list-item">{{value.name}}</li>
          </ul>
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
