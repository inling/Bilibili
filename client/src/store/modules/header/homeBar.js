import homeBar from '../../../api/header/homeBar'
const state={
    barContent:[],
    gameCenter:{},
    live:{},
    bmls:[],
    erW:{}
}

const getters={

}
//变更状态
const mutations={
    setBarContent(state,contents){
        state.barContent=contents;
    },
    setGameCenter(state,contents){
        state.gameCenter=contents;
    },
    setLive(state,contents){
        state.live=contents;
    },
    setBMLs(state,contents){
        state.bmls=contents;
    },
    setErW(state,contents){
        state.erW=contents;
    }
}

//提交mutation
const actions={
    getBarContent({commit}){
        var contents=homeBar.getBarContent();
        commit('setBarContent',contents)
    },
    getGameCenter({commit}){
        var contents=homeBar.getGameCenter();
        commit('setGameCenter',contents)
    },
    getLive({commit}){
        var contents=homeBar.getLive();
        commit('setLive',contents)
    },
    getBMLs({commit}){
        var contents=homeBar.getBMLs();
        commit('setBMLs',contents)
    },
    getErW({commit}){
        var contents=homeBar.getErW();
        commit('setErW',contents)
    }
}

export default({
    namespaced: true,
    state,
    getters,
    mutations,
    actions
})