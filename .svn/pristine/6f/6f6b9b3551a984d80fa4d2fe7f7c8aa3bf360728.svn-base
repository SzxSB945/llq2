const axios = require('axios')

const service = axios.create({
    baseURL : 'http://inc.justice.org.cn'
})

//service.defaults.timeout = 1000 * 60 * 2

service.interceptors.request.use( config => {
    //config.headers['Authorization'] = `Bearer ${cookie.get(tokenKey) || ''}`
    return config
})

export default service