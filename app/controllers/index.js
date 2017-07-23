import Ember from 'ember';
const { computed, inject } = Ember;
const { service } = inject;

const pageCount = 3

export default Ember.Controller.extend({
  media: service(),
  exhibits: computed( function() {
    return this.store.peekAll('exhibit').toArray()
  }),
  showingExhibits: computed('currentShowingIdx', function() {
    if (this.get('media.isMobile')) {
      return this.get('exhibits')
    } else {
      var idx = this.get('currentShowingIdx')
      return this.get('exhibits').slice(idx, idx+pageCount)
    }
  }),
  currentShowingIdx: 0,
  showForwardArrow: computed('currentShowingIdx', function() {
    return !this.get('media.isMobile')
    && this.get('currentShowingIdx') < (this.get('exhibits').length - pageCount)
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
    }
  }
})
