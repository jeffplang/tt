import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { make, manualSetup } from 'ember-data-factory-guy';

moduleForComponent('card-list', 'Integration | Component | card list', {
  integration: true,

  setup() {
    manualSetup(this.container);
  }
});

test('it renders', function(assert) {
  this.set('list', make('list'));

  this.render(hbs`{{card-list list=list}}`);

  assert.equal(this.$('h2').text().trim(), this.get('list.title'));

});
