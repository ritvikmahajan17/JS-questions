const {isSameDigits,checkSameDigits} = require('./q2');

test('check if all digits in number are same',()=>{
  expect(
    isSameDigits(44444444)
  ).toBe('True');
}); 



test('check if all digits in number are same',()=>{
  expect(
    checkSameDigits(434545)
  ).toBe('False');
}); 