import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Jdl',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Jdl',
          title: 'Jdl'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test12-noda2-test-main-l': IISTest12Noda2testMainLForm,
    'i-i-s-test12-noda2-test-master-l': IISTest12Noda2testMasterLForm,
    'i-i-s-test12-noda2-test-main-e': IISTest12Noda2testMainEForm,
    'i-i-s-test12-noda2-test-master-e': IISTest12Noda2testMasterEForm
  },

});

export default translations;
