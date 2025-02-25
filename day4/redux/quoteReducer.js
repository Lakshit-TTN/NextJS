import { createStore, combineReducers } from "redux";

//step 3 here we provide the logic and reducer functions
const initialState = {
  quotes: [],
};

export const setQuotes = (quotes) => ({
  payload: quotes,
});

const quoteReducer = (state = initialState, action) => {
      return {
        ...state,
        quotes: action.payload,
      }  
};


//to combine reducers
const rootReducer = combineReducers({
  quotes: quoteReducer,
});

// //step1  : created store
export const store = createStore(rootReducer);

export default quoteReducer;



