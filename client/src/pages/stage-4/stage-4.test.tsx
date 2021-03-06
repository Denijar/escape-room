import React from "@testing-library/react";
import { shallow } from "enzyme";
import Stage4 from ".";

it("renders an Input component", () => {
  const shallowComponent = shallow(<Stage4 nextStageURL="" />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("Input");
});
