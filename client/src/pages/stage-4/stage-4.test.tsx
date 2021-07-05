import React from "@testing-library/react";
import { shallow } from "enzyme";
import Stage4 from ".";

it("renders Stage 4 text", () => {
  const shallowComponent = shallow(<Stage4 />);
  expect(shallowComponent).toHaveText("Stage 4");
});
