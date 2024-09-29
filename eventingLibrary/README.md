# Eventing System Mix-In - Approach

1. **Create an empty object `events` to store event listeners.**

2. **Implement the `.on(event, callback)` method:**
   - This method adds an event listener for a specified event.
   - It checks if the `events` object already has an entry for the event, and if not, creates an empty array.
   - It then pushes the provided `callback` function into the array for that event.

3. **Implement the `.trigger(event, ...args)` method:**
   - This method triggers an event, calling all registered event listeners.
   - It checks if the `events` object has an entry for the specified event.
   - If it does, it iterates through the array of callbacks for that event and executes each callback, passing any additional arguments provided.

4. **Return the original object (`obj`) after extending it with eventing capabilities.**

5. **The `mixEvents` function now adds event handling methods `.on()` and `.trigger()` to any input object.**
