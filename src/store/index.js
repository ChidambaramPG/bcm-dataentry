import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    brochureCount:150,
    businessCardsCount:100,
    categoriesCount:40,
    usersCount:20,
    brochures:[],
    businessCards:[],
    categories:[],
    users:[],


    sidebarVisible:true,

    // page views
    activePage:'dashboard',
    categorySubTag:'all',
    cardsSecton:'table',
    usersSection:'table',
    categorySection:'table',
    dashboardSecton:'table',

    // modal views
    newBrochureModalVisible:false,
    editBrochureModalVisible:false,
    deleteBrochureModalVisible:false,
    newCardsModalVisible:false,
    editCardsModalVisible:false,
    deleteCardsModalVisible:false,
    newCategoryModalVisible:false,
    


  },
  mutations: {
    toggleSidebar: state => {
      state.sidebarVisible = !state.sidebarVisible
    },
    setActivePage: (state,payload) => {
      state.activePage = payload;
    },
    toggleNewBrochureModal: state=>{
      state.newBrochureModalVisible = !state.newBrochureModalVisible;
    },
    toggleNewCardModal: state => {
      state.newCardsModalVisible = !state.newCardsModalVisible;
    },
    toggleEditBrochureModal: state => {
      state.editBrochureModalVisible = !state.editBrochureModalVisible;
    },
    toggleDeleteBrochureModal: state => {
      state.deleteBrochureModalVisible = !state.deleteBrochureModalVisible;
    },
    toggleEditCardModal: state => {
      state.editCardsModalVisible = !state.editCardsModalVisible;
    },
    toggleDeleteCardModal: state => {
      state.deleteCardsModalVisible = !state.deleteCardsModalVisible;
    },
    toggleNewCategoryModal: state => {
      state.newCategoryModalVisible = !state.newCategoryModalVisible;
    },
    toggleNewCardSection: state => {
      state.cardsSecton = 'add'
    },
    toggleEditCard: state => {
      state.cardsSecton = 'edit'
    },
    setCardsSection: (state,payload) => {
      state.cardsSecton = payload;
    },
    setUsersSection:(state,payload) => {
      state.usersSection = payload;
    },
    setCategorySection: (state,payload) => {
      state.categorySection = payload;
    },
    setDashboardSection: (state,payload) =>{
      state.dashboardSecton = payload;
    },
  },
  actions: {

  },
  modules: {},
  getters:{
    getBrochureCount:state => {
      return state.brochureCount;
    }
  }
});
