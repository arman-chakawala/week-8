const mongoose = require('mongoose');

// MongoDB URI
const MONGO_URI = 'mongodb://localhost:27017/Week8';

// Connect to MongoDB
mongoose.connect(MONGO_URI);
const db = mongoose.connection;

// Handling connection errors
db.on('error', function (err) {
  console.log("Error occurred during connection: " + err);
});

// Once connected, log the success message
db.once('connected', function () {
  console.log(`Connected to ${MONGO_URI}`);
});

// Define the schema for the person
const PersonScheme = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  Gender: String,
  Salary: Number
});

// Create a model for the collection 'personCollection'
const person_doc = mongoose.model('modelname', PersonScheme, 'personCollection');

// Create a single document (person)
const doc1 = new person_doc({ name: 'Jacky', age: 362, Gender: "Male", Salary: 3456 });


// Uncomment to save the document
// doc1.save()
//   .then((doc1) => {
//     console.log("New Article Has been Added Into Your DataBase.", doc1);
//   })
//   .catch((err) => {
//     console.error(err);
//   });


// Uncomment for multiple people
// const manypersons = [
//   { name: 'Simon', age: 42, Gender: "Male", Salary: 3456 },
//   { name: 'Neesha', age: 23, Gender: "Female", Salary: 1000 },
//   { name: 'Mary', age: 27, Gender: "Female", Salary: 5402 },
//   { name: 'Mike', age: 40, Gender: "Male", Salary: 4519 }
// ];


// person_doc.insertMany(manypersons)
//   .then(function () {
//     console.log("Data inserted"); 
//   })
//   .catch(function (error) {
//     console.log(error); 
//   });


// Uncomment to run the code.....
// Querying and finding all documents in the collection
// person_doc.find({})
//  .sort({ Salary: 1 })  // Sort by salary in ascending order
//  .select("name Salary age")  // Select specific fields
//  .limit(10)  // Limit to 10 items
//  .exec()  // Execute the query
//  .then(docs => {
//    console.log("Showing multiple documents");
//    docs.forEach(function (doc) {
//      console.log(doc.age, doc.name);  
//    });
//  })
//  .catch(err => {
//    console.error(err);
//  });


//task4
//find command with filtering criteria. Run the find command s for which gender=Female and age is greater than some given number
//var givenage = 30;

//person_doc.find({ Gender: "Female", age: { $gte: givenage } })
// find all users
//  .sort({ Salary: 1 })           // sort ascending by Salary
//  .select('name Salary age')     // Name and salary only
//  .limit(10)                     // limit to 10 items
//  .exec()                        // execute the query
//  .then(docs => {
      // handle the results
//  });


//task5
  // Counting all the documents
person_doc.countDocuments().exec()
.then(count => {
  console.log("Total documents Count :", count);
})
.catch(err => {
  console.error(err);
});


//task -6
//here we are deleting the doc
//person_doc.deleteMany({ age: { $gte: 25 } })
//  .exec()
//  .then(docs => {
//    console.log('deleted documents are:', docs);
//  })
//  .catch(function (error) {
//    console.log(error);
//  });


// task 7
  person_doc.updateMany({ Gender: "Female" }, { $set: { Salary: 5555 } })
  .then(docs => {
    console.log("update successful");
    console.log(docs); // Success
  })
  .catch(function (error) {
    console.error(error); // Failure
  });
