const fs = require('fs');

module.exports = async function(fn) {
  let body;
  let response;

  try {
    body = JSON.parse(fs.readFileSync('/dev/stdin').toString())
  } catch(error) {
    body = {}
  }

  console.error(body)

  try {
    response = await fn(body) || {};
  } catch(error) {
    response = { error: error.message }
  }

  if (typeof response === 'object') {
    response = JSON.stringify(response);
  }

  console.error(response);
  console.log(response);
};