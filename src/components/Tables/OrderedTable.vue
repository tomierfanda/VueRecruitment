<template>
    <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>
    <md-table
     v-model="pelamarData" :table-header-color="tableHeaderColor">
      <md-table-row id="my-table"
     :per-page="perPage"
     :current-page="currentPage"
     small
     slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Job Applied">{{ item.jobApplied }}</md-table-cell>
        <md-table-cell md-label="Phone">{{ item.phone }}</md-table-cell>
        <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Birth Day">{{ item.birthDate }}</md-table-cell>
        <md-table-cell md-label="Jenis Kelamin">{{ item.jenisKelamin }}</md-table-cell>
        <md-table-cell md-label="Agama">{{ item.agama }}</md-table-cell>
        <md-table-cell md-label="Status">{{ item.status }}</md-table-cell>
        <md-table-cell md-label="School">{{ item.school }}</md-table-cell>
        <md-table-cell md-label="Major">{{ item.major }}</md-table-cell>
        <md-table-cell md-label="Yearsr">{{ item.years }}</md-table-cell>
        <md-table-cell md-label="GPA">{{ item.GPA }}</md-table-cell>
        <md-table-cell md-label="Skill">{{ item.coreSkill }}</md-table-cell>
        <md-table-cell md-label="Source">{{ item.source }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import Vue from "vue";
import pelamar from '../../api/pelamar/index';

export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      perPage: 3,
        currentPage: 1,
      selected: [],
      pelamarData: []
    };
  },
     beforeCreate() {
    let self = this;

            pelamar
            .getPelamar(window)
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
};
</script>
