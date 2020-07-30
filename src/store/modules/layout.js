import {types} from './types/index'
const state = {
    spreadIconShow :false,
}

const mutations = {
    [types.CHANGESPREADICONSHOW](state,val){
        // console.log("****");
        // console.log(val)
        // console.log(state.spreadIconShow)
        state.spreadIconShow = val
        // console.log(state.spreadIconShow)

    }
}

export default {
    namespaced: true,
    state,
    mutations
}