import bgImage from '../../../api/header/bgImage'
const state={
    bgImages:[],
    bgImageIcon:[]
}

const getters={

}

const mutations={
    setBgImages(state,value){
        state.bgImages=value;
    },
    setBgImageIcon(state,value){
        state.bgImageIcon=value;
    }
}

const actions={
    getBgImages({commit}){
        var value=bgImage.getBgImages();
        commit('setBgImages',value);
    },
    getBgImageIcon({commit}){
        var value=bgImage.getBgImageIcon();
        commit('setBgImageIcon',value);
    }
}

export default({
    namespaced:true,
    state,
    getters,
    mutations,
    actions
})