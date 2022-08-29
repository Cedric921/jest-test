const animals = ['zebra', 'elephant', 'bear', 'tiger'];



describe('Animals array', () => {
    it('Should have initial lenght of 4', () => {
        expect(animals.length).toBe(4);
    });

	it('should add animals to end of array', () => {
		animals.push('aligator');
		expect(animals[animals.length - 1]).toBe('aligator');
	});

});
