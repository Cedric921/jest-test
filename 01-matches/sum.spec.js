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

describe('Numbers test', () => {
	it('2 + 2', () => {
		const value = 2 + 2;
		expect(value).toBe(4);
		expect(value).toBeGreaterThan(3);
		expect(value).toBeGreaterThanOrEqual(4);
	});
});

describe('String test', () => {
	it('Check if I is in sring', () => {
		expect('teIam').toMatch(/I/);
	});
});


describe("Array tes", () => {
    const shoppingList = ['cedric', 'arick','valentin', 'gloire']
    expect(shoppingList).toContain('arick')
})