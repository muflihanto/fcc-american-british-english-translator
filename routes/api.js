"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();
  const locales = ["american-to-british", "british-to-american"];

  app.route("/api/translate").post((req, res) => {
    const { text, locale } = req.body;
    if (text === undefined || locale === undefined)
      return res.json({ error: "Required field(s) missing" });
    if (text === "") return res.json({ error: "No text to translate" });
    if (!locales.includes(locale)) return res.send({ error: "Invalid value for locale field" });
    const translation = translator.translate(text, locale);
    res.json({ text, translation });
  });
};
