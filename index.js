/**
 * DESCRIPTION:
 *  The goal is to implement a calculator that parses the following syntax:
 *    'one.plus.one' should return 2
 *    'two.minus.one' should return 1
 *    'three.times.two' should return 6
 *    'three.divided_by.two' should return 1.5
 * 
 * RULES:
 *    Only four operations are supported: plus, minus, times, divided_by
 *    Only 10 digits are allowed: zero, one, two, three, four, five, six, seven, eight, nine
 *    For divisions:
 *      - Should not allow to divide by zero (outputs 'Error').
 *      - Round to one decimal.
 */
import Calculator from './src/calculator.js'

const calc = new Calculator();

calc.parse('one.plus.one')
