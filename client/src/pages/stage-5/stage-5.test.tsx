import React from "@testing-library/react";
import { shallow } from "enzyme";
import Stage5 from ".";

it("renders a SyncButton component", () => {
  const shallowComponent = shallow(<Stage5 nextStageURL="" />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("SyncButton");
});
