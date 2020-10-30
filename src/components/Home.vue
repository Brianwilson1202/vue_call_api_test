<template>
  <div class="container">
    <h3>Please select Our Cool Beer!</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="beer in beers" v-bind:key="beer.id">
          <th scope="row">{{beer.id}}</th>
          <td class="home-beer-name" >{{beer.name}}</td>
          <td>
            <img v-bind:src="beer.image_url" class="img-fluid" alt="Responsive image" />
          </td>
          <td>
            <router-link
              to="/detail"
              class="btn btn-primary detail"
              v-on:click.native="setDetail(beer.id)"
            >Detail</router-link>
            <br />
            <button type="button" class="btn btn-warning add-cart" @click.prevent="addToCart">Add to cart</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",

  props: ["store"],

  data() {
    return {
      beers: null,
      count: 0
    };
  },

  created: function() {
    axios
      .get("https://api.punkapi.com/v2/beers?page=1&per_page=10")
      .then(res => {
        this.beers = res.data;
      });
  },

  methods: {
    addToCart: function() {
      this.store.addCount();
    },
    setDetail: function(num) {
      axios.get("https://api.punkapi.com/v2/beers/" + num).then(res => {
        this.store.setDetails(res.data);
      });
    }
  }
};
</script>

<style scoped>
.img-fluid {
  width: 80px;
  height: 300px;
}
.container h3 {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    color:rgb(19, 93, 230);
    text-align: center;
}
.table {
  text-align: center;
  vertical-align: middle;
}
.detail {
  margin-bottom: 10px;
  margin-top: 30px;
}
.home-beer-name {
  font-size: 1.5rem;
  /* font-weight: bold; */
}
</style>