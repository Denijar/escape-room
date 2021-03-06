import React from "@testing-library/react";
import { shallow } from "enzyme";
import Stage2 from ".";

jest.mock("react", () => {
  const ActualReact = jest.requireActual("react");
  return {
    ...ActualReact,
    useContext: () => ({ username: "username", setUsername: jest.fn() })
  };
});

it("renders a Maze component", () => {
  const shallowComponent = shallow(<Stage2 nextStageURL="" />);
  expect(shallowComponent).toContainExactlyOneMatchingElement("Maze");
});
