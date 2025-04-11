export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const initialState = {
  loading: false,
  token: null,
};

export default (state = initialState, action) => {
  console.log("AUTH REDUCER", state, action);

  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
        token: action.payload.token,
      };

    case LOGOUT:
      return {
        ...state,
        token: null,
      };

    default:
      return state;
  }
};
