export default {
  namespaced: true,
  state: {
    data: {},
  },

  mutations: {
    SET_DATA(state, value) {
      state.data = value;
    },
  },

  getters: {
    getData: (state) => state.data,
  },

  actions: {
    fetchData({ commit }, formData) {
      axios.post(`${SETTINGS.endpoint}/events/all`, formData).then((response) => {
        commit('SET_DATA', response.data.posts);
      });
    },
  },
};
