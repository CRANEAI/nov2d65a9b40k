import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import sign_up from "./reducer_sign_up"
import follow from "./reducer_follow"
import share from "./reducer_share"
import payment from "./reducer_payment"
import search from "./reducer_search"

const rootReducer = combineReducers({
  sign_up: sign_up,
  follow: follow,
  share: share,
  payment: payment,
  search: search
})

export default rootReducer
