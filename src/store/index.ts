import { createStore } from 'vuex';

export interface State {
  count: number;
}

const store = createStore<State>({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      // eslint-disable-next-line
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
