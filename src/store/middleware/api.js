import axios from 'axios';
import * as actions from '../api';

const api = state => next => async action => {
  if (action.type !== actions.apiCallBegan.type) return next(action);
  const { baseURL, url, method, data, onStart, onSuccess, onError } =
    action.payload;
  if (onStart) state.dispatch({ type: onStart });

  try {
    console.log(action.payload);
    const response = await axios.request({
      baseURL,
      url,
      method,
      data,
    });

    state.dispatch(actions.apiCallSuccess(response.data));
    if (onSuccess) state.dispatch({ type: onSuccess, payload: response.data });
  } catch (err) {
    console.log(err);
    state.dispatch(actions.apiCallFailed(err));
    if (onError) state.dispatch({ type: onError });
  }
};

export default api;
