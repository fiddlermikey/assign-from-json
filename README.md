# Assign workflow properties from json

This action is designed to read a json file and set workflow variables using properties defined in the json file

## Inputs

### `input-property`

**Required** The identifier of the json property to be evaluated

## Outputs

### `output-value`

The value from the json property

## Example usage

```yaml
jobs:
  assign-from-json:
    runs-on: ubuntu-latest
    name: A test job to read a value from json as a variable
    steps:
      - name: Read a json file 
        uses: fiddlermikey/assign-from-json@v1.0
        id: read
        with:
          input-file: 'package.json'
          input-property: 'author.name' # Exp: 'fiddlermikey'
      - name: Display property value for input-property in input-file
        id: write
        run: echo "The value for ${{ steps.read.outputs.output-property }} is ${{ steps.read.outputs.output-value }}"

```