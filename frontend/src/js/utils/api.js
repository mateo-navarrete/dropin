//jscs:disable requireShorthandArrowFunctions
import axios from 'axios';

export const deleteData = (url, config, res, next) => {
  return axios.delete(url, config);
};

export const getData = url => {
  return axios.get(url);
};

export const postData = (url, options) => {
  return axios.post(url, options);
};
