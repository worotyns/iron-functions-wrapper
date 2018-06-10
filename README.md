# iron-functions-wrapper

## Sample wrapper for node iron functions turn this:

```
const fs = require('fs');

module.exports = function(fn) {
  let body;

  try {
    body = JSON.parse(fs.readFileSync('/dev/stdin').toString())
  } catch(error) {
    console.error(error);
    body = {}
  }

  console.log(JSON.stringify(body))
};
```

### into this:

```
const handler = require('iron-functions-wrapper');

handler(async function(body){
  if (body.someProp) {
    return {
      success: true,
    }
  }

  return {
    error: 'someProp is required'
  }
});
```