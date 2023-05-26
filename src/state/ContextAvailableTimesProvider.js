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

  const initializeTimes = () => {
    const dates = fetchAPI(new Date());
    const options = formatAPIDates(dates);
    dispatch({type: 'INITIALIZE_TIMES', payload: options});
  };

  return (
    <ContextAvailableTimes.Provider value={{ state, dispatch, initializeTimes }}>
      {children}
    </ContextAvailableTimes.Provider>
  );
};

export const useAvailableTimes = () => {
  return useContext(ContextAvailableTimes);
};
