
  export const state = () => ({
    token: null,
    user: null,
    isLoggedIn: false
  });
  
  export const mutations = {
    setToken(state, token) {
        state.token = token
    },
    setUser(state, user) {
        console.log('SET_USER', user)
        state.user = user
        state.isLoggedIn = !!(user)
    },
    logout(state) {
        state.user = null
        state.isLoggedIn = false
        //router.push({ name: 'LoginPage' })
    }
  };
  
  export const actions = {
    setToken(vuexContext, token){
      vuexContext.commit('setToken', token);
    },
    setUser(vuexContext, user){
      vuexContext.commit('setUser', user);
    },
    logout(vuexContext){
      vuexContext.commit('logout');
    }
  };
  
  export const getters = {
    getToken(state){
      return state.token;
    },
    getState(state){
      return state.isLoggedIn;
    },
    getUser(state){
      return state.user;
    },
  };
