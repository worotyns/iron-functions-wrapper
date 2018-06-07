const fs = require('fs');

module.exports = async function(fn) {
  let body;

  try {
    body = JSON.parse(fs.readFileSync('/dev/stdin').toString())
  } catch(error) {
    body = {}
  }
  
  const response = await fn(body) || {};

  console.log(JSON.stringify(response));
};