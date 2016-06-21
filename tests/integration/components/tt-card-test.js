import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { make, manualSetup } from 'ember-data-factory-guy';

moduleForComponent('tt-card', 'Integration | Component | tt card', {
  integration: true,
  setup() {
    manualSetup(this.container);
  }
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('card', make('card'));

  this.render(hbs`{{tt-card card=card}}`);

  assert.equal(this.$().text().trim(), this.get('card.title'));
});
