const {invertCapitalisation,invertString}=require('./invertCapitalisation');

test('convert lowercase characters to uppercase and vice-versa',()=>{
  expect(
    invertCapitalisation('MeRRy hAD a LITTle lAMp')
  ).toBe('mErrY Had A littLE LamP');
}); 

test('convert lowercase characters to uppercase and vice-versa',()=>{
  expect(
    invertString('MeRRy hAD a LITTle lAMp')
  ).toBe('mErrY Had A littLE LamP');
}); 