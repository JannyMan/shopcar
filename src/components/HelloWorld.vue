<template>
  <div class="hello">
    <span class="add" v-on:click="add">+</span>
    <span class="text">{{counts}}</span>
    <span class="jian" v-on:click="jian">-</span>
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
    counts: state => state.shopcar
  }),
  methods: {
    add(){
      //this.$store.commit('increment', {counts: 1, id: parseInt(Math.random()*100000), name:'蛋炒饭'})
      this.$store.commit('increment', {counts: 1, id: 1000001, name:'蛋炒饭'})
    },
    jian(){
      this.$store.commit('jian',  {counts: 1, id: 1000001, name:'蛋炒饭'})
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
.jian{
  padding: 30px;
  font-size: 30px;
}
</style>
