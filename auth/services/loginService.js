// controllers/Post/index.js
const fetch = require("node-fetch");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const userService = require("./userService.js");

const loginUrl = process.env.LOGIN_URL;

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function postLogin(data) {
  var postData = {
    emailorusername: data.emailorusername,
    password: data.password,
  };
  try {
    const res = await fetch(loginUrl, {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status == 200) {
      var tokenData = await generateToken(data);
      var user = await userService.getUser(data.emailorusername);
      console.log(tokenData);
      var jsonData = {
        msg: "login successful",
        status: 200,
        token: tokenData,
        userData: user,
      };
      return jsonData;
    } else {
      var jsonData = {
        msg: "login failed",
        status: 201,
      };
      return jsonData;
    }
  } catch (err) {
    console.log(err);
  }
}

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function generateToken(data) {
  try {
    // We only pass the body object, never the req object
    var token = jwt.sign(
      {
        username: data.emailorusername,
        userid: data.emailorusername,
      },
      process.env.SECRET,
      { expiresIn: "48hr" }
    );
    return token;
  } catch (err) {
    return err;
  }
}

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function postToken(data) {
  try {
    if (data.token) {
      var tokenData = await refreshToken(data);
      var user = await userService.getUser(data.emailorusername);
      var jsonData = {
        msg: "login successful",
        status: 200,
        token: tokenData,
        userData: user,
      };
      return jsonData;
    } else {
      var jsonData = {
        msg: "login failed",
        status: 201,
      };
      return jsonData;
    }
  } catch (err) {
    console.log(err);
  }
}

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function refreshToken(data) {
  try {
    // We only pass the body object, never the req object
    var token = jwt.sign(
      {
        username: data.emailorusername,
        userid: data.emailorusername,
      },
      process.env.SECRET,
      { expiresIn: "48hr" }
    );
    return token;
  } catch (err) {
    return err;
  }
}

module.exports = {
  postLogin,
  generateToken,
  postToken,
  refreshToken,
};
