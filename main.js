const fs = require('fs');
const core = require('@actions/core');
try {
  const item = core.getInput('input-property') ||'name' 
  const inputFile = core.getInput('input-file') || 'package.json' 
  if (fs.existsSync(inputFile)) {
    const newdata = JSON.parse(fs.readFileSync(inputFile))
    core.setOutput('output-property', item);
    core.setOutput('output-value', eval("newdata." + item));
  }
  else {
    console.log('Input File Missing:' + inputFile)
  }
}
  catch (error) {
  core.setFailed(error.message);
}