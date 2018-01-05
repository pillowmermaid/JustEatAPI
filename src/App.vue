<template>
<div id="app">
<div class="header">
<img class="main-logo" src="https://d3k6h8q47umtc.cloudfront.net/assets/dist/img/logos/je-logo-v2.svg">
<div class="search-form">
<input v-model="outcode" placeholder="Out Code">
<button v-on:click="getRestaurants">
<span class="show-desktop">Feed Me Now</span>
<i class="show-mobile fa fa-search"></i>
</button>
</div>
</div>
<div class="header-border"></div>

<div v-show="isLoading">
<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
</div>
<h2 class="server-message" v-show="resultMessage">
{{ resultMessage }}
</h2>
<Restaurant v-show="!isLoading" v-for="(restaurant, index) in restaurants" :key=index :restaurant=restaurant></Restaurant>
</div>
</template>

<script>

import Restaurant from './components/Restaurant'

let options = {
  'Accept-Tenant': 'uk',
  'Accept-Language': 'en-GB',
  'Authorization': 'Basic VGVjaFRlc3RBUEk6dXNlcjI=',
  'Host': 'public.je-apis.com'
}

export default {
  name: 'app',
  components: {Restaurant},
  data () {
    return {
      responseCode: '',
      restaurants: [],
      isLoading: false,
      outcode: '',
      resultMessage: ''
    }
  },
  methods: {
    getRestaurants: function () {
      let url = 'https://public.je-apis.com/restaurants?q='
      url += this.outcode
      let self = this
      self.isLoading = true
      self.restaurants = []
      self.resultMessage = ''
      self.$http.get(url, {headers: options}).then(response => {
        self.isLoading = false
        self.responseCode = response.status
        if (response.body['Restaurants'].length > 0) {
          self.restaurants = response.body['Restaurants']
        } else {
          self.resultMessage = 'Sorry, no restaurants found in your area :('
        }
      }, response => {
        self.responseCode = response.status
        self.isLoading = false
        self.resultMessage = 'Error 404! :0'
      })
    }
  }
}
</script>

<style>
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
}
.show-desktop {
  display: block;
}
.show-mobile {
  display: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  width: 100%;
  padding: 20px 30px;
  text-align: left;
  display: flex;
  justify-content: space-between;
}
.main-logo {
  max-width: 160px;
}
.header-border {
  width: 100%;
  margin-bottom: 10px;
  border-top: 4px solid #fa0029;
}
.search-form {
  align-self: flex-end;
  margin-top: 20px;
  display: flex;
  flex: 1 1 0;
  justify-content: flex-end;
}

.search-form input {
  max-width: 175px;
  height: 48px;
  padding: 10px;
  font-size: 16px;
  margin-right: 5px;
}
.search-form button {
  border-radius: 3px;
  padding: .5em .8em;
  font-size: 16px;
  font-weight: 800;
  height: 48px;
  color: white;
  border: 0;
  background-color: #266abd;
}


@media (max-width: 600px) {
  .show-desktop {
    display: none;
  }
  .show-mobile {
    display: block;
  }
  .header {
    display: block;
  }
  .search-form {
    display: block;
  }
  .search-form button {
    border-radius: 3px;
    padding: .5em .8em;
    font-size: 16px;
    font-weight: 800;
    height: 48px;
    color: white;
    border: 0;
    background-color: #266abd;
  }
}
</style>
