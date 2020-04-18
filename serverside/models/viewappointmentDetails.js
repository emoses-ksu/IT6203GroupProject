const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
  const appointmentDetailsSchema = new mongoose.Schema({
    firstname:  { type: String, required: true},
    lastname:  { type: String, required: true},
    phone: {type: String, pattern: "^([0-9]{3}-[0-9]{3}-[0-9]{4}$", required: false},
    emailid: { type: String, required: true},
    ksuid: { type: String, required: true},
    date: { type: Date,  required: true },
    time: {type: String, required: true},
    gender: {type: String, required: false},
    counselingMode: {type: String, required: true},
    campus:{type: String, required: false},
    appointmentType: {type: String, required: false},
    requestedService: {type: String, required: true},
    counselor: {type: String, required: true},
    additionalInformation: {type: String, required: false},
  });

//use the blueprint to create the model 
// Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('ViewAppointment', appointmentDetailsSchema,'AppointmentDetails');

//note capital S in the collection name
 