import Vue from 'vue';
import Vuex from 'vuex';
import global from './modules/global'
import bgImage from './modules/header/bgImage'
import category from './modules/header/category'
import homeBar from './modules/header/homeBar'
import userBar from './modules/header/userBar'

Vue.use(Vuex);

const debug=process.env.NODE_ENV!=='production'

export default new Vuex.Store({
    modules:{
        global,
        bgImage,category,homeBar,userBar,          //header
    },
    strict:debug
});