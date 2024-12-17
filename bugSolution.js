```javascript
// Correct usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { count: 1 } }).then(result => {
  if (result.modifiedCount === 1) {
    console.log('Document updated successfully');
  } else {
    console.error('Failed to update document. Check if the document exists and the field is numeric.');
  }
}).catch(error => {
  console.error('An error occurred:', error);
});
```