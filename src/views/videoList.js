var VideoListView = Backbone.View.extend({

  //el: '.list',
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'sync', this.render);
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.$('.video-list').append(this.collection.map( video => {
      console.log(video);
      return new VideoListEntryView({model: video}).render().el;
    }));
    
    return this;

  },

  template: templateURL('src/templates/videoList.html')

});
