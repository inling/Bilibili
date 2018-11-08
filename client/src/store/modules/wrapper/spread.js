import spread from '../../../api/wrapper/spread'
var state={
    spreadCards:[]
}

var getter={

}

var mutations={
    setSpreadCards(state,value){
        state.spreadCards=value;
    }

}

var actions={
    getSpreadCards({commit}){
        var value=spread.getSpreadCards();
        commit('setSpreadCards',value)
    }
}

export default({
    namespaced:true,
    state,
    getter,
    mutations,
    actions
})