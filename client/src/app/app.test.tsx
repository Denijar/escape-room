import React from "@testing-library/react";
import { shallow } from "enzyme";
import App from ".";

it("renders the StageOne page", () => {
  const shallowComponent = shallow(<App />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("StageOne");
});

it("renders the StageTwo page", () => {
  const shallowComponent = shallow(<App />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("StageTwo");
});
