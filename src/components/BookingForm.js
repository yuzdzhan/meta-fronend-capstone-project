import { useEffect, useState } from "react";
import "./BookingPage.css";
import { PrimaryButton } from "./PrimaryButton";
import { useAvailableTimes } from "../state/ContextAvailableTimesProvider";

export function BookingForm() {
  const {state: availableTimes, dispatch, initializeTimes }  = useAvailableTimes();

  const availableOccasions = [
    { value: "birthday", label: "Birthday" },
    { value: "anniversary", label: "Anniversary" },
  ];

  const [state, setState] = useState({
    date: "",
    time: "",
    guests: 0,
    occasion: "",
  });

  const onChange = (name, value) => {
    if(name==='date'){
      dispatch({type: 'UPDATE_TIMES', payload: new Date(value)});
    }
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    initializeTimes();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form className="form">
      <div>
        <label htmlFor="res-date">Choose date</label>
        <input
          onChange={(e) => onChange("date", e.target.value)}
          value={state.date}
          type="date"
          id="res-date"
        />
      </div>
      <div>
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={state.time}
          onChange={(e) => onChange("time", e.target.value)}
        >
          {!!availableTimes && availableTimes.map((time) => (
            <option key={time.value} value={time.value}>
              {time.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="guests">Number of guests</label>
        <input
          onChange={(e) => onChange("guests", e.target.value)}
          value={state.guests}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
      </div>
      <div>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={state.occasion}
          onChange={(e) => onChange("occasion", e.target.value)}
        >
          {availableOccasions.map((occasion) => (
            <option key={occasion.value} value={occasion.value}>
              {occasion.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <PrimaryButton type="submit" value="Make Your reservation" />
      </div>
    </form>
  );
}
