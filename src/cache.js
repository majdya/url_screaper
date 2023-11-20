
/*
*   A function that can cache of another function execution, and use it afterwards     
*   to enhance performance
*/

const cached = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log('Result from cache');
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
};

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const expensiveOperation = async (value) => {
  console.log('Performing expensive operation...');
  const result = value * value;

  await delay(2000);//mimicking slow api fetch or heavy calculation 
  return result;

};
const cacheExpensiveOperation = cached(expensiveOperation);

const run = async () => {
  console.log(await cacheExpensiveOperation(500));
  console.log(await cacheExpensiveOperation(500));
  console.log(await cacheExpensiveOperation(10));
  console.log(await cacheExpensiveOperation(10));
  console.log(await cacheExpensiveOperation(500));
};

run();
