import recommand from '../../../api/wrapper/recommand'
var state={
    sliderContent:[],
    homeCards:[]
}

var getter={

}

var mutations={
    setSliderContent(state,value){
        state.sliderContent=value;
    },
    setHomeCards(state,value){
        state.homeCards=value;
    }
}

var actions={
    getSliderContent({commit}){
        var value=recommand.getSliderContent();
        commit('setSliderContent',value)
    },
    getHomeCards({commit}){
        var value=recommand.getHomeCards();
        commit('setHomeCards',value)
    }
}

export default({
    namespaced:true,
    state,
    getter,
    mutations,
    actions
})