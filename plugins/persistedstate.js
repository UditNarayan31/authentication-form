import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

const PREFIX = "vx."
export default (ctx) => {
  let response = createPersistedState({
      // paths: ['user', 'isLoggedIn'],
      fetchBeforeUse : true,
      key: "bz",
      storage: {
          getItem: (key) => {
              key = PREFIX + key
              // See https://nuxtjs.org/guide/plugins/#using-process-flags
              try{
                if (process.server) {
                    try{
                      const parsedCookies = cookie.parse(ctx.ssrContext.req.headers.cookie);
                      console.log("getting ssr cookie state", parsedCookies)
                      return parsedCookies[key] ?? "";
                    }catch(e){
                      return ""
                    }
                } else {
                  console.log("getting client cookie state")
                  return Cookies.get(key) ?? "";
                }
              }catch(e){
                console.error(e)
              }
          },
          // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
          setItem: (key, value) => {
            console.log("setting store cookie")
            return Cookies.set(PREFIX + key, value, { expires: 365, secure: false })
          },
          
          removeItem: key => Cookies.remove(PREFIX + key)
      }
  })(ctx.store);
}