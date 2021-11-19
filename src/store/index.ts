import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol('storeKey');

export const store = createStore<State>({
  state: {
    count: 0,
  },
  getters: {
    double(state: State) {
      return 2 * state.count;
    },
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
    asyncIncrement({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 500);
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}

export default store;
