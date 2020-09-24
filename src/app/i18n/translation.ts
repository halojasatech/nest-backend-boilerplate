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

  locales(lang: string) {
    return i18n.__(lang);
  }
}

const translation = new Translation();

export default translation.locales;
