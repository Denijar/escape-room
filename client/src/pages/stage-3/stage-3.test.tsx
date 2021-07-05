import React from "@testing-library/react";
import { shallow } from "enzyme";
import Stage3 from ".";

it("renders an Input component", () => {
  const shallowComponent = shallow(<Stage3 />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("Input");
});
