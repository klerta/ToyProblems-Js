# Generating Anagrams of a String

This README file explains the approach to generate all possible anagrams of a given string using a recursive algorithm. An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once.

## Approach

1. **Initialize an empty array to store the anagrams.**
   
2. **Create a recursive function that generates anagrams by swapping characters.**

3. **In each recursive call, iterate through the string characters starting from the current index.**

4. **Swap the current character with the character at the current index.**

5. **Recursively call the function with the updated string and the index increased by 1.**

6. **When the index reaches the end of the string (i.e., it equals the string's length minus 1), push the generated anagram into the result array.**

7. **Return the result array containing all the anagrams.**