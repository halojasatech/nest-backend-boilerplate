const sensitiveKey = require('./sensitive-key.json');
import _ from 'lodash';

/**
 * Filtering and Censoring Sensitive Data
 * All data keys are stored in data-key.json
 */
class DataCensoring {
  public do(data: any) {
    const stringify = JSON.stringify(data);
    const sample = JSON.parse(stringify);

    const elementToSearch = sensitiveKey.keys;
    _.mapKeys(sample, (val, key) => {
      // find object key
      elementToSearch.find(element => {
        if (element == key) {
          sample[key] = '********';
          return sample;
        }
      });

      // find nested object
      if (typeof sample[key] === 'object') {
        _.mapKeys(sample[key], (nestedVal, nestedValkey) => {
          elementToSearch.find(element => {
            if (element == nestedValkey) {
              sample[key][nestedValkey] = '********';
              return sample;
            }
          });
        });
      }
    });

    // console.log(sample);
    return sample;
  }

  public map() {}
}

export default new DataCensoring();
