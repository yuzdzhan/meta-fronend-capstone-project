import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { BookingPage, HomePage } from "./components";
import { ContextAvailableTimesProvider } from "./state/ContextAvailableTimesProvider";
import { ConfirmedBookingPage } from "./components/ConfirmedBookingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/book",
    element: <BookingPage />,
  },
  {
    path: "/confirmed",
    element: <ConfirmedBookingPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ContextAvailableTimesProvider>
        <RouterProvider router={router} />
      </ContextAvailableTimesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
