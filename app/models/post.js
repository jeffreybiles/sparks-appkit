var Post = DS.Model.extend({
  title: DS.attr(),
  videoUrl: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  body: DS.attr(),

  deckedOutVideoUrl: function(){
    return this.get('videoUrl') + '?modestbranding=1&rel=0'
  }.property('videoUrl')
})

Post.FIXTURES = [{
  id: '1',
  videoUrl: 'http://www.youtube.com/embed/a3KGITKNbeQ',
  title: "Taco Tuesday",
  author: "President Business",
  date: new Date('2-8-2014'),
  body: "Hi, I'm President Business, president of the Octan corporation and the world. Let's take extra care to follow the instructions or you'll be *put to sleep*, and don't forget Taco Tuesday's coming next week."
}, {
  id: '2',
  videoUrl: 'http://www.youtube.com/embed/i1Qzaf6lV1Q',
  title: "Top 3 reasons why Everything is Awesome",
  author: "President Business",
  date: new Date('2-7-2014'),
  body: "1. You're part of a team\n\n2. We're living our dream\n\n3. Gonna win forever, party forever"
}, {
  id: '3',
  title: 'No video!',
  author: 'Jeffrey Biles',
  date: new Date('3-4-2014'),
  body: ""
}];

export default Post;