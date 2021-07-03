import React from "@testing-library/react";
import { shallow } from "enzyme";
import Stage2 from ".";

it("renders a Maze component", () => {
  const shallowComponent = shallow(<Stage2 />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("Maze");
});
