import elevator from '../../../api/elevator/elevator'
const state={
    modules:[]
}

const getters={

}

const mutations={
    setModules(state,value){
        state.modules=value;
    }
}

const actions={ 
    getModules({commit},value){
        value=elevator.getModules();
        commit('setModules',value)
    }
}

export default({
    namespaced:true,
    state,
    getters,
    mutations,
    actions
})