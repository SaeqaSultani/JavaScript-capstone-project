
describe('Counter api', () => {
  test('count the  number of item', async () => {
    const count = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s`,
    );

    const data = await count.json();

    const size = data.meals.length;
    expect(size).toBe(25);
  });
});