<template>
   <div class="content">
  <b-navbar toggleable="lg" type="dark" variant="info">
     <div class="logo">
      <a href="#" class="simple-text logo-mini">
  
          <img src=".././assets/img/web/Teknoglobal-Logo-Complete.png" style="width:250px" alt="" />

      </a>
      </div>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">
           <i class="material-icons">phone</i>
            CONTACT US</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <!-- <template  slot="button-content"> <i  class="material-icons">logout</i><em>User</em></template> -->
        </b-nav-item-dropdown>
          <mdb-btn @click.native="showModal = true" color="info">Launch modal contact form</mdb-btn>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
      <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src=".././assets/img/web/banner.png"
          alt="image slot"
        >
        <h3>JOIN OUR EXTRAORDINARY TEAM</h3>
        <p> PT.Tekno Global is the best place for you who have passion in programming. </p>
        
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide>
         <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src=".././assets/img/web/banner.png"
          alt="image slot"
        >
        <h3>Hello world!</h3>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide>
          <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src=".././assets/img/web/banner.png"
          alt="image slot"
        >
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src=".././assets/img/web/banner.png"
          alt="image slot"
        >
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src=".././assets/img/web/banner.png"
          alt="image slot"
        >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
    <div class="container col-md-12 lead-wrapper">
            <h5 style="center"> JOIN OUR EXTRAORDINARY TEAM </h5>
        <div class="container">
            <marquee scrolldelay="200">PT. Teknlo Global is the best place for you who have passion in Progammer..</marquee>
        </div>
    </div>


<b-container class="col-md-12">
  <mdb-card style="width:100%">
    <mdb-card-header class="pt-4 amy-crisp-gradient">
      <mdb-card-title><strong>Register Pelamar</strong></mdb-card-title>
    </mdb-card-header>
    <mdb-card-body>
      <mdb-row>
        <mdb-col>
            <md-icon>person</md-icon>
          <b-form-input v-model="param['name']" placeholder="Enter your name"></b-form-input>
        </mdb-col>
        <mdb-col>
            <md-icon>work</md-icon>
            <b-form-input v-model="param['jobApplied']" placeholder="Job Applied"></b-form-input>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col>
            <md-icon>phone</md-icon>
          <b-form-input v-model="param['phone']" placeholder="Phone"></b-form-input>
        </mdb-col>
        <mdb-col>
            <md-icon>email</md-icon>
          <b-form-input v-model="param['email']" placeholder="Email"></b-form-input>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col>
            <md-icon>date_range</md-icon>
            <b-form-input type="date" v-model="param['birthDate']" placeholder="Birth Day"></b-form-input>
        </mdb-col>
        <mdb-col>
            <md-icon>wc</md-icon>
         <b-form-input v-model="param['jenisKelamin']" placeholder="Jenis Kelamin"></b-form-input>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col>
          <b-form-input v-model="param['agama']" placeholder="Agama"></b-form-input>
        </mdb-col>
        <mdb-col>
            <md-icon>date_range</md-icon>
          <b-form-input type="date" v-model="param['status']" placeholder="Status"></b-form-input>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col>
            
          <b-form-input v-model="param['school']" placeholder="School"></b-form-input>
        </mdb-col>
        <mdb-col>
            <md-icon>school</md-icon>
          <b-form-input v-model="param['major']" placeholder="Major"></b-form-input>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col>
            <md-icon>today</md-icon>
          <b-form-input v-model="param['years']" placeholder="Years"></b-form-input>
        </mdb-col>
        <mdb-col>
            <md-icon>school</md-icon>
          <b-form-input v-model="param['GPA']" placeholder="GPA"></b-form-input>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col>
            <md-icon>Skill</md-icon>
          <b-form-input v-model="param['coreSkill']" placeholder="Skill"></b-form-input>
        </mdb-col>
        <mdb-col>
            <md-icon>cloud</md-icon>
          <b-form-input v-model="param['source']" placeholder="Source"></b-form-input>
        </mdb-col>
      </mdb-row>
    </mdb-card-body>
    <mdb-card-footer class="white d-flex justify-content-end">
      <mdb-btn @click="funcPost()" gradient="amy-crisp" class="black-text" icon="paper-plane" rounded>Submit</mdb-btn>
    </mdb-card-footer>
  </mdb-card>
</b-container>
<!-- Modal -->
  <mdb-container>
    <mdb-row>
      <mdb-col size="12" class="text-center mb-5">
        <mdb-modal :show="showModal" @close="showModal = false" cascade class="text-left">
          <mdb-modal-header class="primary-color white-text">
            <h4 class="title"><fa class="fas fa-pencil-alt" /> Contact form</h4>
          </mdb-modal-header>
          <mdb-modal-body class="grey-text">
            <mdb-input size="sm" label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
            <mdb-input size="sm" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
            <mdb-input size="sm" label="Subject" icon="tag" group type="text" validate error="wrong" success="right"/>
            <mdb-textarea size="sm" :rows="2" label="Your message" icon="pencil"/>
          </mdb-modal-body>
          <mdb-modal-footer>
            <mdb-btn color="primary">Save changes</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</div>
</template>

<style>
.lead-wrapper {
    padding-top: 10px;
    padding-right: 0;
    padding-left: 0;
    padding-bottom: 10px;
    background-color:rgb(19, 184, 93);
    color: #f2f2f2;
}

</style>

<script>
import Vue from 'vue'
import Pelamar from '../api/pelamar/index'
 import { mdbContainer, mdbRow, mdbCol, mdbInput, mdbTextarea, mdbBtn, mdbIcon, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter } from 'mdbvue';
 import {
    mdbCard,
    mdbCardBody,
    mdbCardHeader,
    mdbCardTitle,
    mdbSelect,
    mdbTimePicker,
    mdbCardFooter,
    mdbAutocomplete
  } from "mdbvue";

  export default {
      name: "FormsPage",
    components: {
      mdbCard,
      mdbCardBody,
      mdbSelect,
      mdbTimePicker,
      mdbCardHeader,
      mdbCardTitle,
      mdbCardFooter,
      mdbAutocomplete,
      //Modal
       mdbContainer,
      mdbRow,
      mdbCol,
      mdbInput,
      mdbTextarea,
      mdbBtn,
      mdbIcon,
      mdbModal,
      mdbModalHeader,
      mdbModalBody,
      mdbModalFooter
    },
    data() {
      return {
        types: [
          'date'
        ],
        showModal: false,
        slide: 0,
        sliding: null,

        name: "",
        jobApplied : "",
        phone : 0,
        email : "",
        birthDate : "",
        jenisKelamin : "",
        agama : "" ,
        status : "",
        school : "",
        major : "" ,
        years : "",
        GPA : "",
        coreSkill : "",
        source : "",
        param : {}
      }
    },
    methods: {
    funcPost(){
    let self = this

        Pelamar
        .funcPostpelamar (window, self.param)
        .then (function(result){
            if (result) {
                console.log(result)
                alert ("Sukses")
            self.$router.push('#/')
            }
            else {
                   alert('Data yang anda masukkan salah');
            }
        })
        .catch(function(err){
            console.log(err)
        })
    },
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    },

  }
</script>