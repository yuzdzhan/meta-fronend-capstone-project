import { useEffect, useState } from "react";
import "./BookingPage.css";
import { PrimaryButton } from "./PrimaryButton";
import { useAvailableTimes } from "../state/ContextAvailableTimesProvider";
import { fetchAPI, submitAPI } from "../api/api";
import { formatAPIDates } from "../utils/helpers";

export function BookingForm() {
  const [availableTimes, dispatch] = useAvailableTimes();

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

  const [errorState, setErrorState] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const onChange = (name, value) => {
    if (name === "date") {
      dispatch({ type: "UPDATE_TIMES", payload: new Date(value) });
    }
    setState({ ...state, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;

    setErrorState({
      date: "",
      time: "",
      guests: "",
      occasion: "",
    });

    let tmpErrors = {};
    if (state.date === "") {
      tmpErrors["date"] = "Please, select date!";
      hasErrors = true;
    }
    if (state.time === "") {
      tmpErrors["time"] = "Please, select time!";
      hasErrors = true;
    }
    if (state.guests <= 0) {
      tmpErrors["guests"] = "Please, enter number of guests!";
      hasErrors = true;
    }
    if (state.occasion === "") {
      tmpErrors["occasion"] = "Please, select occasion!";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrorState({ ...tmpErrors });
      return;
    }

    const isSuccess = submitAPI(state);

    if (isSuccess) {
      setState({
        date: "",
        time: "",
        guests: 0,
        occasion: "",
      });
      window.location = "/confirmed";
    }
  };

  useEffect(() => {
    const dates = fetchAPI(new Date());
    const options = formatAPIDates(dates);
    dispatch({ type: "INITIALIZE_TIMES", payload: options });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form className="form">
      <div>
        <label htmlFor="res-date">Choose date</label>
        <input
          onChange={(e) => onChange("date", e.target.value)}
          value={state.date}
          required={true}
          type="date"
          id="res-date"
        />
        {!!errorState.date && (
          <div className="inputError">{errorState.date}</div>
        )}
      </div>
      <div>
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={state.time}
          required={true}
          onChange={(e) => onChange("time", e.target.value)}
        >
          <option>Select</option>
          {!!availableTimes &&
            availableTimes.map((time) => (
              <option key={time.value} value={time.value}>
                {time.label}
              </option>
            ))}
        </select>
        {!!errorState.time && (
          <div className="inputError">{errorState.time}</div>
        )}
      </div>
      <div>
        <label htmlFor="guests">Number of guests</label>
        <input
          onChange={(e) => onChange("guests", e.target.value)}
          value={state.guests}
          required={true}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        {!!errorState.guests && (
          <div className="inputError">{errorState.guests}</div>
        )}
      </div>
      <div>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          required={true}
          value={state.occasion}
          onChange={(e) => onChange("occasion", e.target.value)}
        >
          <option>Select</option>
          {availableOccasions.map((occasion) => (
            <option key={occasion.value} value={occasion.value}>
              {occasion.label}
            </option>
          ))}
        </select>
        {!!errorState.occasion && (
          <div className="inputError">{errorState.occasion}</div>
        )}
      </div>
      <div>
        <PrimaryButton
          onClick={onSubmit}
          type="submit"
          value="Make Your reservation"
        />
      </div>
    </form>
  );
}
