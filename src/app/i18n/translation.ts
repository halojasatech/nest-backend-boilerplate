import path from 'path';
import i18n from 'i18n';

class Translation {
  constructor() {
    i18n.configure({
      locales: ['en'],
      header: 'accept-language',
      directory: path.join(__dirname, '../locales'),
      updateFiles: false,
    });
  }

  locales(lang: string) {
    i18n.setLocale('en');
    return i18n.__(lang);
  }
}

const translation = new Translation();

export default translation.locales;
