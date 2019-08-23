<template>
<div class="container col-sm-8">
<div>
  <b-card bg-variant="light" style="width:120%">
    <b-form-group
      label-cols-lg="3"
      label="Silahkan Login"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group

        label-cols-sm="3"
        label="Email:"
        label-align-sm="right"
      >
        <b-form-input id="email" v-model="email"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Password:"
        label-align-sm="right"
      >
        <b-form-input type="password" id="password" v-model="password"></b-form-input>
      </b-form-group>

     
    <b-button @click="funcLogin()" variant="outline-primary" input="password">Login</b-button>
    </b-form-group>
  </b-card>
</div>
</div>
</template>

<script>
import Vue from "vue";
import login from '.././api/login/index';
import { AlertPlugin } from 'bootstrap-vue';

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
            .then(function(result) {
               
                if(result){
                    alert('Selamat Anda Telah Login');
                self.$router.push('dashboard')
                }
                 else {
                   alert('Email atau Password yang anda masukkan salah');

                }
            })
        }
    }
  }
</script>