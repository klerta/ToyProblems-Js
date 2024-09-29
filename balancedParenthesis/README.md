# Balanced Parenthesis - Approach

1. **Initialize an empty stack to track opening parentheses.**

2. **Iterate through each character in the input string:**
   - If the character is an opening parenthesis '(', push it onto the stack.
   - If the character is a closing parenthesis ')', pop the top element from the stack.
   - If popping is not possible or the popped element is not an opening parenthesis, return `false`.

3. **After iterating through the entire string, check if the stack is empty:**
   - If it's empty, all parentheses are balanced, return `true`.
   - If it's not empty, there are unmatched opening parentheses, return `false`.
