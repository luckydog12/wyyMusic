import axios from "axios"

const req = axios.create({
  baseURL: "",
  timeout: 10000,
})
//拦截器
req.interceptors.request.use((config) => {
  return config
})
req.interceptors.response.use((res) => {
  return res
}),
  function(error: unknown) {
    console.log(error)
    return Promise.reject(error)
  }

export default req
