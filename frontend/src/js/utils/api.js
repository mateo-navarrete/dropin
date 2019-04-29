//jscs:disable requireShorthandArrowFunctions
import axios from 'axios';

export const deleteData = (url, config) => {
  return axios.delete(url, config);
};

export const getData = url => {
  return axios.get(url);
};

export const postData = (url, options) => {
  return axios.post(url, options);
};

// export const deleteData = (url, config, cb) => {
//   axios
//     .delete(url, config)
//     .then(res => cb(res.data))
//     .catch(err => console.error(err));
// };

// export const getData = (url, cb) => {
//   axios
//     .get(url)
//     .then(res => cb(res.data))
//     .catch(err => console.error(err));
// };
//
// export const postData = (url, options, cb) => {
//   axios
//     .post(url, options)
//     .then(res => cb(res.data))
//     .catch(err => console.error(err));
// };
