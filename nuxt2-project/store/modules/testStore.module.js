const state = () => ({
  counter: 0,
});

const getters = {
  getCounter: (state) => state.counter,
};

const actions = {
  async fetchCounter({ state }) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  },
};

const mutations = {
  increment(state) {
    state.counter++;
  },
};
export default {
  state,
  actions,
  mutations,
  getters,
};
