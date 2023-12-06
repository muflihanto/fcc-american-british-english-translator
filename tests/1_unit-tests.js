const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");

suite("Unit Tests", () => {
  const translator = new Translator();

  suite("Translate to British English", () => {
    // Translate Mangoes are my favorite fruit. to British English
    test("Translate Mangoes are my favorite fruit. to British English", (done) => {
      assert.strictEqual(
        translator.handleAmericanToBritish("Mangoes are my favorite fruit."),
        'Mangoes are my <span class="highlight">favourite</span> fruit.',
      );
      done();
    });
    // Translate I ate yogurt for breakfast. to British English
    test("Translate I ate yogurt for breakfast. to British English", (done) => {
      assert.strictEqual(
        translator.handleAmericanToBritish("I ate yogurt for breakfast."),
        'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekky</span>.',
      );
      done();
    });
    // Translate We had a party at my friend's condo. to British English
    test("Translate We had a party at my friend's condo. to British English", (done) => {
      assert.strictEqual(
        translator.handleAmericanToBritish("We had a party at my friend's condo."),
        'We had a party at my friend\'s <span class="highlight">flat</span>.',
      );
      done();
    });
    // Translate Can you toss this in the trashcan for me? to British English
    test("Translate Can you toss this in the trashcan for me? to British English", (done) => {
      assert.strictEqual(
        translator.handleAmericanToBritish("Can you toss this in the trashcan for me?"),
        'Can you toss this in the <span class="highlight">bin</span> for me?',
      );
      done();
    });
    // Translate The parking lot was full. to British English
    test("Translate The parking lot was full. to British English", (done) => {
      assert.strictEqual(
        translator.handleAmericanToBritish("The parking lot was full."),
        'The <span class="highlight">car park</span> was full.',
      );
      done();
    });
    // Translate Like a high tech Rube Goldberg machine. to British English
    test("Translate Like a high tech Rube Goldberg machine. to British English", (done) => {
      assert.strictEqual(
        translator.handleAmericanToBritish("Like a high tech Rube Goldberg machine."),
        'Like a high tech <span class="highlight">Heath Robinson device</span>.',
      );
      done();
    });
    // Translate To play hooky means to skip class or work. to British English
    test("Translate To play hooky means to skip class or work. to British English", (done) => {
      assert.strictEqual(
        translator.handleAmericanToBritish("To play hooky means to skip class or work."),
        'To <span class="highlight">bunk off</span> means to skip class or work.',
      );
      done();
    });
    // TODO: Translate No Mr. Bond, I expect you to die. to British English
    // TODO: Translate Dr. Grosh will see you now. to British English
    // TODO: Translate Lunch is at 12:15 today. to British English
  });
  suite("Translate to American English", () => {
    // TODO: Translate We watched the footie match for a while. to American English
    // TODO: Translate Paracetamol takes up to an hour to work. to American English
    // TODO: Translate First, caramelise the onions. to American English
    // TODO: Translate I spent the bank holiday at the funfair. to American English
    // TODO: Translate I had a bicky then went to the chippy. to American English
    // TODO: Translate I've just got bits and bobs in my bum bag. to American English
    // TODO: Translate The car boot sale at Boxted Airfield was called off. to American English
    // TODO: Translate Have you met Mrs Kalyani? to American English
    // TODO: Translate Prof Joyner of King's College, London. to American English
    // TODO: Translate Tea time is usually around 4 or 4.30. to American English
  });
  suite("Highlight translation", () => {
    // TODO: Highlight translation in Mangoes are my favorite fruit.
    // TODO: Highlight translation in I ate yogurt for breakfast.
    // TODO: Highlight translation in We watched the footie match for a while.
    // TODO: Highlight translation in Paracetamol takes up to an hour to work.
  });
});
