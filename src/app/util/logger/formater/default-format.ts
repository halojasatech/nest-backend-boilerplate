import maskJson from '@app/util/mask-json';
import _ from 'lodash';

interface IDefaultFormat {
  '@timestamp': Date;
  indexInterfix: string;
  severity: string;
  message: string;
  data: any;
}

const defaultFormatLog = data => {
  const meta = maskJson(data.meta);
  const format: IDefaultFormat = {
    '@timestamp': new Date(),
    indexInterfix: 'app-log',
    severity: data.level,
    message: data.message,
    data: meta,
  };
  return format;
};

export default defaultFormatLog;
