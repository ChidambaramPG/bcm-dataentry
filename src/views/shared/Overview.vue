<template>
    <div class="row">
        <div class="col-lg-4 col-md-6 overview-card">
            <div class="card">
                <div class="card-header">
                    Total Cards Added
                </div>
                <div class="card-body">                    
                    1200 <i class="fas fa-arrow-up fa-xs"></i>
                </div>
            </div>  
        </div>

        <div class="col-lg-4 col-md-6 overview-card">
            <div class="card">
                <div class="card-header">
                    Available Cards
                </div>
                <div class="card-body">
                    5500 <i class="fas fa-arrow-up fa-xs"></i>                    
                </div>
            </div>  
        </div>

        <div class="col-lg-4 col-md-6 overview-card">
            <div class="card">
                <div class="card-header">
                    Monthly Quota
                </div>
                <div class="card-body">
                    3000 <i class="fas fa-arrow-down fa-xs"></i>
                    
                </div>
            </div>  
        </div>
      </div>
</template>

<script>
import store from '../../store/index.js';
export default {
    name:"Overview",
    computed:{
      brochureCount(){
        return store.state.brochureCount;
      },
      businessCardCount(){
        return store.state.businessCardsCount;
      },
      categoriesCount(){
        return store.state.categoriesCount;
      },
      usersCount(){
        return store.state.usersCount;
      },
      
      
    },
}
</script>

<style scoped>

.overview-card{
    padding:20px;
    height:80px;
    margin-top:20px;
}
.svg-inline--fa.fa-arrow-up{
    color:orange;
}
.svg-inline--fa.fa-arrow-down{
    color:red;
}

.card-header{
    background-color:#f95473;
    color: white;
    font-size:14px;
}

.card-body{
    font-size:14px;
    font-weight: 800;
    color:#212b5e;
}

</style>