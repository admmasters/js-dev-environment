// import jsDom from "jsdom";
// import fs from "fs";

describe("Our first test", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
});

/* TODO: Move to JEST
describe("index.html", () => {
  it("should say h1 that says Users", done => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    jsDom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName("label")[0];
      expect(h1.innerHTML).to.equal("Hello World");
      done();
      window.close();
    });
  });
});
*/