import path from 'path';
import i18n from 'i18n';

class Translation {
  constructor() {
    i18n.configure({
      locales: ['en-EN', 'id-ID'],
      defaultLocale: 'en-EN',
      directory: path.join(__dirname, '../locales'),
      updateFiles: false,
    });
  }

  locales(lang: string, str: string) {
    return i18n.__(lang, str);
  }
}

const translation = new Translation();

export default translation.locales;
