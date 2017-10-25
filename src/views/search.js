var SearchView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
    // this.on('click', function() {
    //   var query = $('.form-control').val();
    //   console.log('some');
    //   this.videos.search(query);
    // }, '#app .btn');
  },
  
  event: {
    'click button': 'doSearch',
    'keyup input': 'handleKeyup'
  },

  handleKeyup: function(e) {
    if (e === 13) {
      this.doSearch();
    }
  },

  doSearch: function() {
    var query = $('input').val().trim();
    console.log('some');
    this.collection.search(query);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
