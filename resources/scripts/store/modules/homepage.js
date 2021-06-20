export default {
  namespaced: true,
  state: {
    intro: {},
    hero: {},
    community: {},
    sliders: {},
    partners: {},
  },

  mutations: {
    SET_HERO(state, value) {
      state.hero = value;
    },
    SET_INTRO(state, value) {
      state.intro = value;
    },
    SET_COMMUNITY(state, value) {
      state.community = value;
    },
    SET_SLIDER(state, value) {
      state.sliders = value;
    },
    SET_PARTNER(state, value) {
      state.partners = value;
    },
  },

  getters: {
    getIntro: (state) => state.intro,
    getHero: (state) => state.hero,
    getCommunity: (state) => state.community,
    getSlider: (state) => state.sliders,
    getPartner: (state) => state.partners
  },

  actions: {
    fetchData({ commit }, formData) {
      axios.post(`${SETTINGS.endpoint}/homepage/detail`, formData).then((response) => {
        commit('SET_HERO', response.data.hero);
        commit('SET_INTRO', response.data.intro);
        commit('SET_COMMUNITY', response.data.community);
      });
    },
    fetchSlider({ commit }, formData) {
      axios.post(`${SETTINGS.endpoint}/homepage/slider`, formData).then((response) => {
        commit('SET_SLIDER', response.data.posts);
      });
    },
    fetchPartner({ commit }, formData) {
      axios.post(`${SETTINGS.endpoint}/homepage/partner`, formData).then((response) => {
        commit('SET_PARTNER', response.data.posts);
      });
    },
  },
};
