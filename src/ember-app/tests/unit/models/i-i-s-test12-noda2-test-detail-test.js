import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test12-noda2-test-detail', 'Unit | Model | i-i-s-test12-noda2-test-detail', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-test12-noda2-test-detail',
    'model:i-i-s-test12-noda2-test-main',
    'model:i-i-s-test12-noda2-test-master',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
