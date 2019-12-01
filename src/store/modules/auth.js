// import router from '@/router';

const state = () => {
  return {
    user: {}
  };
};

const getters = {};

const actions = {
  async login({ commit }) {
    commit({
      type: 'setUser',
      user: {
        email: 'asdf@gmail.com',
        isAdmin: true
      }
    });
  }
};

const mutations = {
  setUser(state, payload) {
    state.user = payload.user;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
