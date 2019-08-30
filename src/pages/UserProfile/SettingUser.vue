<template>
<div class="container">

  <form style="height : 500px">
    <md-card >
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Setting</h4>
        <p class="category">Complete your setting</p>
      </md-card-header>

      <md-card-content style="height :500px">
        <div class="md-layout">
          <div class="md-layout-item md-size-100 text-left">
            <md-button id="toggle-btn" @click="toggleModal2"  class="md-raised md-success">Add User</md-button>
            <md-button  id="show-btn" @click="showModal" class="md-raised md-success">Update Profile</md-button>
            <md-button id="toggle-btn" @click="toggleModal"  class="md-raised md-success">Set Your Password</md-button>
          </div>

            <b-modal  ref="my-modal3" hide-footer title="Setting">
                <div class="d-block text-center">
                    <h3>Add Account</h3>
                </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                        <label>Name</label>
                        <md-input v-model="param['name']" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                        <label>Email Address</label>
                        <md-input v-model="param['email']" type="email"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                        <label>Password</label>
                        <md-input v-model="param['password']" type="password"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                        <label>Phone</label>
                        <md-input v-model="param['phone']" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                        <label>Company</label>
                        <md-input v-model="param['company']" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                        <label>Country</label>
                        <md-input v-model="param['country']" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                        <label>Address</label>
                        <md-input v-model="param['address']" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-100 text-right">
                        <md-button @click="funcPost()"  class="md-raised md-success">Submit</md-button>
                    </div>
            </b-modal>

            <b-modal  ref="my-modal" hide-footer title="Setting">
                <div class="d-block text-center">
                    <h3>Update Your Profil</h3>
                </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                        <label>Name</label>
                        <md-input v-model="updateId['name']" value="" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                        <label>Email Address</label>
                        <md-input v-model="updateId['email']" value="" type="email"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                        <label>Phone</label>
                        <md-input v-model="updateId['phone']" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                        <label>Company</label>
                        <md-input v-model="updateId['company']" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                        <label>Country</label>
                        <md-input v-model="updateId['country']" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                        <label>Address</label>
                        <md-input v-model="updateId['address']" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-100 text-right">
                        <md-button @click="funcUpdate()"  class="md-raised md-success">Update Profile</md-button>
                    </div>

            </b-modal>
            <b-modal ref="my-modal2" hide-footer title="Set Password">
                <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                        <label>Current Password</label>
                        <md-input v-model="updatePw['password']" type="password"></md-input>
                        </md-field> 
                    </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                        <label>New Password</label>
                        <md-input name="pass" v-model="password" type="password"></md-input>
                        </md-field>

                    </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                        <label>Confirm Password</label>
                        <md-input name="cpass" v-model="password2" type="password"></md-input>
                        </md-field>
                    </div>
                 <div class="md-layout-item md-size-100 text-right">
                        <md-button @click="changePassword()" class="md-raised md-success">Change Password </md-button>
                    </div>
            </b-modal>
        </div>
      </md-card-content>
    </md-card>
  </form>
</div>
</template>
<script>
import Vue from "vue";
import user from '../../api/user/index';
import VueLocalStorage from 'vue-localstorage'
 
// Vue.use(VueLocalStorage)

Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true //created computed members from your variable declarations
})

export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
        name : "",
        email : "",
        phone : "",
        company : "",
        country : "",
        address : "",
        password : "",
        password1 : "",
        password2 : "",
        param : {},
        dataUser : {},
        updateId : [],
        updatePw : [],
    };
  },
 beforeCreate() {
     let self = this
            user
            .getById(window, self.$ls.get("userNow"))
            .then(function(datas){
                return datas;
            })
            .then(function(result){
                self.updateId = result;
                console.log ("ini id update" , self.updateId)
            })
            .catch(function(err){
                console.log(err)
            });
        },

  methods: {
    funcPost() {
    const self = this;
    const param = {}
            user
            .PostUser(window, self.param)
            .then(function(datas) {
                return datas;
            })
            .then(function(result) {
                 if(result){
                    alert('Account anda Berhasil ditambahkan');
                self.$router.push('dashboard')
                }
                 else {
                   alert('Data yang anda masukkan salah');

                }
            })
            .catch(function(err) {
                console.log(err);
            });
        },
    funcUpdate() {
    let self = this;
    let  updateId = []
            user
            .apiUpdateUser(window, self.updateId)
            .then(function(datas) {
                return datas;
            })
            .then(function(result) {
                 if(result){
                    alert('Account anda Berhasil diupdate');
                    console.log("sudah ke update", result)
                }
                 else {
                   alert('Data yang anda masukkan salah');

                }
            })
            .catch(function(err) {
                console.log(err);
            });
        },
    changePassword() {
    let self = this;
    let updatePw = []
            user
            .apiUpdateUser(window, self.updatePw)
            .then(function(datas) {
                return datas;
            })
            .then(function(result) {
                 if(result){
                    alert('Password anda berhasil diganti');
                    console.log("sudah ke ganti", result)
                }
                 else {
                   alert('Data yang anda masukkan salah');

                }
            })
            .catch(function(err) {
                console.log(err);
            });
        },

      showModal(param) {
        this.$refs['my-modal'].show()
      },
      hideModal(param) {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal2'].toggle('#toggle-btn')
      },
      toggleModal2(param) {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal3'].toggle('#toggle-btn')
      },
    },
};

</script>
<style></style>
