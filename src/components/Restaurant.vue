<template>
<div :class="isOpen">
<div class="closed-tag">
  Closed
</div>
<div class="logo">
<img :src=restaurant.Logo[0].StandardResolutionURL />
</div>
<div class="restaurant-info">
<h2>{{ restaurant.Name }}</h2>
<div class="stars">
<i v-for="index in 5" :class="fillStar(index)" aria-hidden=true></i>
</div>
<h3>
<span class="foodType" v-for="foodType in restaurant.CuisineTypes">
{{ foodType.Name }}
</span>
</h3>
</div>
</div>
</template>

<script>
export default {
  name: 'Restaurant',
  props: ['restaurant'],
  data () {
    return {
      stars: {}
    }
  },
  mounted () {
    let stars = this.restaurant.RatingStars
    if (stars % 1 === 0) {
      this.stars = { int: stars, dec: 0 }
    } else {
      let dec = stars - Math.floor(stars)
      this.stars = { int: parseInt(stars), dec: dec }
    }
  },
  computed: {
    isOpen: function () {
      return {
        'restaurant-card open': this.restaurant.IsOpenNow,
        'restaurant-card closed': !this.restaurant.IsOpenNow
      }
    }
  },
  methods: {
    fillStar: function (index) {
      return {
        'fa fa-star': index <= this.stars.int,
        'fa fa-star-o': index > this.stars.int,
        'fa fa-star-half-o': index === this.stars.int + 1 && this.stars.dec > 0
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.restaurant-card {
  display: flex;
  max-width: 500px;
  margin: 10px auto;
  padding: 15px 10px;
  position: relative;
  border-bottom: 1px lightgrey solid;
}
.restaurant-card.closed {
  color: lightgrey;
}
.closed-tag {
  display: none;
}
.closed .closed-tag {
  display: block;
  position: absolute;
  right: 0;
  font-weight: bold;
  font-size: 12px;
  top: -10px;
  color: white;
  padding: 5px 10px;
  text-transform: uppercase;
  background-color: #D50525;
}
.logo,
.restaurant-info {
  text-align: left;
}
.logo {
  max-width: 75px;
  margin-right: 15px;
}
.logo img {
  width: 100%;
}
h2,
h3 {
  margin: 0;
  color: inherit;
}
h2 {
  font-size: 16px;
}
h3 {
  font-size: 13px;
}
.stars { 
  margin: 5px 0;
}
.fa-star,
.fa-star-half-o {
  color: #D50525;
}
.foodType:after {
  content: ',';
  position: relative;
  left: -2px;
}
.foodType:last-child:after {
  content: '';
}
</style>
