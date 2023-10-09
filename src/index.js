const getOdds = (numbers) => numbers.filter((num) => num % 2 === 1);
const getEvens = (numbers) => numbers.filter((num) => num % 2 === 0);
const split = (numbers) => numbers.filter((num) => num % 2 === 0);

export { getOdds, getEvens, split };
