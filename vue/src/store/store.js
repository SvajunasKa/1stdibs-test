import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		items: []
	},
	actions:{
		fetchData({commit}){
			axios.get("http://localhost:3000/browse")
				.then(res => res.data.items)
				.then(items =>{
					commit('updateData', items);
				})
				.catch(error => console.log(error))
		}
	},
	mutations:{
		updateData(state, items) {
			state.items = items
			console.log(state.items)
		},
	}


});
