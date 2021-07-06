import React from "@testing-library/react";
import { shallow } from "enzyme";
import Stage4 from ".";

it("renders DoorKey", () => {
  const shallowComponent = shallow(<Stage4 />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("DoorKey");
});
