<template>
  <button 
    class="list-group-item active-section"
    @click.prevent="() => setContentLayout(name)"
    v-if="activePage == name"
  >
    {{ convertName(name) }}
  </button>
  <button 
    class="list-group-item list-group-item-action"
    @click.prevent="() => setContentLayout(name)"
    v-else
  >
    {{ convertName(name) }}
  </button>
</template>
<script>
import store from '../../../store/index.js';
export default {
  name: "SidebarMenuItem",
  methods: {
    setContentLayout: page => {
      store.commit("setActivePage", page);

      switch(page){
        case 'dashboard':{
          store.commit('setDashboardSection','table')
          break
        }
        case 'card':{
          store.commit('setCardsSection','table')
          break
        }
        default:{
          store.commit('setCardsSection','table')
          break
        }
      }

    },
    convertName(name){
      return name.charAt(0).toUpperCase()+name.slice(1)
    }
  },
  props: ["name"],
  computed:{
      activePage(){
          return store.state.activePage;
      }
  }
};
</script>
<style scoped>
.active-section {
  background-color: #f95473;
  color: white;
  text-align:right;
}
</style>
