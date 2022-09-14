// helper/helper.js
import moment from "moment";

export default {
  ValidateEmail,
  ValidatePhone,
  ValidateData,
  getCurrentSession,
};

async function ValidateEmail(inputText) {
  var atSymbol = inputText.indexOf("@");
  if (atSymbol < 1) return false;

  var dot = inputText.indexOf(".");
  if (dot <= atSymbol + 2) return false;

  // check that the dot is not at the end
  if (dot === inputText.length - 1) return false;

  return true;
}

async function ValidatePhone(inputText) {
  if (Number.isInteger(inputText)) {
    return true;
  } else {
    return false;
  }
}

async function ValidateData(inputText) {
  let email = await ValidateEmail(inputText);
  if (email == true) return "email";

  let phone_number = await ValidatePhone(inputText);
  if (phone_number == true) return "phone_number";

  return "username";
}

async function getCurrentSession(school_type) {
  let currentMonth = moment().month();
  let session = '';
  if (school_type == "" && school_type == "degree_college") {
    if (currentMonth >= 6) {
      session = moment().year() + "-" + String(moment().add("1", "y").year()).substr(2);
    } else {
      console.log(currentMonth);
      session = moment().subtract("1", "y") + "-" + String(moment().year()).substr(2);
    }
    return session;
  }

  if (currentMonth >= 3) {
    session = moment().year() + "-" + String(moment().add("1", "y").year()).substr(2);
  } else {
    session = moment().subtract("1", "y") + "-" + String(moment().year()).substr(2);
  }
  return session;
}
