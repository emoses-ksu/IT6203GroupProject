const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
//specify where to find the schema
const Blog = require('./models/blog')
// connect and display the status 
mongoose.connect('mongodb+srv://gmccart1:Group5George@cluster0-5rar2.mongodb.net/BlogsDb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log("connected"); })
  .catch(() => { console.log("error connecting"); });
// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
  console.log('This line is always called');
  res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});
app.get('/blogs', (req, res, next) => {
  //call mongoose method find (MongoDB db.Blogs.find())
  Blog.find()
    //if data is returned, send data as a response 
    .then(data => res.status(200).json(data))
    //if error, send internal server error
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
});

app.get('/blogs/:id', (req, res, next) => {
  //call mongoose method find (MongoDB db.Students.find())
  Blog.findById({ _id: req.params.id})
     //if data is returned, send data as a response 
     .then(data => res.status(200).json(data))
     //if error, send internal server error
     .catch(err => {
        console.log('Error: ${err}');
        res.status(500).json(err);
     });
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// serve incoming post requests to /blogpost
app.post('/blogs', (req, res, next) => {
  // create a new blog variable and save request’s fields 
  const blog = new Blog({
    blogDate: req.body.blogDate,
    blogAuthor: req.body.blogAuthor,
    blogTopic: req.body.blogTopic,
    blogContent: req.body.blogContent
  });
  //send the document to the database 
  blog.save()
    //in case of success
    .then(() => { console.log('Success'); })
    //if error
    .catch(err => { console.log('Error:' + err); });
});
//:id is a dynamic parameter that will be extracted from the URL
app.delete('/blogs/:id', (req, res, next) => {
  Blog.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});
// serve incoming put requests to /blogs
app.put('/blogs/:id', (req, res, next) => {
  console.log("id: " + req.params.id)
  // check that the parameter id is valid 
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    //find a document and set new first and last names
    Blog.findOneAndUpdate({ _id: req.params.id },
      {
        $set: {
          blogDate: req.body.blogDate,
          blogAuthor: req.body.blogAuthor, blogTopic: req.body.blogTopic, blogContent: req.body.blogContent
        }
      }, { new: true })
      .then((blog) => {
        if (blog) { //what was updated
          console.log(blog);
        } else {
          console.log("no data exist for this id");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("please provide correct id");
  }
  });
   //specify where to find the schema
  const Resource = require('./models/resource')
  
  // connect and display the status 
  mongoose.connect('mongodb+srv://gmccart1:Group5George@cluster0-5rar2.mongodb.net/ResourcesDb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log("connected"); })
    .catch(() => { console.log("error connecting"); });
  
  // use the following code on any request that matches the specified mount path
  app.use((req, res, next) => {
     console.log('This line is always called');
     res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); //allowable methods
     res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
     next();
  });
  
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
   
  // parse application/json
  app.use(bodyParser.json())
  
  app.get('/resources', (req, res, next) => {
  //call mongoose method find (MongoDB db.Resources.find())
  Resource.find() 
  //if data is returned, send data as a response 
  .then(data => res.status(200).json(data))
  //if error, send internal server error
  .catch(err => {
  console.log('Error: ${err}');
  res.status(500).json(err);
     });
  });
  
  // serve incoming post requests to /resources
  app.post('/resources', (req, res, next) => {
    const resource = new Resource({
      rtype: req.body.rtype,
      rtitle: req.body.rtitle,
      rnote: req.body.rnote
    });
    //send the document to the database 
    resource.save()
      //in case of success
      .then(() => { console.log('Success');})
      //if error
      .catch(err => {console.log('Error:' + err);});
  
    console.log(resource.rtype + " " + resource.rtitle + " " + resource.rnote);
    //sent an acknowledgment back to caller 
    res.status(201).json('Post successful');
  });
  //:id is a dynamic parameter that will be extracted from the URL
  app.delete("/resources/:id", (req, res, next) => {
    Resource.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json("Deleted!");
    });
  });
  
  app.put('/resources/:id', (req, res, next) => {
    console.log("id: " + req.params.id)
    // check that the parameter id is valid 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      //find a document and set new first and last names
      Resource.findOneAndUpdate({_id: req.params.id},
        {$set:{rtype : req.body.rtype,
          rtitle : req.body.rtitle,
            rnote : req.body.rnote}},{new:true}) 
       .then((resource) => {
          if (resource) { //what was updated
            console.log(resource);
          } else {
            console.log("no data exist for this id");
          }
       })
      .catch((err) => {
        console.log(err);
       });
   } else {
     console.log("please provide correct id");
   }
  });  




//specify where to find the schema
const ViewAppointment = require('./models/viewappointmentDetails')
const Questionnarie  = require('./models/questionnarie')
// connect and display the status 
mongoose.connect('mongodb+srv://gmccart1:Group5George@cluster0-5rar2.mongodb.net/ResourcesDb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => { console.log("connected"); })
  .catch(() => { console.log("error connecting"); });

// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
   console.log('This line is always called!');
   res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS,DELETE'); //allowable methods
   res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
   next();
});
app.get('/viewappointment', (req, res, next) => {
   //call mongoose method find (MongoDB db.Students.find())
   ViewAppointment.find()
      //if data is returned, send data as a response 
      .then(data => res.status(200).json(data))
      //if error, send internal server error
      .catch(err => {
         console.log('Error: ${err}');
         res.status(500).json(err);
      });
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }
))
// parse application/json
app.use(bodyParser.json())
// serve incoming post requests to /viewappointments
app.post('/viewappointment', (req, res, next) => {
   // create a new student variable and save request’s fields 
   const newAppointmentDetails = new ViewAppointment({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone,
      emailid: req.body.emailid,
      ksuid: req.body.ksuid,
      date: req.body.date,
      time: req.body.time,
      gender: req.body.gender,
      counselingMode: req.body.counselingMode,
      campus : req.body.campus,
      appointmentType: req.body.appointmentType,
      requestedService: req.body.requestedService,
      counselor: req.body.counselor,
      additionalInformation: req.body.additionalInformation
   });
   //send the document to the database 
   newAppointmentDetails.save()
      //in case of success
      .then(() => { console.log('Success'); })
      //if error
      .catch(err => { console.log('Error:' + err); });
});
//:id is a dynamic parameter that will be extracted from the URL
app.delete("/viewappointment/:id", (req, res, next) => {
   ViewAppointment.deleteOne({ _id: req.params.id }).then(result => {
     console.log(result);
     res.status(200).json("Deleted!");
   });
 });
 

 app.get('/editappointment/:id', (req, res) => {
   ViewAppointment.findById(req.params.id).
      then(data => {
         res.status(200).json(data)
      //if error, send internal server error
      console.log("******"+data)})
      .catch(err => {
         console.log('Error: ${err}');
         res.status(500).json(err);
      });
 })
 

 app.put('/viewappointment/:id', (req, res, next) => {
   console.log("_id: " + req.params.id)
   // check that the parameter id is valid 
   if (mongoose.Types.ObjectId.isValid(req.params.id)) {
     //find a document and set new first and last names
     ViewAppointment.findOneAndUpdate({_id: req.params.id},
       {$set:{firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone,
      emailid: req.body.emailid,
      ksuid: req.body.ksuid,
      date: req.body.date,
      time: req.body.time,
      gender: req.body.gender,
      counselingMode: req.body.counselingMode,
      campus : req.body.campus,
      appointmentType: req.body.appointmentType,
      requestedService: req.body.requestedService,
      counselor: req.body.counselor,
      additionalInformation: req.body.additionalInformation
       }},{new:true}) 
      .then((apptDetail) => {
         if (apptDetail) { //updated event details
           console.log(apptDetail);
         } else {
           console.log("no data exist for this id");
         }
      })
     .catch((err) => {
       console.log(err);
      });
  } else {
    console.log("please provide correct id");
  }
   
 });

 app.post('/questionnarie', (req, res, next) => {
   // create a new questionnarie variable and save request’s fields 
   const questionSet = new Questionnarie({
      question1: req.body.question1,
      question2: req.body.question2,
      question3: req.body.question3,
      question4: req.body.question4,
      question5: req.body.question5,
      question6: req.body.question6,
      question7: req.body.question7,
      question8: req.body.question8,
      question9: req.body.question9,
      question10: req.body.question10,
   
   });
   //send the document to the database 
   questionSet.save()
      //in case of success
      .then(() => { console.log('Success'); })
      //if error
      .catch(err => { console.log('Error:' + err); });
});

app.get('/questionnarie', (req, res, next) => {
   //call mongoose method find (MongoDB db.Students.find())
   Questionnarie.find()
      //if data is returned, send data as a response 
      .then(data => res.status(200).json(data))
      //if error, send internal server error
      .catch(err => {
         console.log('Error: ${err}');
         res.status(500).json(err);
      });
});

//to use this middleware in other parts of the application
module.exports = app;
