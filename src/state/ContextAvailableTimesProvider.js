import { createContext, useContext, useReducer } from "react";
import { fetchAPI } from '../api/api.js'
import { formatAPIDates } from "../utils/helpers.js";

const ContextAvailableTimes = createContext();

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_TIMES": {
      return [...action.payload];
    }
    case "UPDATE_TIMES": {
      const dates = formatAPIDates(fetchAPI(action.payload));
      return [...dates];
    }
    default: {
      return state;
    }
  }
};

const availableTimes = [ ];

export const ContextAvailableTimesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(availableTimesReducer, availableTimes);

  return (
    <ContextAvailableTimes.Provider value={[ state, dispatch]}>
      {children}
    </ContextAvailableTimes.Provider>
  );
};

export const useAvailableTimes = () => {
  return useContext(ContextAvailableTimes);
};
