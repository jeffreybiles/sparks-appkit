var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });

  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
});

export default Router;
