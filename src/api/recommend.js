import jsonp from "../common/js/jsonp";

import axios from "axios";

import * as config from "./config";

export function getRecommend() {
  const mianurl = `https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg`;

  const data = Object.assign({}, config.commonParams, {
    platform: "h5",
    needNewCode: 1,
    uin: 0
  });

  return jsonp(mianurl, data, config.options);
}

export function getdisclist() {
  const mianurl = "/api/getDiscList";

  const data = Object.assign({}, config.commonParams, {
    platform: "yqq",
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: "json"
  });

  return axios
    .get(mianurl, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data);
    });
}
