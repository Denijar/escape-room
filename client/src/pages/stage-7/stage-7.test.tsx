import React from "@testing-library/react";
import { shallow } from "enzyme";
import Stage7 from ".";

it("renders an Input component", () => {
  const shallowComponent = shallow(<Stage7 nextStageURL="" />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("Input");
});
