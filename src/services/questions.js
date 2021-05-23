import axios from "axios";
const baseUrl =
  "https://shrouded-sierra-15470.herokuapp.com/api/questions";

export const getAll = () => {
  return axios.get(baseUrl).then((response) => {
    const { data } = response;
    return data;
  });
};

export const create = (body) => {
  return axios
    .post(baseUrl, {
      body,
    })
    .then((response) => {
      const { data } = response;
      return data;
    });
};
