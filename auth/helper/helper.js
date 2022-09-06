// helper/helper.js

module.exports = {
    ValidateEmail,
    ValidatePhone,
    ValidateData,
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
  