import category from '../../../api/header/category'
const state={
    navlists:[],
    sideNavlists:[],
    rGiflist:[]
}

const getters={

}

const mutations={
    setNavlists(state,value){
        state.navlists=value;
    },
    setSideNavlists(state,value){
        state.sideNavlists=value;
    },
    setRGiflist(state,value){
        state.rGiflist=value;
    }
}

const actions={
    getNavlists({commit}){
        var value=category.getNavlists();
        commit('setNavlists',value);
    },
    getSideNavlists({commit}){
        var value=category.getSideNavlists();
        commit('setSideNavlists',value);
    },
    getRGiflist({commit}){
        var value=category.getRGiflist();
        commit('setRGiflist',value);
    }
}

export default({
    namespaced:true,
    state,
    getters,
    mutations,
    actions
})