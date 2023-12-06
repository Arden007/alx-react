import rootReducer from "./rootReducer";
import { Map } from "immutable";

describe("rootReducer", () => {
  it("initial state matches the expected structure", () => {
    const initialState = rootReducer(undefined, {});

    const expectedState = {
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    };

    expect(initialState.toJS()).toEqual(expectedState);
  });
});
