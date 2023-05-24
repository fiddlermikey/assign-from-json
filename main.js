const fs = require('fs');
const core = require('@actions/core');
try {
  const item = core.getInput('input-property') || 'foo'
  const inputFile = core.getInput('input-file') || 'package.json'
  const newdata = JSON.parse(fs.readFileSync(inputFile))
  const outValue = eval("newdata." + item)
  core.setOutput('output-property', item);
  core.setOutput('output-value', outValue);
  if (outValue === undefined) {
    core.setFailed('Property: ' + item + ' does not exist in ' + inputFile);
  }
}
catch (error) {
  core.setFailed(error.message);
}