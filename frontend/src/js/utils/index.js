import axios from 'axios';

export const getTime = str => {
  let d = new Date(str);
  return d.toString();
};

export const getData = (url, cb) => {
  axios
    .get(url)
    .then(res => cb(res.data))
    .catch(err => console.error(err));
};

export const postData = (url, options, cb) => {
  axios
    .post(url, options)
    .then(res => cb(res.data))
    .catch(err => console.error(err));
};

export const deleteData = (url, config, cb) => {
  axios
    .delete(url, config)
    .then(res => cb(res.data))
    .catch(err => console.error(err));
};
