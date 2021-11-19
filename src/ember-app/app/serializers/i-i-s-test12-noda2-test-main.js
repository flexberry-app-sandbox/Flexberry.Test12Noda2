import { Serializer as testMainSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test12-noda2-test-main';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(testMainSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
