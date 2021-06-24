import React from "@testing-library/react";
import { shallow } from "enzyme";
import StageTwo from ".";

it("renders a Maze component", () => {
  const shallowComponent = shallow(<StageTwo />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("Maze");
});
