const fetchData = require('./async');

it('Should return correct to do', async() => {
    const todo = await fetchData(1)
    expect(todo.id).toBe(1)
})

it('Should return correct to do', async () => {
    fetchData(1).then(todo => {
        expect(todo.id).toBe(1);
    });
});