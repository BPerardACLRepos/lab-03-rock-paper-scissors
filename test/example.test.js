import { didUserWin, getRandomThrow } from '../utils.js';

const test = QUnit.test;

//getRandomThrow() tests
test('function has no parameters & always returns a number', (expect) => {
    const expected = 'number'
    const actual = typeof getRandomThrow();

    expect.equal(actual, expected);
});

//didUserWin() tests
test('function takes in (2,1) & returns a string used for endgame message', (expect) => {
    const expected = `You're a machine... but the good kind!`;
    const actual = didUserWin(2, 1);

    expect.equal(actual, expected);
});

test('function takes in (2,0) & returns a string used for endgame message', (expect) => {
    const expected = `The machines have won.`;
    const actual = didUserWin(2, 0);

    expect.equal(actual, expected);
});

test('function takes in (2,2) & returns a string used for endgame message', (expect) => {
    const expected = `Back to the drawing board...`;
    const actual = didUserWin(2, 2);

    expect.equal(actual, expected);
});

test('function takes in (1,2) & returns a string used for endgame message', (expect) => {
    const expected = `The machines have won.`;
    const actual = didUserWin(1, 2);

    expect.equal(actual, expected);
});

test('function takes in (1,1) & returns a string used for endgame message', (expect) => {
    const expected = `Back to the drawing board...`;
    const actual = didUserWin(1, 1);

    expect.equal(actual, expected);
});

test('function takes in (1,0) & returns a string used for endgame message', (expect) => {
    const expected = `You're a machine... but the good kind!`;
    const actual = didUserWin(1, 0);

    expect.equal(actual, expected);
});

test('function takes in (0,2) & returns a string used for endgame message', (expect) => {
    const expected = `You're a machine... but the good kind!`;
    const actual = didUserWin(0, 2);

    expect.equal(actual, expected);
});

test('function takes in (0,1) & returns a string used for endgame message', (expect) => {
    const expected = `The machines have won.`;
    const actual = didUserWin(0, 1);

    expect.equal(actual, expected);
});

test('function takes in (0,0) & returns a string used for endgame message', (expect) => {
    const expected = `Back to the drawing board...`;
    const actual = didUserWin(0, 0);

    expect.equal(actual, expected);
});