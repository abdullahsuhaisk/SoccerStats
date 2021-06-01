import i18n, {
  LanguageDetectorAsyncModule,
  Services,
  InitOptions,
} from 'i18next'
import {initReactI18next} from 'react-i18next'
import * as RNLocalize from 'react-native-localize'
import { _retrieveData, _storeData } from '../utils'

import en from './en'
import tr from './tr'

export const AVAILABLE_LANGUAGES = {
  en,
  tr,
}
const AVALAILABLE_LANG_CODES = Object.keys(AVAILABLE_LANGUAGES)

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  // If this is set to true, your detect function receives a callback function that you should call with your language,
  //useful to retrieve your language stored in AsyncStorage for example
  async: true,
  init: (
    _services: Services,
    _detectorOptions: object,
    _i18nextOptions: InitOptions,
  ) => {
    /* use services and options */
  },
  detect: (callback: (lng: string) => void) => {
    _retrieveData('APP_LANG').then((lng) => {
      console.log('Retrieved user preferences language, "APP_LANG" from async store', lng);
      callback(lng);
    }).catch((err)=> {
      console.log('Error fetching "APP_LANG" from async store', err);
      const bestLng = RNLocalize.findBestAvailableLanguage(AVALAILABLE_LANG_CODES);
      callback(bestLng?.languageTag ?? 'en');
      return;
    })
  },
  cacheUserLanguage: (lng: string) => {
    _storeData('APP_LANG',lng)
  },
}

i18n
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: AVAILABLE_LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'common',
  })