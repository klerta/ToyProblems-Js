# Telephone Words

## Problem Statement

Given a string representing a sequence of digits mapped to letters on a telephone keypad, return all possible letter combinations that the number could represent. Use the following digit-to-letter mapping (as it appears on a standard telephone keypad):

```plaintext
 0: '0'
 1: '1'
 2: 'ABC'
 3: 'DEF'
 4: 'GHI'
 5: 'JKL'
 6: 'MNO'
 7: 'PQRS'
 8: 'TUV'
 9: 'WXYZ'
Write a function telephoneWords that takes a digitString as its parameter (a string containing 0-9) and returns an array of all possible word combinations.

Input:
A string digitString (1 ≤ digitString.length ≤ 4) consisting of digits from 0-9
Output:
An array of strings representing all possible letter combinations that can be obtained from the input digit string.