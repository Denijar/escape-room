import getCoordinate from "../coordinate.controller";
import * as CoordinateService from "../../services/coordinate.service";

jest.mock("../../data/maze.data.json", () => [[1, 2, 3]]);

describe("Coordinate controller", () => {
  describe("getCoordinate", () => {
    let getSpy: jest.SpyInstance;

    beforeEach(() => {
      getSpy = jest.spyOn(CoordinateService, "fetchCoordinate");
    });

    afterEach(() => {
      getSpy.mockRestore();
    });

    it("should respond with coordinate data on get", async () => {
      const req: any = { params: { id: 0 } };
      const json = jest.fn();
      const status = jest.fn(() => ({
        json
      }));
      const res: any = {
        status
      };

      getSpy.mockResolvedValue({
        _id: 0,
        x: 1,
        y: 1
      });

      await getCoordinate(req, res);

      expect(status).toHaveBeenCalledTimes(1);
      expect(status).toHaveBeenCalledWith(200);
      expect(json).toHaveBeenCalledTimes(1);
      expect(json).toHaveBeenCalledWith({ body: { x: 1, y: 1 } });
    });
  });
});
