import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from './../utils'

Vue.use(VueResource)

export default {

    getLogin(window, email, password){
        return getApiNoAuth()
        .get('Users/findOne?filter=%7B%22where%22%3A%7B%22email%22%3A%22'+email+'%22%2C%22password%22%3A%22'+password+'%22%7D%7D')
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
}