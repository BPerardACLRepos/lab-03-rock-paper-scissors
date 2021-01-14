import { didUserWin } from './utils.js';

const test = QUnit.test;

test('function takes in (2,1) & ', (expect) => {
    const expected = 'win';
    const actual = didUserWin(2, 1);

    expect.equal(actual, expected);
});

test('function takes in (2,0) & ', (expect) => {
    const expected = 'loss';
    const actual = didUserWin(2, 0);

    expect.equal(actual, expected);
});

test('function takes in (2,2) & ', (expect) => {
    const expected = 'draw';
    const actual = didUserWin(2, 2);

    expect.equal(actual, expected);
});

test('function takes in (1,2) & ', (expect) => {
    const expected = 'loss';
    const actual = didUserWin(1, 2);

    expect.equal(actual, expected);
});

test('function takes in (1,1) & ', (expect) => {
    const expected = 'draw';
    const actual = didUserWin(1, 1);

    expect.equal(actual, expected);
});

test('function takes in (1,0) & ', (expect) => {
    const expected = 'win';
    const actual = didUserWin(1, 0);

    expect.equal(actual, expected);
});

test('function takes in (0,2) & ', (expect) => {
    const expected = 'win';
    const actual = didUserWin(0, 2);

    expect.equal(actual, expected);
});

test('function takes in (0,1) & ', (expect) => {
    const expected = 'loss';
    const actual = didUserWin(0, 1);

    expect.equal(actual, expected);
});

test('function takes in (0,0) & ', (expect) => {
    const expected = 'draw';
    const actual = didUserWin(0, 0);

    expect.equal(actual, expected);
});