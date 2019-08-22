<template>
<div class="container col-sm-8">
<div>
  <b-card bg-variant="light" style="width:120%">
    <b-form-group
    @submit="funcLogin"
      label-cols-lg="3"
      label="Silahkan Login"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        v-model="email"
        label-cols-sm="3"
        label="Email:"
        label-align-sm="right"
      >
        <b-form-input id="email"></b-form-input>
      </b-form-group>

      <b-form-group
        v-model="password"
        label-cols-sm="3"
        label="Password:"
        label-align-sm="right"
      >
        <b-form-input id="nested-city"></b-form-input>
      </b-form-group>

     
    <b-button type="submit" variant="outline-primary">Login</b-button>
    </b-form-group>
  </b-card>
</div>
</div>
</template>

<script>
import Vue from "vue";
import login from '.././api/login/index';

  export default {
    data() {
      return {
          email : "",
          password : "",

      }
    },
    methods: {
     funcLogin() {
     let self = this;

            login
            .getLogin(window, self.email, self.password)
            .then(function(datas) {
                return datas;
            })
            .then(function(result) {
                console.log(result);
            })
            .catch(function(err) {
                console.log(err);
            });
        }
    }
  }
</script>