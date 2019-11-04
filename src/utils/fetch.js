import axios from 'axios'

const fetch = ({ url, params, method = 'GET', data }) => {
  const options = {
    url,
    method,
    params,
    data,
    timeout: 10000,
    withCredentials: true
  }
  return new Promise((resolve, reject) => {
    axios(options)
      .then(res => {
        resolve(res.data)
        // console.log(res);
      })
      .catch(error => {
        reject(error)
        // console.log(error);
      })
  })
}

export default fetch
