<template>
  <md-toolbar  md-elevation="0" class="md-transparent"  v-if="['Dashboard','Setting'].indexOf($route.name) > -1">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-autocomplete">
            <md-autocomplete
              class="search"
              v-model="selectedEmployee"
              :md-options="employees"
            >
              <label>Search...</label>
            </md-autocomplete>
          </div>
          <md-list>
            <md-list-item href="#/">
              <i class="material-icons">dashboard</i>
              <p class="hidden-lg hidden-md">Dashboard</p>
            </md-list-item>

            <md-list-item @click="$bvToast.show('example-toast')">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Profile</p>
            </md-list-item>

            <img src="../../assets/img/source/logo.png"  style="width : 50px"/>
            <li>
           <p>Hallo {{ pelamarData.name }} </p>
            </li>

      <b-toast id="example-toast" title="My Account" static no-auto-hide>
              <md-list-item @click="funcLogout()">
              <i  class="material-icons">logout</i>
              </md-list-item>

    </b-toast>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import Vue from "vue";
import User from '../../api/user/index';
export default {
  data() {
    return {
       pelamarData: [],
      title : "Hallo Admin",
      selectedEmployee: null,
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone"
      ]
    };
  },

   beforeCreate() {
    let self = this;

            User
            .getById(window, self.$ls.get("userNow"))
            .then(function(datas) {
                return datas;
            })
            .then(function(result) {
                console.log(result);
                self.pelamarData = result;
            })
            .catch(function(err) {
                console.log(err);
            });
        },

  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    funcLogout() {
    let self = this
    self.$ls.remove("userNow")
    console.log("id nya " , self.$ls.get("userNow"))
    if (self){
      alert("Anda Telah Logout")
      self.$router.push('login')
     }
    }
  }
};
</script>

<style lang="css"></style>
