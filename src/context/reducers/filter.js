import { UPDATE_FILTER_OPTION, DELETE_FILTER_OPTION } from "../../constants/ActionType/index";
import filterInitialState from '../initialStates/filterInitialState'

const selectedChat = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_FILTER_OPTION:
      return {
        ...state,
        base: payload.base,
        clothes: payload.clothes,
        ears: payload.ears,
        hat: payload.hat,
        mouth: payload.mouth,
        eyes: payload.eyes,
      };

    case DELETE_FILTER_OPTION:
      return filterInitialState

    default:
      return state;
  }
};

export default selectedChat;
