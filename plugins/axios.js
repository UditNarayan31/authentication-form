export default function ({ $axios, redirect }) {
	$axios.onRequest(config => {
	  console.log('AXIOS PLUGIN CONFIG :: Making request to ' + config.url)
	  config.withCredentials = true
	  return config
	})
  
	$axios.onError(error => {
	  const code = parseInt(error.response && error.response.status)
	  if (code === 400) {
		redirect('/login')
	  }
	})
	$axios.interceptors.response.use(function (response) {
	  return response;
	}, function (error) {
	  console.info('hello ')
	  if (403 === error.response.status) {
		//   store.dispatch("logout")
		console.info('LOGOUT')
	  } else {
		return Promise.reject(error);
	  }
	});
  }