import models from '../../../../../model';
import bcrypt from 'bcrypt';

const Grant = models.grant;
const Post = models.post;
const Project = models.project;
const Review = models.review;
const Skill = models.skill;
const University = models.University;
const User = models.User;
const UserSkill = models.userkSkill;

/**
 * Note that despite the name, this only creates one skill.
 * @param {Object} options
 * @param {String} options.description description of &#x60;Skill&#x60;
 * @param {Function} callback
 */
export function createSkills (options, callback) {
  // Implement you business logic here...
  let skill = new Skill();

  skill.description = options.req.body.description;
  skill.created_date = new Date();
  skill.updated_date = skill.created_date;

  skill.save(function(err)) {
    if(err) {
      console.error(err);
    }
  })
  }

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; id
 * @param {Function} callback
 */
export function getSkillById (options, callback) {
  Skill.findById(options.id, function(err, skill){
    if(err){
      console.error(err);
    }
    res.status(200).json(skill);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.description description of &#x60;Skill&#x60;
 * @param {Function} callback
 */
export function updateSkillById (options, callback) {
  // Implement you business logic here...
  Skill.findById(options.id, function(err, skill) {

    if(err) {
      console.error(err);
    }
    skill.description = options.req.body.description ? options.req.body.description : skill.description;
    skill.updated_date = new Date();

    skill.save(function(err)) {
      if(err) {
        console.error(err);
      }
      res.json({
        message: 'This Skill has been updated';
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; id
 * @param {Function} callback
 */
export function deleteSkillwById (options, callback) {
  Skill.remove({
    _id: options.id
  }, function(err, project) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This Skill has been deleted'
    });
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; id
 * @param {Function} callback
 */
export function getSkillBodyById (options, callback) {
  Skill.findById(options.id, function(err, skill){
    if(err){
      console.error(err);
    }
    res.status(200).json(skill.description);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; name
 * @param {String} options.description
 * @param {Function} callback
 */
export function updateSkillDescriptionByIdForm (options, callback) {
  Skill.findById(options.id, function(err, skill) {

    if(err) {
      console.error(err);
    }
    skill.description = options.req.body.description;
    skill.updated_date = new Date();

    skill.save(function(err)) {
      if(err) {
        console.error(err);
      }
      res.json({
        message: 'This Skill has been updated';
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; name
 * @param {String} options.description The &#x60;Skill&#x60; description
 * @param {Function} callback
 */
export function setSkillDescriptionByIdForn (options, callback) {
  updateSkillDescriptionByIdForm (options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; name
 * @param {Function} callback
 */
export function deleteSkillDescriptionByIdForn (options, callback) {
  Skill.findById(options.id, function(err, skill) {

    if(err) {
      console.error(err);
    }
    skill.description = null;
    skill.updated_date = new Date();

    skill.save(function(err)) {
      if(err) {
        console.error(err);
      }
      res.json({
        message: 'This Skill has been updated';
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; id
 * @param {String} options.description The &#x60;Skill&#x60; description
 * @param {Function} callback
 */
export function getIsSkillBodyById (options, callback) {
  Skill.findById(options.id, function(err, skill){
    if(err){
      console.error(err);
    }
    res.status(200).json(skill.description == options.req.body.description);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; name
 * @param {String} options.description
 * @param {Function} callback
 */
export function updateSkillDescriptionById (options, callback) {
  updateSkillDescriptionByIdForm (options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; id
 * @param {String} options.description The &#x60;Skill&#x60; description
 * @param {Function} callback
 */
export function setSkillDescriptionById (options, callback) {
  updateSkillDescriptionByIdForm (options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; id
 * @param {Function} callback
 */
export function getSkillCreatedDateById (options, callback) {
  Skill.findById(options.id, function(err, skill){
    if(err){
      console.error(err);
    }
    res.status(200).json(skill.created_date);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; id
 * @param {Function} callback
 */
export function getSkillUpdatedDateById (options, callback) {
  Skill.findById(options.id, function(err, skill){
    if(err){
      console.error(err);
    }
    res.status(200).json(skill.updated_date);
  })
}
