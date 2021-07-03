import React from "@testing-library/react";
import { shallow } from "enzyme";
import Stage3 from ".";

it("renders a Maze component", () => {
  const shallowComponent = shallow(<Stage3 />);
  expect(shallowComponent).toIncludeText("Stage 3");
});
