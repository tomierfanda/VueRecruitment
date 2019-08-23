import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from './../utils'

Vue.use(VueResource)

export default {

    getUser(window) {
        return getApiNoAuth().get('Users')
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    PostUser(window, param) {
        return getApiNoAuth().post('Users', param)
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    updateUser(window, param) {
        return getApiNoAuth().put('Users', param)
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

}