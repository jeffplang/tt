import { moduleForModel, test } from 'ember-qunit';
import { make, manualSetup } from 'ember-data-factory-guy';

moduleForModel('card', 'Unit | Model | card', {
  needs: ['model:list'],

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
  let card = make('list', { title: '' });

  card.save();

  assert.equal(card.get('invalid'), true);
});
