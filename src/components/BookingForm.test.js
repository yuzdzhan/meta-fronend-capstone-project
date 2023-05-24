import { render } from "@testing-library/react";
import { ContextAvailableTimesProvider } from "../state/ContextAvailableTimesProvider";
import { BookingForm } from "./BookingForm";

describe("BookingForm", () => {
  test("should have date label", () => {
    const { getByText } = render(
      <ContextAvailableTimesProvider>
        <BookingForm />
      </ContextAvailableTimesProvider>
    );

    expect(getByText("Choose date")).toBeInTheDocument();
  });
});
