const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

// TODO: add title handler

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

  #highlightTime(text, searchValue, replaceValue) {
    const timeRegex = new RegExp(
      "(([01]?[0-9]||[2][0-4])" + `${searchValue === "." ? "\\." : searchValue}` + "\\d\\d)",
    );
    const matchTime = text.match(timeRegex);
    if (
      matchTime !== null &&
      matchTime[0] !== undefined &&
      (matchTime[0].length === 4 || matchTime[0].length === 5)
    ) {
      const time = matchTime[0];
      const timeIndex = text.indexOf(time);
      return (
        text.slice(0, timeIndex) +
        `<span class="highlight">${time.replace(searchValue, replaceValue)}</span>` +
        text.slice(time.length + timeIndex)
      );
    }
    return text;
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
    let translated = parsedText
      .map((txt) => {
        if (this.#britishDict.hasOwnProperty(txt))
          return `<span class="highlight">${this.#britishDict[txt]}</span>`;
        return txt;
      })
      .join("");
    translated = this.#highlightTime(translated, ".", ":");
    return translated;
  }

  handleAmericanToBritish(text) {
    const parsedText = text.split(/([\s\W])/);
    let translated = parsedText
      .map((txt) => {
        if (this.#americanDict.hasOwnProperty(txt))
          return `<span class="highlight">${this.#americanDict[txt]}</span>`;
        return txt;
      })
      .join("");
    translated = this.#highlightTime(translated, ":", ".");
    return translated;
  }
}

module.exports = Translator;
