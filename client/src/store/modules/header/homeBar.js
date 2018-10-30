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
    setBarContent(state,value){
        state.barContent=value;
    },
    setGameCenter(state,value){
        state.gameCenter=value;
    },
    setLive(state,value){
        state.live=value;
    },
    setBMLs(state,value){
        state.bmls=value;
    },
    setErW(state,value){
        state.erW=value;
    }
}

//提交mutation
const actions={
    getBarContent({commit}){
        var value=homeBar.getBarContent();
        commit('setBarContent',value)
    },
    getGameCenter({commit}){
        var value=homeBar.getGameCenter();
        commit('setGameCenter',value)
    },
    getLive({commit}){
        var value=homeBar.getLive();
        commit('setLive',value)
    },
    getBMLs({commit}){
        var value=homeBar.getBMLs();
        commit('setBMLs',value)
    },
    getErW({commit}){
        var value=homeBar.getErW();
        commit('setErW',value)
    }
}

export default({
    namespaced: true,
    state,
    getters,
    mutations,
    actions
})