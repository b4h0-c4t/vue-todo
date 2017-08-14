import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

Vue.use(Vuex);

const Todo = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  getters: {
    getListView(state, getters, rootState) {
      return rootState.listView;
    },
    getTasks(state, getters, rootState) {
      return rootState.tasks;
    }
  }
}

const Header = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    plusBtn({commit, state, rootState}) {
      commit('mutateListView', null, {root: true});
    }
  },
  getters: {}
}

export default new Vuex.Store({
  state: {
    listView: true,
    tasks: [
      {
        'name': 'task1',
        'limit': '2017/08/21',
        'desc': 'task1 description.'
      },
      {
        'name': 'task2',
        'limit': '2017/08/25',
        'desc': 'task2 description.'
      },
      {
        'name': 'task3',
        'limit': '2017/09/01',
        'desc': 'task3 description.'
      }
    ]
  },
  mutations: {
    addTask(state, value) {
      state.tasks.push(value);
    },
    rmTask(state, value) {
      state.tasks = state.tasks.slice(0, value).concat(state.tasks.slice(value + 1, state.tasks.length));
    },
    mutateListView(state) {
      if(state.listView) {
        state.listView = false;
      } else {
        state.listView = true;
      }
    }
  },
  modules: {
    Todo,
    Header
  }
});
