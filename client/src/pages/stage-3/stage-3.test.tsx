import React from "@testing-library/react";
import { shallow } from "enzyme";
import Stage3 from ".";

it("renders DoorKey", () => {
  const shallowComponent = shallow(<Stage3 nextStageURL="" />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("DoorKey");
});
