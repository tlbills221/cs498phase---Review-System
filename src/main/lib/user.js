const User = require('../models/User') //relative path to User

const is_whitelisted = async (linkblue_username) => {
  // try to pull user from table using the linkblue
  const user = await User.query()
    .findById(linkblue_username)
  // if we got user, return true
  if (user) {
    return true
  }
  // else return false
  else {
    return false
  }
}

module.exports.is_whitelisted = is_whitelisted

