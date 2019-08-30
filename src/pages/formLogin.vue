<template> 
  <b-container>
    <form class="form-signin" >
       <img src=".././assets/img/web/Teknoglobal-Logo-Complete.png" style="width:300px" alt="" />
      <h2 class="form-signin-heading">Please sign in</h2>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" @click="funcLogin()">Sign in</button>
    </form>
  </b-container>
</template>

<script>
import Vue from "vue";
import login from '.././api/login/index';

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',s
    }
  },
  methods: {
     funcLogin() {
     let self = this;

            login
            .getLogin(window, self.email, self.password)
            .then(function(result) {
              
              if(result){
              self.$ls.set('userNow', result.id)
              console.log("id nya dia" , self.$ls.get("userNow"))
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

<style lang="css">
body {
  background: rgb(80, 41, 3);
}

.login-wrapper {
  background: whitesmoke;
  width: 70%;
  margin: 12% auto;
}

.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
