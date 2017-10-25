var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    // this.on('click', function() {
    //   var query = $('.form-control').val();
      
    //   this.videos.search(query);
    // }, '#app .btn');
    this.listenTo(this.videos, 'sync', this.firstSelect );
    this.videos.search();
    this.render();
  },
  
  firstSelect: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },

  render: function() {
    this.$el.html(this.template());
    new VideoListView({
      collection: this.videos, el: this.$('.list')
    });
    
    new VideoPlayerView({model: this.videos.at(0), collection: this.videos, el: this.$('.player')}).render();
    new SearchView({collection: this.videos, el: this.$('.search')});
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
