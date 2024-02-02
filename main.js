const fs = require('fs');
const core = require('@actions/core');
try {
  const item = core.getInput('input-property') || 'foo'
  const requiredValue = core.getInput('required-value') || 'false'
  const inputFile = core.getInput('input-file') || 'package.json'
  const newdata = JSON.parse(fs.readFileSync(inputFile))
  var outValue = ''
  outValue = eval("newdata." + item)
  core.setOutput('output-property', item);
  core.setOutput('output-value', outValue);
  if (outValue === undefined && requiredValue == 'true') {
    core.setFailed('Property: ' + item + ' does not exist in ' + inputFile);
  }
}
catch (error) {
  core.setFailed(error.message);
}