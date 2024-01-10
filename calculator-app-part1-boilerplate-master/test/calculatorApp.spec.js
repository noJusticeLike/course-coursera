const chai = require('chai');
const expect = chai.expect;
const { addition, subtraction } = require('../src/calculatorApp');

describe('Addition Functionality', () => {
  
  it('Check for addition of two positive numbers and return the sum as positive number', () => {
    // Write Test Case Here
    expect(addition(4,5)).to.be.equal(9);
  });

  it('Check for addition of two negative numbers and return the sum as negative number.', () => {
    // Write Test Case Here
    expect(addition(-1,-3)).to.be.equal(-4);
  });

  it('Check if either of number is negative produce subtracted output.', () => {
    // Write Test Case Here
    expect(addition(3,-1)).to.be.equal(2);
  });


});

describe('Subtraction Functionality', () => {
  it('Check for subtracting two positive number and return positive subtraction', () => {
    // Write Test Case Here
    expect(subtraction(8,7)).to.be.equal(1);
  });
  it('Check if either of number is negative produce sum as output', () => {
    // Write Test Case Here
    expect(subtraction(4,-5)).to.be.equal(9);
  });
  it('Subtracting zero will produce zero as subtraction.', () => {
    // Write Test Case Here
    expect(subtraction(7,0)).to.be.equal(7);
  });
});
