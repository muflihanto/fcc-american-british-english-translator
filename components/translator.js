const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

// FIXME: handle phrase translate

class Translator {
  #britishDict = Object.assign(
    {},
    britishOnly,
    ...[americanOnly, americanToBritishSpelling].map((el) => this.#swapKeysAndValues(el)),
  );

  #americanDict = Object.assign(
    {},
    americanOnly,
    americanToBritishSpelling,
    this.#swapKeysAndValues(britishOnly),
  );

  #swapKeysAndValues(obj) {
    const swapped = Object.entries(obj).map(([key, value]) => [value, key]);

    return Object.fromEntries(swapped);
  }

  #highlight(text) {
    return `<span class="highlight">${text}</span>`;
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
        this.#highlight(time.replace(searchValue, replaceValue)) +
        text.slice(time.length + timeIndex)
      );
    }
    return text;
  }

  #handleTitle(text, into) {
    let result = text;
    let titleDict;
    if (into === "british") {
      titleDict = americanToBritishTitles;
    } else {
      titleDict = this.#swapKeysAndValues(americanToBritishTitles);
    }
    for (const title in titleDict) {
      const re = new RegExp(title, "gi");
      if (text.match(re)) {
        const newTitle = titleDict[title];
        result = result.replace(re, this.#highlight(newTitle[0].toUpperCase() + newTitle.slice(1)));
      }
    }
    return result;
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
        if (this.#britishDict.hasOwnProperty(txt)) return this.#highlight(this.#britishDict[txt]);
        return txt;
      })
      .join("");
    translated = this.#highlightTime(translated, ".", ":");
    translated = this.#handleTitle(translated, "american");
    return translated;
  }

  handleAmericanToBritish(text) {
    const parsedText = text.split(/([\s\W])/);
    let translated = parsedText
      .map((txt) => {
        if (this.#americanDict.hasOwnProperty(txt)) return this.#highlight(this.#americanDict[txt]);
        return txt;
      })
      .join("");
    translated = this.#highlightTime(translated, ":", ".");
    translated = this.#handleTitle(translated, "british");
    return translated;
  }
}

module.exports = Translator;
