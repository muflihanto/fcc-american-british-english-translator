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
        'I ate <span class="highlight">yoghurt</span> for breakfast.',
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
    // Translate No Mr. Bond, I expect you to die. to British English
    test("Translate No Mr. Bond, I expect you to die. to British English", (done) => {
      assert.strictEqual(
        translator.handleAmericanToBritish("No Mr. Bond, I expect you to die."),
        'No <span class="highlight">Mr</span> Bond, I expect you to die.',
      );
      done();
    });
    // Translate Dr. Grosh will see you now. to British English
    test("Translate Dr. Grosh will see you now. to British English", (done) => {
      assert.strictEqual(
        translator.handleAmericanToBritish("Dr. Grosh will see you now."),
        '<span class="highlight">Dr</span> Grosh will see you now.',
      );
      done();
    });
    // Translate Lunch is at 12:15 today. to British English
    test("Translate Lunch is at 12:15 today. to British English", (done) => {
      assert.strictEqual(
        translator.handleAmericanToBritish("Lunch is at 12:15 today."),
        'Lunch is at <span class="highlight">12.15</span> today.',
      );
      done();
    });
  });
  suite("Translate to American English", () => {
    // Translate We watched the footie match for a while. to American English
    test("Translate We watched the footie match for a while. to American English", (done) => {
      assert.strictEqual(
        translator.handleBritishToAmerican("We watched the footie match for a while."),
        'We watched the <span class="highlight">soccer</span> match for a while.',
      );
      done();
    });
    // Translate Paracetamol takes up to an hour to work. to American English
    test("Translate Paracetamol takes up to an hour to work. to American English", (done) => {
      assert.strictEqual(
        translator.handleBritishToAmerican("Paracetamol takes up to an hour to work."),
        '<span class="highlight">Tylenol</span> takes up to an hour to work.',
      );
      done();
    });
    // Translate First, caramelise the onions. to American English
    test("Translate First, caramelise the onions. to American English", (done) => {
      assert.strictEqual(
        translator.handleBritishToAmerican("First, caramelise the onions."),
        'First, <span class="highlight">caramelize</span> the onions.',
      );
      done();
    });
    // Translate I spent the bank holiday at the funfair. to American English
    test("Translate I spent the bank holiday at the funfair. to American English", (done) => {
      assert.strictEqual(
        translator.handleBritishToAmerican("I spent the bank holiday at the funfair."),
        'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.',
      );
      done();
    });
    // Translate I had a bicky then went to the chippy. to American English
    test("Translate I had a bicky then went to the chippy. to American English", (done) => {
      assert.strictEqual(
        translator.handleBritishToAmerican("I had a bicky then went to the chippy."),
        'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.',
      );
      done();
    });
    // Translate I've just got bits and bobs in my bum bag. to American English
    test("Translate I've just got bits and bobs in my bum bag. to American English", (done) => {
      assert.strictEqual(
        translator.handleBritishToAmerican("I've just got bits and bobs in my bum bag."),
        'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.',
      );
      done();
    });
    // Translate The car boot sale at Boxted Airfield was called off. to American English
    test("Translate The car boot sale at Boxted Airfield was called off. to American English", (done) => {
      assert.strictEqual(
        translator.handleBritishToAmerican("The car boot sale at Boxted Airfield was called off."),
        'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.',
      );
      done();
    });
    // Translate Have you met Mrs Kalyani? to American English
    test("Translate Have you met Mrs Kalyani? to American English", (done) => {
      assert.strictEqual(
        translator.handleBritishToAmerican("Have you met Mrs Kalyani?"),
        'Have you met <span class="highlight">Mr.</span>s Kalyani?',
      );
      done();
    });
    // Translate Prof Joyner of King's College, London. to American English
    test("Translate Prof Joyner of King's College, London. to American English", (done) => {
      assert.strictEqual(
        translator.handleBritishToAmerican("Prof Joyner of King's College, London."),
        '<span class="highlight">Prof.</span> Joyner of King\'s College, London.',
      );
      done();
    });
    // Translate Tea time is usually around 4 or 4.30. to American English
    test("Translate Tea time is usually around 4 or 4.30. to American English", (done) => {
      assert.strictEqual(
        translator.handleBritishToAmerican("Tea time is usually around 4 or 4.30."),
        'Tea time is usually around 4 or <span class="highlight">4:30</span>.',
      );
      done();
    });
  });
  suite("Highlight translation", () => {
    // Highlight translation in Mangoes are my favorite fruit.
    test("Highlight translation in Mangoes are my favorite fruit.", (done) => {
      assert.include(
        translator.handleAmericanToBritish("Mangoes are my favorite fruit."),
        '<span class="highlight">favourite</span>',
      );
      done();
    });
    // Highlight translation in I ate yogurt for breakfast.
    test("Highlight translation in I ate yogurt for breakfast.", (done) => {
      assert.include(
        translator.handleAmericanToBritish("I ate yogurt for breakfast."),
        '<span class="highlight">yoghurt</span>',
      );
      done();
    });
    // Highlight translation in We watched the footie match for a while.
    test("Highlight translation in We watched the footie match for a while.", (done) => {
      assert.include(
        translator.handleBritishToAmerican("We watched the footie match for a while."),
        '<span class="highlight">soccer</span>',
      );
      done();
    });
    // Highlight translation in Paracetamol takes up to an hour to work.
    test("Highlight translation in Paracetamol takes up to an hour to work.", (done) => {
      assert.include(
        translator.handleBritishToAmerican("Paracetamol takes up to an hour to work."),
        '<span class="highlight">Tylenol</span>',
      );
      done();
    });
  });
});
