import React from "@testing-library/react";
import { shallow } from "enzyme";
import Stage8 from ".";

it("renders DoorKey", () => {
  const shallowComponent = shallow(<Stage8 nextStageURL="" />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("DoorKey");
});
