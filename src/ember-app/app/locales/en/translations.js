import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest12Noda2testMainLForm from './forms/i-i-s-test12-noda2-test-main-l';
import IISTest12Noda2testMasterLForm from './forms/i-i-s-test12-noda2-test-master-l';
import IISTest12Noda2testMainEForm from './forms/i-i-s-test12-noda2-test-main-e';
import IISTest12Noda2testMasterEForm from './forms/i-i-s-test12-noda2-test-master-e';
import IISTest12Noda2testDetailModel from './models/i-i-s-test12-noda2-test-detail';
import IISTest12Noda2testMainModel from './models/i-i-s-test12-noda2-test-main';
import IISTest12Noda2testMasterModel from './models/i-i-s-test12-noda2-test-master';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test12-noda2-test-detail': IISTest12Noda2testDetailModel,
    'i-i-s-test12-noda2-test-main': IISTest12Noda2testMainModel,
    'i-i-s-test12-noda2-test-master': IISTest12Noda2testMasterModel
  },

  'application-name': 'Jdl',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Jdl',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Jdl',
          title: 'Jdl'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        jdl: {
          caption: 'jdl',
          title: 'jdl',
          'i-i-s-test12-noda2-test-main-l': {
            caption: 'Test main',
            title: ''
          },
          'i-i-s-test12-noda2-test-master-l': {
            caption: 'Test master',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test12-noda2-test-main-l': IISTest12Noda2testMainLForm,
    'i-i-s-test12-noda2-test-master-l': IISTest12Noda2testMasterLForm,
    'i-i-s-test12-noda2-test-main-e': IISTest12Noda2testMainEForm,
    'i-i-s-test12-noda2-test-master-e': IISTest12Noda2testMasterEForm
  },

});

export default translations;
