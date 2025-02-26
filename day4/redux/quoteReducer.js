import { createStore, combineReducers } from "redux";

// Step 1: Define Initial State
const initialState = {
  quotes: [],
};

// Step 2: Define Action Creator 
export const setQuotes = (quotes) => ({
  type: "SET_QUOTES", 
  payload: quotes,
});

// Step 3: Define Reducer -called when action is dispatched
const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUOTES":
      return {
        ...state,
        quotes: action.payload,
      };
    default:
      return state; 
  }
};

// Step 4: Combine Reducers (If More Reducers Exist)
const rootReducer = combineReducers({
  quotes: quoteReducer,
});

// Step 5: Create Store
export const store = createStore(rootReducer);

export default quoteReducer;
