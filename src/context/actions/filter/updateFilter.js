/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { UPDATE_FILTER_OPTION } from '../../../constants/ActionType/index';

export default (payload) => (dispatch) => {
  // localStorage.setItem("filter", JSON.stringify(payload));
  dispatch({
    type: UPDATE_FILTER_OPTION,
    payload: payload,
  });
};
