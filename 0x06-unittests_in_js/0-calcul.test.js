const assert = require('assert')
const calculateNumber = require('./0-calcul')

describe("calculateNumber", () => {
    it("calculates floating point whole numbers", () => {
        assert.strictEqual(calculateNumber(1.0, 3.0), 4)
    })

    it("rounds down floating point numbers", () => {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5)
    })

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
        assert.strictEqual(calculateNumber(9.499999, 10.499999), 19);
    });

    it('rounds floating point numbers', () => {
        assert.strictEqual(calculateNumber(2.5, 3.5), 7);
    });

    it("correctly handles negative numbers", () => {
        assert.strictEqual(calculateNumber(-1.0, -3.0), -4)
    })
});
