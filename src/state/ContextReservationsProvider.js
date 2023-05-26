import { createContext, useContext, useReducer } from "react";

const ContextReservations = createContext();

/**
 * @typedef TReservation
 * @property {string} id
 * @property {string} date
 * @property {string} time
 * @property {number} quests
 * @property {string} ocasion
 */

/**
 *
 * @param {TReservation[]} state
 * @param {{type: string, payload: ?TReservation}} action
 */
const reservationsReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_RESERVATION": {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

const reservations = [];
export const ContextReservationsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reservationsReducer, reservations);

  return (
    <ContextReservations.Provider value={[ state, dispatch ]}>
      {children}
    </ContextReservations.Provider>
  );
};

export const useReservatinons = () => useContext(ContextReservations);
