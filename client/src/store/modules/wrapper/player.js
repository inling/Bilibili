import player from '../../../api/wrapper/player'
var state={
    video:{
        url:'',
        title:'',
        pic:'',
        picNum:''
    }
}

var getters={

}

var mutations={
    setVideo(state,value){
        state.video=value;
    }
}

var actions={
    getVideo({commit},value){
        var value=player.getVideo();
        commit('setVideo',value)
    }
}

export default({
    namespaced:true,
    state,
    getters,
    mutations,
    actions
})