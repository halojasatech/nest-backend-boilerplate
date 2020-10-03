import maskJson from '@app/util/mask-json';
import _ from 'lodash';

interface IHttpFormat {
  '@timestamp': Date;
  indexInterfix: string;
  severity: string;
  message: string;
  request: {
    language: string;
    headers: object;
  };
  response: object;
}

const httpFormatLog = data => {
  const meta = maskJson(data.meta.data);
  const format: IHttpFormat = {
    '@timestamp': new Date(),
    indexInterfix: 'http-log',
    severity: data.level,
    message: data.message,
    request: {
      language: data.meta.data.request.language,
      headers: meta.request.headers,
    },
    response: meta.response,
  };
  return format;
};

export default httpFormatLog;
