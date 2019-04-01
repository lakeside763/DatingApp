<template>
    <div class="container">
      <div class="row">
        <!-- <div class="col-md-12">
          <ul class="">
            <li v-for="(value, index) in values" :key="index" class="list-item">{{value.name}}</li>
          </ul>
        </div> -->
        <div class="col-md-12 text-center" style="margin-top: 50px;">
          <h3>Welcome {{tokenData.unique_name}}</h3>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import users from '../store/modules/users';
import { Value } from '../store/models/users.d';
import jwt from 'jsonwebtoken';
// import { GetValues } from '../store/api/api';
import { GetValues } from '../services/user-api';
import { Observable, Subscription } from 'rxjs';
import { error } from 'util';

@Component({
  components: {
  },
})
export default class Home extends Vue {
  private tokenData: {} | null = {};
  private values: any;
  private valuesSub$!: Subscription;

  public async getValues() {
    this.valuesSub$ = await GetValues().subscribe((response) => {
      this.values = response.data;
      // console.log(this.values);
    });
  }
  //  private GetValues$ = Observable.create(() => {
  //   GetValues().subscribe((response) => {
  //       console.log(response);
  //     })
  // });

  public created() {
    if (users.token.token) {
      const token = users.token.token;
      this.tokenData = jwt.decode(token);
    }
    this.getValues();
  }

  public destroyed() {
    this.valuesSub$.unsubscribe();
  }
}
</script>
