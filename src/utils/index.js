import * as fs from 'node:fs';

export function getJsonData(filepath) {
  return new Promise((resolve, reject)=> {
    fs.readFile(filepath, 'utf8' ,(err, data) => {
      if (err) {
        reject(err);
      } else {
        console.log(data)
        resolve(JSON.parse(data));
      }
    })
  })
}

export function delay(miliseconds) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(resolve, miliseconds);
    } catch(err) {
      reject(err);
    }
  });
}