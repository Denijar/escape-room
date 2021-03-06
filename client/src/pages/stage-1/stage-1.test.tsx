import React from "@testing-library/react";
import { shallow } from "enzyme";
import Stage1 from ".";

it("renders a SyncButton component", () => {
  const shallowComponent = shallow(<Stage1 nextStageURL="" />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("SyncButton");
});
