import getMaze from "../maze.controller";

jest.mock("../../data/maze.json", () => [1, 2, 3]);

describe("Maze controller", () => {
  describe("getMaze", () => {
    it("should respond with maze data on get", () => {
      const req: any = {};
      const json = jest.fn();
      const status = jest.fn(() => ({
        json
      }));
      const res: any = {
        status
      };

      getMaze(req, res);

      expect(status).toHaveBeenCalledTimes(1);
      expect(status).toHaveBeenCalledWith(200);
      expect(json).toHaveBeenCalledTimes(1);
      expect(json).toHaveBeenCalledWith({ body: [1, 2, 3] });
    });
  });
});
