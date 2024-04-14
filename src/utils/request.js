import axios from "axios";

const request = axios.create({
  timeout: 30000,
});

// request拦截器
// 可以在请求发送前做一些处理
// 例如：// 添加token
request.interceptors.request.use(
  (config) => {
    // 设置请求头
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    let user = JSON.parse(localStorage.getItem("user-token") || "{}");
    config.headers['token'] = user.token;
    return config;
  },
  (error) => {
    console.error("request error" + error);
    return Promise.reject(error);
  }
);

// response拦截器
// 可以在接口响应后统一处理结果

request.interceptors.response.use(
  (response) => {
    // 兼容服务端返回的字符串数据
    if(typeof response === 'string') {
      response = response ? JSON.parse(response) : response
    }
    return response;
  },
  (error) => {
    console.error("response error" + error);
    return Promise.reject(error);
  }
);

export default request;