import { Serializer as testMasterSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test12-noda2-test-master';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(testMasterSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
