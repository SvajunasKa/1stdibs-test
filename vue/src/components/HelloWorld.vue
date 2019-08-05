<template>
  <div class="hello">
    <h1>{{ $store }}</h1>



  </div>
</template>

<script>
	import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data(){
  	return{
  		mss: "laba diena"
    }
  },
  props: {
    msg: String
  },
  mounted(){
      this.$store.dispatch('fetchData');
  },
	computed: {
		...mapState([
			'items'
		]),
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
