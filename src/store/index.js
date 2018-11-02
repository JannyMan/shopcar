
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        products:[
            {
                id:100001,
                //counts:0,
                name:'蛋炒饭'
            },
            {
                id:526532,
                //counts:0,
                name:'酸菜鱼'
            },
            {
                id:1023232,
                //counts:0,
                name:'水煮肉片'
            }
        ],
        shopcar: []
    },
    mutations: {
        increment (state, obj) {
            if(state.shopcar.findIndex(x => x.id == obj.id) != -1){
                state['shopcar'][state.shopcar.findIndex(x => x.id == obj.id)]['counts'] ++
            }else if(state.shopcar.findIndex(x => x.id == obj.id) == -1){
                state.shopcar.push(obj)
            }
            'counts' in state['products'][state.products.findIndex(x => x.id == obj.id)] ? state['products'][state.products.findIndex(x => x.id == obj.id)]['counts']++ : state['products'][state.products.findIndex(x => x.id == obj.id)]['counts'] = state['shopcar'][state.shopcar.findIndex(x => x.id == obj.id)]['counts']
            
            
            console.log(state.shopcar)
            console.log(state.products)
        },
        subtract (state, obj) {
            console.log(state.shopcar)
            if(state.shopcar.findIndex(x => x.id == obj.id) != -1){
                state['shopcar'][state.shopcar.findIndex(x => x.id == obj.id)]['counts'] --
            }else if(state.shopcar.findIndex(x => x.id == obj.id) == -1){
                //state.shopcar.push(obj)
            }
            state['products'][state.products.findIndex(x => x.id == obj.id)]['counts'] = state['shopcar'][state.shopcar.findIndex(x => x.id == obj.id)]['counts']
        }
    }
  })

  export default store