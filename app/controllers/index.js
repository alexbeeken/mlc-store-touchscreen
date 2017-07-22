import Ember from 'ember';
const { computed, inject } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  media: service(),
  exhibits: computed( function() {
    return this.store.peekAll('exhibit').toArray()
  }),
  showingExhibits: computed('currentShowingIdx', function() {
    var idx = this.get('currentShowingIdx')
    return this.get('exhibits').slice(idx, idx+3)
  }),
  currentShowingIdx: 0,
  showForwardArrow: computed('currentShowingIdx', function() {
    return !this.get('media.isMobile')
    && this.get('currentShowingIdx') < (this.get('exhibits').length - 3)
    && this.get('exhibits').length > 2
  }),
  showBackArrow: computed('currentShowingIdx', function() {
    return !this.get('media.isMobile')
    && this.get('currentShowingIdx') > 0
    && this.get('exhibits').length > 2
  }),
  actions: {
    changeIdx: function(change) {
      var idx = this.get('currentShowingIdx')
      var newIdx = idx+change
      this.set('currentShowingIdx', newIdx)
      console.log(this.get('currentShowingIdx'))
    }
  }
})
