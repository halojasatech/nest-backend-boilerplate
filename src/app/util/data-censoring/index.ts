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
    _.map(sample, (val, key) => {
      elementToSearch.find(element => {
        if (element == key) {
          sample[key] = '********';
          return sample;
        }
      });
    });
    return sample;
  }
}

export default new DataCensoring();
