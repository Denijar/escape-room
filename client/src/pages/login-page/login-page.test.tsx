import React from "@testing-library/react";
import { shallow } from "enzyme";
import LoginPage from ".";

it("renders a Login component", () => {
  const shallowComponent = shallow(<LoginPage />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("Login");
});
