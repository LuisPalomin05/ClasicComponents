

function colorText(text, colorCode) {
    var code;
    switch (colorCode) {
      case "red":
        code = 31;
        break;
      case "green":
        code = 32;
        break;
      case "yellow":
        code = 33;
        break;
      case "blue":
        code = 34;
        break;
  
      default:
        code = 37;
        break;
    }
  
    console.log(`\x1b[${code}m${text}\x1b[0m`);
  }

  module.exports = colorText;