import originJSONP from "jsonp";

const jsonp = (url, data, option) => {
  if (url.slice(-1) === "?") {
    url = url.slice(0, url.length - 1);
  }
  url += (url.indexOf("?") < 0 ? "?" : "&") + params(data);
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};

function params(data) {
  let url_condition = "";
  for (let i in data) {
    let value = data[i] !== undefined ? data[i] : "";
    url_condition += `&${i}=${encodeURIComponent(value)}`;
  }
  return url_condition ? url_condition.slice(1) : "";
}

export default jsonp;
