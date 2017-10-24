var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {
    console.log(this.videos);
    console.log(this.videos.models);
    this.$el.html(this.template());
    new VideoListView({
      collection: this.videos, el: this.$('.list')
    });
    new VideoPlayerView({model: this.videos, el: this.$('.player')});
    return this;
  },

  template: templateURL('src/templates/app.html')

});
