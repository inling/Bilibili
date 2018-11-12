import Vue from 'vue';
import Vuex from 'vuex';
import global from './modules/global'
import bgImage from './modules/header/bgImage'
import category from './modules/header/category'
import homeBar from './modules/header/homeBar'
import userBar from './modules/header/userBar'
import elevator from './modules/elevator/elevator'
import recommand from './modules/wrapper/recommand'
import spread from './modules/wrapper/spread'
import douga from './modules/wrapper/douga'
import player from './modules/wrapper/player'

Vue.use(Vuex);

const debug=process.env.NODE_ENV!=='production'

export default new Vuex.Store({
    modules:{
        global,
        bgImage,category,homeBar,userBar,          //header
        elevator,                                   //右侧栏
        recommand,spread,douga,player
    },
    strict:debug
});