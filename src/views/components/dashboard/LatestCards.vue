<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card-box">
        <div class="table-responsive">
          <div class="row">
            <div class="col-md-12 ">
              <h5 class="table-title">Latest additions</h5>
              <div class="row border">
                <div class="col-md-4">
                  <a href="">
                    <img
                      class="card-img img-responsive"
                      src="../../../assets/img/card.jpg"
                    />
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="">
                    <img
                      class="card-img img-responsive"
                      src="../../../assets/img/card.jpg"
                    />
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="">
                    <img
                      class="card-img img-responsive"
                      src="../../../assets/img/card.jpg"
                    />
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="">
                    <img
                      class="card-img img-responsive"
                      src="../../../assets/img/card.jpg"
                    />
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="">
                    <img
                      class="card-img img-responsive"
                      src="../../../assets/img/card.jpg"
                    />
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="">
                    <img
                      class="card-img img-responsive"
                      src="../../../assets/img/card.jpg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row pagination-row">
          <nav aria-label="Page navigation page-nav">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "../../../store/index.js";
export default {
  name: "LatestCards",
  methods: {
    showEditCardsModal() {
      store.commit("toggleEditCardModal");
    },
    showDeleteCardsModal() {
      store.commit("toggleDeleteCardModal");
    },
    showEditCard() {
      store.commit("setDashboardSection", "edit");
    }
  }
};
</script>
<style scoped>
table {
  border-top: none;
  font-size: 14px;
}

th {
  font-weight: 400;
}
.table-title {
  margin-top: 50px;
  padding: 10px;
}

.table-head {
  background-color: #f95473;
  color: white;
}
.pagination-row {
  padding-top: 10px;
}
nav {
  width: 100%;
}

li.page-item > a {
  color: #f95473;
  background-color: white;
}
li.page-item.active > a {
  color: #f95473;
  background-color: #212b5e;
  border-color: transparent;
}
.card-img {
  width: 80%;
  margin: 20px;
}
.avl-cards{

}
</style>
