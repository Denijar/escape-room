import React from "@testing-library/react";
import { shallow } from "enzyme";
import Stage6 from ".";

jest.mock("react", () => {
  const ActualReact = jest.requireActual("react");
  return {
    ...ActualReact,
    useContext: () => ({ username: "username", setUsername: jest.fn() })
  };
});

it("renders a Maze components", () => {
  const shallowComponent = shallow(<Stage6 nextStageURL="" />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("Maze");
});
