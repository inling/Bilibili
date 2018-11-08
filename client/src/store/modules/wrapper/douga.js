import douga from '../../../api/wrapper/douga'
var state={
    subNavItems:[],
    sliderContent:[],
    homeCards:[]
}

var getters={

}

var mutations={
    setSubNavItems(state,value){
        state.subNavItems=value;
    },
    setSliderContent(state,value){
        state.sliderContent=value;
    },
    setHomeCards(state,value){
        state.homeCards=value;
    }
}

var actions={
    getSubNavItems({commit}){
        var value=douga.getSubNavItems();
        commit('setSubNavItems',value);
    },
    getSliderContent({commit}){
        var value=douga.getSliderContent();
        commit('setSliderContent',value);
    },
    getHomeCards({commit}){
        var value=douga.getHomeCards();
        commit('setHomeCards',value)
    }
}

export default({
    namespaced:true,
    state,
    getters,
    mutations,
    actions
})