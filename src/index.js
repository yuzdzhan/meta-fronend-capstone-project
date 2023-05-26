import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { BookingPage, HomePage } from "./components";
import { ContextAvailableTimesProvider } from "./state/ContextAvailableTimesProvider";
import { ContextReservationsProvider } from "./state/ContextReservationsProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/book",
    element: <BookingPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextReservationsProvider>
      <ContextAvailableTimesProvider>
        <RouterProvider router={router} />
      </ContextAvailableTimesProvider>
    </ContextReservationsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
