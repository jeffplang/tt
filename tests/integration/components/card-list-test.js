import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { make, manualSetup } from 'ember-data-factory-guy';
import Ember from 'ember';

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

test('it creates a new list', function(assert) {
  assert.expect(1);

  this.set('list', Ember.Object.create({
    isNew: true,
    title: 'Test list',
    save: () => assert.ok(true)
  }));

  this.render(hbs`
    {{card-list list=list}}
  `);

  this.$('.save-btn').click();
});

test('it cancels creating a new list', function(assert) {
  assert.expect(1);

  this.set('list', Ember.Object.create({
    isNew: true,
    title: null
  }));

  this.set('delete', () => assert.ok(true));

  this.render(hbs`
    {{card-list list=list onDelete=(action delete)}}
  `);
  
  this.$('.cancel').click();
});
