<template>
  <div class="hello">
    <ul v-for="item in products" :key="item.id">
      <li>{{item.name}}</li>
      <li>{{item.id}}</li>
      <li><span class="add" v-on:click="add($event,{id: item.id, name: item.name})">+</span>
          <span class="text" v-if="shopcar.length != 0">{{shopcar}}</span>
          <span class="subtract" v-on:click="subtract($event,{id: item.id, name: item.name})">-</span>
      </li>
    </ul>
    <span class="add" v-on:click="add">+</span>
    <span class="text">{{shopcar}}</span>
    <span class="subtract" v-on:click="subtract">-</span>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      // counts: this.$store.state.count
    }
  },
  computed: mapState({
    shopcar: state => state.shopcar,
    products: state => state.products
  }),
  methods: {
    add(e, obj){
      this.$store.commit('increment', {counts: 1, id: obj.id, name:obj.name})
    },
    subtract(e, obj){
      this.$store.commit('subtract',  {counts: 1, id: obj.id, name:obj.name})
    }
  },
  created(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span{
  font-size: 30px;
}
.text{
  display: inline-block;
  width: 150px;
}
.add{
  padding: 30px;
  font-size: 30px;
}
.subtract{
  padding: 30px;
  font-size: 30px;
}
</style>
