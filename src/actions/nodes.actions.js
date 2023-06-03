import axios from "axios";

// export const GET_USERS = "GET_USERS";

export const GET_NODES = "GET_NODES";

export const getNodes = () => {
  return (dispatch) => {
    return axios
    .get(`${process.env.REACT_APP_API_URL}nodes`)
      .then((res) => {
        dispatch({ type: GET_NODES, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};