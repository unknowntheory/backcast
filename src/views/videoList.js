var VideoListView = Backbone.View.extend({

  //el: '.list',
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    // var greed = this.co  llection.map((video)=>{ return video.collection.models; });
    
    return this;

  },

  template: templateURL('src/templates/videoList.html')

});
