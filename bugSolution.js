The corrected code uses async/await or promises to ensure the data is loaded before accessing it:

```javascript
async function getData(docRef) {
  try {
    const snapshot = await docRef.get();
    if (snapshot.exists()) {
      const data = snapshot.data();
      console.log(data.name); // Access data after it's loaded
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
}
```

Or with promises:

```javascript
docRef.get().then(snapshot => {
  if (snapshot.exists()) {
    const data = snapshot.data();
    console.log(data.name);
  } else {
    console.log('No such document!');
  }
}).catch(error => {
  console.error('Error getting document:', error);
});
```