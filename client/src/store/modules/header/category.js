import category from '../../../api/header/category'
const state={
    navlists:[],
    sideNavlists:[],
    rGiflist:[]
}

const getters={

}

const mutations={
    setNavlists(state,contents){
        state.navlists=contents;
    },
    setSideNavlists(state,contents){
        state.sideNavlists=contents;
    },
    setRGiflist(state,contents){
        state.rGiflist=contents;
    }
}

const actions={
    getNavlists({commit}){
        var contents=category.getNavlists();
        commit('setNavlists',contents);
    },
    getSideNavlists({commit}){
        var contents=category.getSideNavlists();
        commit('setSideNavlists',contents);
    },
    getRGiflist({commit}){
        var contents=category.getRGiflist();
        commit('setRGiflist',contents);
    }
}

export default({
    namespaced:true,
    state,
    getters,
    mutations,
    actions
})