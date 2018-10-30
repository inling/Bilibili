import userBar from "../../../api/header/userBar"
const state={
    barContent:[],
    bVipRecommands:[],
    infos:[],
    dynamic:{},
    laterSees:[],
    collection:[],
    submission:[]
}

const getters={

}

const mutations={
    setBarContent(state,value){
        state.barContent=value;
    },
    setBVipRecommands(state,value){
        state.bVipRecommands=value;
    },
    setInfos(state,value){
        state.infos=value;
    },
    setDynamic(state,value){
        state.dynamic=value;
    },
    setLaterSees(state,value){
        state.laterSees=value;
    },
    setCollection(state,value){
        state.collection=value;
    },
    setSubmission(state,value){
        state.submission=value;
    }


}

const actions={
    getBarContent({commit}){
        var value=userBar.getBarContent();
        commit('setBarContent',value);
    },
    getBVipRecommands({commit}){
        var value=userBar.getBVipRecommands();
        commit('setBVipRecommands',value);
    },
    getInfos({commit}){
        var value=userBar.getInfos();
        commit('setInfos',value);
    },
    getDynamic({commit}){
        var value=userBar.getDynamic();
        commit('setDynamic',value);
    },
    getLaterSees({commit}){
        var value=userBar.getLaterSees();
        commit('setLaterSees',value);
    },
    getCollection({commit}){
        var value=userBar.getCollection();
        commit('setCollection',value);
    },
    getSubmission({commit}){
        var value=userBar.getSubmission();
        commit('setSubmission',value)
    }

}

export default({
    namespaced:true,
    state,
    getters,
    mutations,
    actions
})