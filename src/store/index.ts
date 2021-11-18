import { createStore } from 'vuex';

export interface State {
  count: number;
}

const store = createStore<State>({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
  },
  getters: {
    double(state: State) {
      return 2 * state.count;
    },
  },
});

export default store;
