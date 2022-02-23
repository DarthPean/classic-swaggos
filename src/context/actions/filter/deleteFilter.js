/* eslint-disable import/no-anonymous-default-export */
import { DELETE_FILTER_OPTION } from '../../../constants/ActionType/index';

export default () => (dispatch) => {
  dispatch({
    type: DELETE_FILTER_OPTION,
  });
};
