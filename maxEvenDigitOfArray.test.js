const {maxEven,maximumEven} = require('./q1');

test('properly find max even number from array', ()=>{
  let array = [1, 2, 3, 4, 5];
  expect(maxEven(array)).toBe(4);
});

test('properly find max even number from array', ()=>{
  let array = [1, 2, 3, 4, 5];
  expect(maximumEven(array)).toBe(4);
});
