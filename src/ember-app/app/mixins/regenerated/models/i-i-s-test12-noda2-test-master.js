import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  countNum: DS.attr('number')
});

export let ValidationRules = {
  countNum: {
    descriptionKey: 'models.i-i-s-test12-noda2-test-master.validations.countNum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('testMasterE', 'i-i-s-test12-noda2-test-master', {
    countNum: attr('Count num', { index: 0 })
  });

  modelClass.defineProjection('testMasterL', 'i-i-s-test12-noda2-test-master', {
    countNum: attr('Count num', { index: 0 })
  });
};
