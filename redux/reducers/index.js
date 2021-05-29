import { Data } from "../../Data";

const initialState = {
  Data, 
  currentCard:Data[0],
  iconName: ''
}
export default function (state = initialState, {type, payload}){
  switch (type) {
    case "CHANGE_NAV_PARAMS":
      return  {...state, currentCard: state.Data[payload]}
    case "CHANGE_ICON":
      return  {...state, iconName: payload}
    default:
      return state;
  }
};