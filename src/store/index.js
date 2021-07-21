import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        isLoggedIn: false,
        username:null,
        name:null,
    },
    mutations:{
    },
    actions:{
        setLoggedInUser(state,payload){
            console.log(payload);
            state.isLoggedIn = payload.loggedIn;
            state.username=payload.username;
            state.name=payload.name;
        },
        clearUser(state){
            state.isLoggedIn = false;
            state.username=null;
            state.name=null;
        },
    },
    modules:{},
});