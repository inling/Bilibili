const state={
    isLogin:true,
    pageIndex:0,
    userInfo:{
        account :'',
        iface:'img/header/noface.gif',
        niface:'img/header/akari.jpg'
    },
}

const getters={ 
    pageIndex:function(state){
        return state.pageIndex;
    },
    isLogin:function(state){
        return state.isLogin;
    }
}

const mutations={
    setPageIndex(state,value){
       state.pageIndex=value; 
    },
    setIsLogin(state,value){
        state.isLogin=value; 
    }
}

const actions={
    getPageIndex({commit},value){
        commit('setPageIndex',value)
    },
    getIsLogin({commit},value){
        commit('setIsLogin',value)
    },
}

export default({
    namespaced:true,
    state,
    getters,
    mutations,
    actions
})