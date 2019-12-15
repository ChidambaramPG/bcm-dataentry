<template>
  <div id="">
    <top-bar />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <overview v-if="dashboardSection == 'table'"/>
        </div>
        <!-- <overview v-if="dashboardSection == 'table'"/> -->
      </div>
      
      <latest-cards class="brochures-table" v-if="dashboardSection == 'table'" />
      <!-- <add-cards v-if="cardsSection == 'add'"/> -->
      <edit-card v-if="dashboardSection == 'edit'" />
    </div>
  </div>
</template>

<script>
import store from '../../store/index.js';
import TopBar from "../shared/TopBar.vue";
import Overview from '../shared/Overview.vue';
import LatestCards from '../components/dashboard/LatestCards.vue';
import EditCard from '../components/cards/EditCard.vue';

export default {
  name: "Dashboard",
  components: {
    TopBar,
    Overview,
    LatestCards,
    EditCard
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
