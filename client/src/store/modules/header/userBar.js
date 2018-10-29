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
    setBarContent(state,contents){
        state.barContent=contents;
    },
    setBVipRecommands(state,contents){
        state.bVipRecommands=contents;
    },
    setInfos(state,contents){
        state.infos=contents;
    },
    setDynamic(state,contents){
        state.dynamic=contents;
    },
    setLaterSees(state,contents){
        state.laterSees=contents;
    },
    setCollection(state,contents){
        state.collection=contents;
    },
    setSubmission(state,contents){
        state.submission=contents;
    }


}

const actions={
    getBarContent({commit}){
        var contents=userBar.getBarContent();
        commit('setBarContent',contents);
    },
    getBVipRecommands({commit}){
        var contents=userBar.getBVipRecommands();
        commit('setBVipRecommands',contents);
    },
    getInfos({commit}){
        var contents=userBar.getInfos();
        commit('setInfos',contents);
    },
    getDynamic({commit}){
        var contents=userBar.getDynamic();
        commit('setDynamic',contents);
    },
    getLaterSees({commit}){
        var contents=userBar.getLaterSees();
        commit('setLaterSees',contents);
    },
    getCollection({commit}){
        var contents=userBar.getCollection();
        commit('setCollection',contents);
    },
    getSubmission({commit}){
        var contents=userBar.getSubmission();
        commit('setSubmission',contents)
    }

}

export default({
    namespaced:true,
    state,
    getters,
    mutations,
    actions
})