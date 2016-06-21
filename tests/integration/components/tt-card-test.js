import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { make, manualSetup } from 'ember-data-factory-guy';
import Ember from 'ember';

moduleForComponent('tt-card', 'Integration | Component | tt card', {
  integration: true,

  beforeEach() {
    manualSetup(this.container);
  }
});

test('it renders', function(assert) {
  this.set('card', make('card'));

  this.render(hbs`
    {{tt-card card=card}}
  `);

  assert.equal(this.$().text().trim(), this.get('card.title'));
});

test('it cancels creating a new card', function(assert) {
  assert.expect(1);

  this.set('card', Ember.Object.create({
    isNew: true,
    title: null,
    description: null
  }));

  this.set('delete', () => assert.ok(true));

  this.render(hbs`
    {{tt-card card=card
              onDelete=(action delete)}}
  `);
  
  this.$('.cancel').click();
});
