// const { describe, it } = require('jest-circus');
const sum = require('./sum');

describe('Example ', () => {
	it('should add 1 + 2 to equal 3', () => {
		const result = sum(1, 2);
		expect(result).toBe(3);
	});

	it('Object assignement', () => {
		const obj = {};
		expect(obj).toEqual({});
	});
});

describe('Test true or false', () => {
	it('Is not null', () => {
		const number = 12;
		expect(number).toBeTruthy();
	});

	it('Is null', () => {
		const otherNumber = undefined;
		expect(otherNumber).toBeFalsy();
	});
});
