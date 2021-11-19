import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  main: DS.belongsTo('i-i-s-test12-noda2-test-main', { inverse: 'detail', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-test12-noda2-test-detail.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  main: {
    descriptionKey: 'models.i-i-s-test12-noda2-test-detail.validations.main.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('testDetailE', 'i-i-s-test12-noda2-test-detail', {
    name: attr('Name', { index: 0 })
  });
};
