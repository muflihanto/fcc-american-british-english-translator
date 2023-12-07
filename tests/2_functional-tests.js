const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  const url = "/api/translate";
  const translator = new Translator();
  // Translation with text and locale fields: POST request to /api/translate
  test("Translation with text and locale fields: POST request to /api/translate", (done) => {
    chai
      .request(server)
      .keepOpen()
      .post(url)
      .send({
        text: "Mangoes are my favorite fruit.",
        locale: "american-to-british",
      })
      .end(function (_, res) {
        assert.equal(res.status, 200);
        const result = JSON.parse(res.text);
        assert.strictEqual(result.text, "Mangoes are my favorite fruit.");
        assert.strictEqual(
          result.translation,
          translator.translate("Mangoes are my favorite fruit.", "american-to-british"),
        );
      });

    chai
      .request(server)
      .keepOpen()
      .post(url)
      .send({
        text: "Paracetamol takes up to an hour to work.",
        locale: "british-to-american",
      })
      .end(function (_, res) {
        assert.equal(res.status, 200);
        const result = JSON.parse(res.text);
        assert.strictEqual(result.text, "Paracetamol takes up to an hour to work.");
        assert.strictEqual(
          result.translation,
          translator.translate("Paracetamol takes up to an hour to work.", "british-to-american"),
        );
      });

    done();
  });
  // Translation with text and invalid locale field: POST request to /api/translate
  test("Translation with text and invalid locale field: POST request to /api/translatee", (done) => {
    chai
      .request(server)
      .keepOpen()
      .post(url)
      .send({
        text: "Mangoes are my favorite fruit.",
        locale: "american",
      })
      .end(function (_, res) {
        assert.equal(res.status, 200);
        const result = JSON.parse(res.text);
        assert.deepEqual(result, { error: "Invalid value for locale field" });
        done();
      });
  });
  // Translation with missing text field: POST request to /api/translate
  test("Translation with missing text field: POST request to /api/translate", (done) => {
    chai
      .request(server)
      .keepOpen()
      .post(url)
      .send({
        locale: "american-to-british",
      })
      .end(function (_, res) {
        assert.equal(res.status, 200);
        const result = JSON.parse(res.text);
        assert.deepEqual(result, { error: "Required field(s) missing" });
        done();
      });
  });
  // Translation with missing locale field: POST request to /api/translate
  test("Translation with missing locale field: POST request to /api/translate", (done) => {
    chai
      .request(server)
      .keepOpen()
      .post(url)
      .send({
        text: "Mangoes are my favorite fruit.",
      })
      .end(function (_, res) {
        assert.equal(res.status, 200);
        const result = JSON.parse(res.text);
        assert.deepEqual(result, { error: "Required field(s) missing" });
        done();
      });
  });
  // Translation with empty text: POST request to /api/translate
  test("Translation with missing locale field: POST request to /api/translate", (done) => {
    chai
      .request(server)
      .keepOpen()
      .post(url)
      .send({
        text: "",
        locale: "american-to-british",
      })
      .end(function (_, res) {
        assert.equal(res.status, 200);
        const result = JSON.parse(res.text);
        assert.deepEqual(result, { error: "No text to translate" });
        done();
      });
  });
  // Translation with text that needs no translation: POST request to /api/translate
  test("Translation with text that needs no translation: POST request to /api/translate", (done) => {
    chai
      .request(server)
      .keepOpen()
      .post(url)
      .send({
        text: "Translation with text that needs no translation",
        locale: "american-to-british",
      })
      .end(function (_, res) {
        assert.equal(res.status, 200);
        const result = JSON.parse(res.text);
        const translatorResult = translator.translate(
          "Translation with text that needs no translation",
          "american-to-british",
        );
        assert.strictEqual(result.text, "Translation with text that needs no translation");
        assert.strictEqual("Everything looks good to me!", result.translation);
        assert.strictEqual("Everything looks good to me!", translatorResult);
        assert.strictEqual(result.translation, translatorResult);
        done();
      });
  });
});
