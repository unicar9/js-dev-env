/* eslint-disable no-console */

import jsf from 'json-schema-faker'
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

// const js = JSON(jsf(schema))
const outputFile = './src/api/db.json'

jsf.resolve(schema).then(function(result) {
  fs.writeFile(outputFile, JSON.stringify(result, null, 2), function(err){
      if (err) {
          return (console.log(chalk.red(err)));
      } else {
          console.log(chalk.green(`Mock Data Generated Here: ${outputFile}`));
      }
  });
});
