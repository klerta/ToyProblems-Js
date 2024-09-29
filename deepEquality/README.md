# Deep Equals - Approach

1. **Check if both `apple` and `orange` are of type `object`.**
   - If not, compare them using strict equality (`===`), and return the result.
   - This handles the case when `apple` or `orange` are primitive types.

2. **Get the keys of both objects: `keysApple` and `keysOrange`.**

3. **Compare the lengths of `keysApple` and `keysOrange`.**
   - If they are not equal, the structures are different, so return `false`.

4. **Iterate through each key in `keysApple`:**
   - Recursively compare the values of `apple[key]` and `orange[key]`.

5. **If any comparison during the iteration returns `false`, immediately return `false`.**
   - This ensures that if any part of the objects is not deeply equivalent, the function returns `false`.

6. **If all comparisons pass, return `true`, indicating that the objects are deeply equivalent.**

7. **The `deepEquals` function efficiently checks if two objects are deeply equivalent.**
