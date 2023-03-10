export default {
  namespaced: true,
  state: {
    username: 'xiao ming',
  },
  getters: {
    userFirstName(state) {
      return state.username.split(' ').shift();
    },
  },
  mutations: {
    saveUsername(state, newName) {
      state.username = newName;
    },
  },
  actions: {
    fetchUsername({ commit }, gender = 'male') {
      setTimeout(() => {
        if (gender === 'male') {
          commit('saveUsername', { username: 'xiao li' });
        } else {
          commit('saveUsername', { username: 'xiao hong' });
        }
      });
    },
  },
};
