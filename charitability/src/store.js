import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

//initiate Vuex
Vue.use(Vuex);

export const store = new Vuex.Store({
    //all data stored in state
    state:{
        currentUser:'',
        userImgUrl: '',
        isAdmin: false,
        goal: 0,
        donationTotal: 0,
        favoriteList: [],
        donatedCharities: [],
        reviewedCharities: []
    },
    mutations: {
        //set currentUser and userImgUrl, called when page is refreshed
        setUser(state, payload) {
            state.currentUser = payload.email; 
            state.userImgUrl = payload.photoURL;
            //set isAdmin to true if user is admin
            if(payload.email=='admin@admin.com'){
                state.isAdmin=true;
            } 
        }
    },
    actions: {
        //calls on setUser mutation
        autoSignIn ({commit}, payload) {
            commit('setUser', {email: payload.email, photoURL:payload.photoURL})
        }
    },
    //get the currentUser
    getters: {
        getUser: (state) => {
            return state.currentUser; 
        }
    }
});