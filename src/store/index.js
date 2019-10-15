import Vue from 'vue'
import Vuex from 'vuex'
// import actions from './action'
import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
Vue.use(Vuex);
export default new Vuex.Store({
	state,
	// actions,
	getters,
	mutations
})