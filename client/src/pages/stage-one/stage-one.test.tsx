import React from "@testing-library/react";
import { shallow } from "enzyme";
import StageOne from ".";

it("renders a SyncButton component", () => {
  const shallowComponent = shallow(<StageOne />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("SyncButton");
});
