export default function() {
  this.get('/lists');
  this.post('/lists');
  this.post('/cards');
  this.patch('/cards/:id');
  this.del('/cards/:id');
}
