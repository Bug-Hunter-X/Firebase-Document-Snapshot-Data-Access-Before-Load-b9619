# Firebase Document Snapshot Data Access Before Load

This repository demonstrates a common error in Firebase applications where you attempt to access data from a document snapshot before the data has fully loaded.  This can lead to unexpected behavior, crashes, or undefined values.

The `bug.js` file shows the problematic code, and the `bugSolution.js` file provides a corrected version that uses promises to handle asynchronous operations correctly.  This ensures data is available before attempting to access it.

## How to reproduce the bug

1.  Clone this repository.
2.  Set up your Firebase project and configure the necessary credentials.
3.  Run `bug.js`. Observe the error or unexpected behavior.
4.  Run `bugSolution.js`. Note that the code runs successfully without errors.

## Solution

Always handle asynchronous Firebase operations using `.then()` to access data only after it has been loaded successfully.