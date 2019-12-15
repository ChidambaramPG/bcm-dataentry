<template>
  <div id="">
    <top-bar />
    <div class="container">
      <div class="row">
       <history-table/>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../store/index.js';
import TopBar from "../shared/TopBar.vue";
import HistoryTable from '../components/history/HistoryTable.vue';

export default {
  name: "History",
  components: {
    TopBar,
    HistoryTable
  },
  computed:{
    dashboardSection(){
      return store.state.dashboardSecton;
    }
  }
};
</script>
<style scoped>
.brochure-table{
  margin-top:150px;
}
</style>
