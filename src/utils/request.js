import axios from "axios";
import { ElMessage } from "element-plus";

const request = axios.create({
  timeout: 30000,
});

// request拦截器：注入 token
request.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    const user = JSON.parse(localStorage.getItem("user-token") || "{}");
    config.headers['token'] = user.token;
    return config;
  },
  (error) => {
    console.error("request error" + error);
    return Promise.reject(error);
  }
);

// response拦截器：统一处理 401 未授权
request.interceptors.response.use(
  (response) => {
    const body = response.data;
    // 后端业务层返回 401 时统一弹提示、清 token、跳登录
    if (body && body.code === "401") {
      // 并发请求时只处理一次（第一个清掉 token 后，后续请求看到 token 已为空就跳过）
      if (localStorage.getItem("user-token") !== null) {
        ElMessage.error(body.msg || "登录已过期，请重新登录");
        localStorage.removeItem("user-token");
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
      }
      return Promise.reject(new Error("未授权"));
    }
    return response;
  },
  (error) => {
    console.error("response error" + error);
    return Promise.reject(error);
  }
);

export default request;
