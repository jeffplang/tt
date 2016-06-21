import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-card', 'Integration | Component | edit card', {
  integration: true,

  beforeEach() {
    let modalDialogService = this.container.lookup('service:modal-dialog');
    modalDialogService.set('destinationElementId', 'ember-testing');

    this.setProperties({
      title: 'Test title',
      description: 'Test description',
      '$page': this.$() // this.$() gets reassigned to outerElement after this.render() is called?
    });
  }
});

test('it renders', function(assert) {
  this.render(hbs`
    {{edit-card title=title 
                description=description}}
  `);

  assert.equal(this.$().text().trim(), '');
});


test('it sends update on form submission', function(assert) {
  assert.expect(1);

  this.set('save', (attrs) => {
    assert.deepEqual(attrs, {
      title: 'Some different title',
      description: 'Some different description'
    });
  });

  this.render(hbs`
    {{edit-card title=title 
                description=description 
                update=(action save)}}
  `);

  this.get('$page').find('.card-title-input').val('Some different title').change();
  this.get('$page').find('.card-description-input').val('Some different description').change();

  this.get('$page').find('.save-btn').click();
});

test('it sends delete', function(assert) {
  assert.expect(1);

  this.set('delete', () => assert.ok(true));

  this.render(hbs`
    {{edit-card title=title 
                description=description 
                delete=(action delete)}}
  `);

  this.get('$page').find('.edit-card-form-delete-container .delete-btn').click();
  this.get('$page').find('.edit-card-form-delete-container .delete-confirm-btn.yes').click();
});

test('it allows cancelling a delete', function(assert) {
  assert.expect(0);

  this.set('delete', () => assert.ok(true));

  this.render(hbs`
    {{edit-card title=title 
                description=description 
                delete=(action delete)}}
  `);

  this.get('$page').find('.edit-card-form-delete-container .delete-btn').click();
  this.get('$page').find('.edit-card-form-delete-container .delete-confirm-btn.no').click();
});
