const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  #britishDict = Object.assign(
    {},
    britishOnly,
    ...[americanOnly, americanToBritishSpelling, americanToBritishTitles].map((el) =>
      this.#swapKeysAndValues(el),
    ),
  );

  #americanDict = Object.assign(
    {},
    americanOnly,
    americanToBritishSpelling,
    americanToBritishTitles,
    this.#swapKeysAndValues(britishOnly),
  );

  #swapKeysAndValues(obj) {
    const swapped = Object.entries(obj).map(([key, value]) => [value, key]);

    return Object.fromEntries(swapped);
  }

  translate(text, locale) {
    let result;
    if (locale === "american-to-british") {
      result = this.handleAmericanToBritish(text);
    } else if (locale === "british-to-american") {
      result = this.handleBritishToAmerican(text);
    }
    return text === result ? "Everything looks good to me!" : result;
  }

  handleBritishToAmerican(text) {
    const parsedText = text.split(/([\s\W])/);
    const translated = parsedText.map((txt) => {
      if (this.#britishDict.hasOwnProperty(txt))
        return `<span class="highlight">${this.#britishDict[txt]}</span>`;
      return txt;
    });
    return translated.join("");
  }

  handleAmericanToBritish(text) {
    const parsedText = text.split(/([\s\W])/);
    console.log({ parsedText });
    const translated = parsedText.map((txt) => {
      if (this.#americanDict.hasOwnProperty(txt))
        return `<span class="highlight">${this.#americanDict[txt]}</span>`;
      return txt;
    });
    return translated.join("");
  }
}

module.exports = Translator;
