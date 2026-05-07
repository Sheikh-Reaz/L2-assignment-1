//Problem-1

const filterEvenNumbers = (items: number[]): number[] => {
  return items.filter((num) => num % 2 === 0);
};

const array = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(array));