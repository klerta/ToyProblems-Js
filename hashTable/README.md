# Hash Table - Approach

1. **Create an empty object `result` to represent the hash table.**

2. **Initialize an empty array `storage` to store key-value pairs and set a `storageLimit` (e.g., 1000) to limit the number of entries.**

3. **Implement the `.insert(/*...*/)` method:**
   - This method is used to insert a key-value pair into the hash table.
   - Use a hashing function (e.g., `getIndexBelowMaxForKey`) to compute the index at which to store the pair.
   - Check if there is already a bucket at the computed index.
     - If not, create a new bucket (array) and push the key-value pair into it.
     - If yes, iterate through the existing bucket to check if the key already exists.
       - If the key exists, update the corresponding value with the new value.
       - If the key does not exist, push the new key-value pair into the bucket.

4. **Implement the `.retrieve(/*...*/)` method:**
   - This method is used to retrieve the value associated with a given key.
   - Use the same hashing function to compute the index at which to look for the key.
   - Iterate through the bucket at the computed index and check if the key matches the target key.
   - If a match is found, return the corresponding value.
   - If no match is found, return `undefined`.

5. **Implement the `.remove(/*...*/)` method:**
   - This method is used to remove a key-value pair from the hash table.
   - Use the same hashing function to compute the index at which to look for the key.
   - Iterate through the bucket at the computed index and check if the key matches the target key.
   - If a match is found, remove the key-value pair from the bucket.
   - If no match is found, do nothing.

6. **The `makeHashTable` function efficiently creates a hash table with `insert()`, `retrieve()`, and `remove()` methods.**

7. **The hash table handles collisions by using buckets at each index.**

8. **The `getIndexBelowMaxForKey` function is used to convert strings into well-distributed integers to determine index positions.**
