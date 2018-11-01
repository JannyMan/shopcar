
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      shopcar: []
    },
    mutations: {
        increment (state, obj) {
            console.log(state.shopcar)
            let a = state.shopcar.findIndex(x => x.id == obj.id)
            console.log(state['shopcar'][a])
            if(a != -1){
                let arrobj = state['shopcar'][a]
                arrobj.counts++
            }else if(a == -1){
                state.shopcar.push(obj)
            }
        },
        jian (state, obj) {
            console.log(state.shopcar)
            let a = state.shopcar.findIndex(x => x.id == obj.id)
            console.log(state['shopcar'][a])
            if(a != -1){
                let arrobj = state['shopcar'][a]
                arrobj.counts--
            }else if(a == -1){
                //state.shopcar.push(obj)
            }
        }
    }
  })

  export default store