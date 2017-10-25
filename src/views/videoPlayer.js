var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    //this.render();
    this.listenTo('this.collection', 'select', this.selectVideo);
    console.log(this.collection);
  },

  selectVideo: function(selection) {
    console.log(selection);
    this.model = selection;
    this.render();
  },

  render: function() {
    if (this.model) {
      console.log(this.model.attributes, 'att');
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
