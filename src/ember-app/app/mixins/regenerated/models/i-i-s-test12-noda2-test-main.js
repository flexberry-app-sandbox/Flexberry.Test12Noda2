import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  asd: DS.attr('number'),
  asd2: DS.attr('string'),
  master: DS.belongsTo('i-i-s-test12-noda2-test-master', { inverse: null, async: false }),
  detail: DS.hasMany('i-i-s-test12-noda2-test-detail', { inverse: 'main', async: false })
});

export let ValidationRules = {
  asd: {
    descriptionKey: 'models.i-i-s-test12-noda2-test-main.validations.asd.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  asd2: {
    descriptionKey: 'models.i-i-s-test12-noda2-test-main.validations.asd2.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  master: {
    descriptionKey: 'models.i-i-s-test12-noda2-test-main.validations.master.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  detail: {
    descriptionKey: 'models.i-i-s-test12-noda2-test-main.validations.detail.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('testMainE', 'i-i-s-test12-noda2-test-main', {
    asd: attr('Asd', { index: 0 }),
    asd2: attr('Asd2', { index: 1 }),
    master: belongsTo('i-i-s-test12-noda2-test-master', 'Master', {
      countNum: attr('Count num', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'countNum' }),
    detail: hasMany('i-i-s-test12-noda2-test-detail', 'Detail', {
      name: attr('Name', { index: 0 })
    })
  });

  modelClass.defineProjection('testMainL', 'i-i-s-test12-noda2-test-main', {
    asd: attr('Asd', { index: 0 }),
    asd2: attr('Asd2', { index: 1 }),
    master: belongsTo('i-i-s-test12-noda2-test-master', 'Count num', {
      countNum: attr('Count num', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
