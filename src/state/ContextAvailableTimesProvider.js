import { createContext, useContext, useReducer } from 'react';

const ContextAvailableTimes = createContext();

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES": {
      console.log("UPDATE_TIMES", action)
      return state
    }
    default: {
      return state
    }
  }
}

const availableTimes= [
    { value: "1700", label: "17:00" },
    { value: "1800", label: "18:00" },
    { value: "1900", label: "19:00" },
    { value: "2000", label: "20:00" },
    { value: "2100", label: "21:00" },
    { value: "2200", label: "22:00" },
]

export const ContextAvailableTimesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(availableTimesReducer, availableTimes)

  return (
    <ContextAvailableTimes.Provider value={{ state, dispatch }}>
      {children}
    </ContextAvailableTimes.Provider>
  )
}

export const useAvailableTimes = () => {
  return useContext(ContextAvailableTimes)
}

