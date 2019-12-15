<template>
  <div class="home">
    <div class="row" v-if="showSidebar">
      <div class="col-md-2 sidebar-content">
        <sidebar />
      </div>
      <div class="col-md-10 page-content border-left">
        <dashboard v-if="activePage === 'dashboard'" />
        <cards v-else-if="activePage === 'cards'" />
        <profile v-else-if="activePage == 'profile'"/>
        <settings v-else-if="activePage == 'settings'" />
        <history v-else-if="activePage == 'history'"/>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-md-12 page-content border-left">
        <dashboard v-if="activePage === 'dashboard'" />
        <cards v-else-if="activePage === 'cards'" />
        <profile v-else-if="activePage == 'profile'"/>
        <settings v-else-if="activePage == 'settings'" />
        <history v-else-if="activePage == 'history'"/>
      </div>
    </div>
    <div class="row">
      <all-modals />
    </div>
  </div>
</template>

<script>
import Sidebar from "./shared/Sidebar.vue";
import Dashboard from "./pages/Dashboard.vue";
import Cards from "./pages/Cards.vue";
import Profile from './pages/Profile.vue';
import Settings from './pages/Settings.vue';
import History from './pages/History.vue';

import AllModals from "./shared/AllModals.vue";
import store from "../store/index.js";

export default {
  name: "home",
  components: {
    Sidebar,
    Dashboard,
    AllModals,
    Cards,
    Profile,
    Settings,
    History
  },
  computed: {
    showSidebar() {
      return store.state.sidebarVisible;
    },
    activePage() {
      return store.state.activePage;
    }
  }
};
</script>

<style scoped>
.page-content {
  padding: 0px;
}

.sidebar-content {
  padding: 0px;
}
</style>
