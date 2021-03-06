import React from "@testing-library/react";
import { shallow } from "enzyme";
import App from ".";

it("renders the login page", () => {
  const shallowComponent = shallow(<App />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("LoginPage");
});

it("renders the Stage1 page", () => {
  const shallowComponent = shallow(<App />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("Stage1");
});

it("renders the Stage2 page", () => {
  const shallowComponent = shallow(<App />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("Stage2");
});

it("renders the Stage3 page", () => {
  const shallowComponent = shallow(<App />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("Stage3");
});

it("renders the Stage4 page", () => {
  const shallowComponent = shallow(<App />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("Stage4");
});
