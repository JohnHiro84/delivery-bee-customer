import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import comments from './comments_reducer';
import orders from "./orders_reducer";
import reviews from "./reviews_reducer";
import toast from "./toast_reducer";

const RootReducer = combineReducers({
  errors,
  session,
  comments,
  orders,
  reviews,
  toast
});

export default RootReducer;
