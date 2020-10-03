const collection = require('./collection-key.json');
import { cloneDeepWith, isObject, toLower, some } from 'lodash';

/**
 * Filtering and Censoring Sensitive Data
 * All data keys are stored in data-key.json
 */

const replacement = '******';
const maskJson = (values): any => {
  return cloneDeepWith(values, (value, key: string) => {
    // Strip matching keys.
    if (some(collection, item => key === item)) return replacement
    if (isObject(value)) return value
    return value;
  });
};

export default maskJson;
