import yaml from 'js-yaml';
import enYaml from './en.yaml?raw';
import ruYaml from './ru.yaml?raw';

const locales = {
  en: yaml.load(enYaml),
  ru: yaml.load(ruYaml),
};

export const AVAILABLE_LANGUAGES = ['en', 'ru'];
export const DEFAULT_LANGUAGE = 'en';

export default locales;
