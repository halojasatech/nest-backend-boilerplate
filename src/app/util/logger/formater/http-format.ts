import censor from '@app/util/data-censoring';
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

export const httpFormatLog = data => {
  const format: IHttpFormat = {
    '@timestamp': new Date(),
    indexInterfix: 'http',
    severity: data.level,
    message: data.message,
    request: {
      language: data.meta.data.request.language,
      headers: censor.do(data.meta.data.request.headers),
    },
    response: censor.do(data.meta.data.response),
  };

  console.log(format);
  return format;
};
