import hello from "../hello.controller";

describe("Game controller", () => {
  describe("hello", () => {
    it("should respond with hello message on get", () => {
      const req: any = {};
      const json = jest.fn();
      const status = jest.fn(() => {
        return {
          json
        };
      });
      const res: any = {
        status
      };

      hello(req, res);

      expect(status).toHaveBeenCalledTimes(1);
      expect(status).toHaveBeenCalledWith(200);
      expect(json).toHaveBeenCalledTimes(1);
      expect(json).toHaveBeenCalledWith({ body: "Hello from the typescript server!" });
    });
  });
});
