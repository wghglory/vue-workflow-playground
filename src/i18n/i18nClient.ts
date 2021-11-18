/**
 * refer: https://vmware.github.io/singleton/docs/tutorials/integrate-singleton-in-javascript-app/
 */
import { i18nClient as jsClient, getBrowserCultureLang, PatternCategories } from '@singleton-i18n/js-core-sdk';

import ENGLISH from './sourceL10n';

const initI18nClient = () => {
  const currentLanguage = getBrowserCultureLang();
  jsClient.init({
    productID: 'vue3',
    component: 'UI',
    version: '1.0.0',
    isPseudo: true,
    host: 'https://g11n-vip-dev-1.eng.vmware.com:8090',
    language: currentLanguage,
    i18nScope: [PatternCategories.DATE, PatternCategories.NUMBER],
    sourceBundles: [ENGLISH],
    httpOptions: {
      timeout: 3000,
      withCredentials: true,
    },
  });
  return jsClient;
};
const i18nClient = initI18nClient();
export default i18nClient;
