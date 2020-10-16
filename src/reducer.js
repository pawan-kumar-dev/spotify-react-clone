export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : ""
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
};
export default reducer;
