export const state = () => {
  return {
    text:"",
    status:false,
  }
}

export const mutations = {
  setMessage: (state, text) => {
    state.text = text; // stateの状態を変更する
  },
  setStatus: (state, status) => {
    state.status = status; // stateの状態を変更する
  }
}

export const actions = {
  async showFlashMessage({ commit }, message) {
    commit('setStatus', true)
    setTimeout(() => {
      commit('setStatus', false)
    }, 2000);
    commit('setMessage', message)
    setTimeout(() => {
      commit('setMessage', null)
    }, 4000);
  }
}
