import React from "@testing-library/react";
import { shallow } from "enzyme";
import App from ".";

it("renders a SyncButton", () => {
  const shallowComponent = shallow(<App />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("SyncButton");
});
