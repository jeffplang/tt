import { moduleForModel, test } from 'ember-qunit';
import { make, manualSetup } from 'ember-data-factory-guy';

moduleForModel('list', 'Unit | Model | list', {
  needs: ['model:card'],

  setup() {
    manualSetup(this.container);
  }
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('it will not save without a title', function(assert) {
  let list = make('list', { title: '' });

  list.save();

  assert.equal(list.get('invalid'), true);
});
