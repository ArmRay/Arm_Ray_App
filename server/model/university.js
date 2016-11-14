/**
 * Created by colin on 9/17/16.
 */
var mongoose = require('mongoose');
var universitySchema = new mongoose.Schema({
  uni_id:	String,
  created_date:	String,
  updated_date:	String,
  university_name: String,
  profile_images: [],
  geolocation: [],
  city:	String,
  state: String,
  project_ids:	[],
  created_date: String,
  updated_date: String
});

mongoose.model('University', universitySchema);
