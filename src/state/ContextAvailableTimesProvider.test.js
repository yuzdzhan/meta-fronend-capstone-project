import { render, fireEvent } from "@testing-library/react";
import {
  ContextAvailableTimesProvider,
  useAvailableTimes,
} from "./ContextAvailableTimesProvider";

const TestExample = () => {
  const [ state, dispatch ] = useAvailableTimes();

  return (
    <>
      <div data-testid="state-len">{!!state && state.length}</div>
      <button
        data-testid="dispatch-button"
        onClick={() => dispatch("UPDATE_TIMES")}
      >
        Test Button
      </button>
    </>
  );
};

describe("ContextAvailableTimesProvider", () => {
  test("should should have initial state of 6 elements", () => {
    const { getByTestId } = render(
      <ContextAvailableTimesProvider>
        <TestExample />
      </ContextAvailableTimesProvider>
    );

    const stateLen = getByTestId("state-len");

    expect(stateLen.textContent).toContain("0");
  });

  test("should return the same state after dispatching the UPDATE_TIMES event", () => {
    const { getByTestId } = render(
      <ContextAvailableTimesProvider>
        <TestExample />
      </ContextAvailableTimesProvider>
    );

    const stateLen = getByTestId("state-len");
    const initialLen = stateLen.textContent;

    const button = getByTestId("dispatch-button");
    fireEvent.click(button);

    expect(stateLen.textContent).toBe(initialLen);
  });
});
