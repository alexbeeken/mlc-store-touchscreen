import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  slides: [
    {
      title: 'Example Title 1',
      subtitle: 'example subtitle 1',
      data: '1234 units (example data)',
      description: 'Long description with interpretation or definition or any other relevent information.',
      path: '/negit-1993.jpg'
    },
    {
      title: 'Example Title 2',
      subtitle: 'example subtitle 2',
      data: '1234 units (example data)',
      description: 'Long description with interpretation or definition or any other relevent information.',
      path: '/negit-1998.jpg'
    },
    {
      title: 'Example Title 3',
      subtitle: 'example subtitle 3',
      data: '1234 units (example data)',
      description: 'Long description with interpretation or definition or any other relevent information.',
      path: '/negit-2005.jpg'
    },
    {
      title: 'Example Title 4',
      subtitle: 'example subtitle 4',
      data: '1234 units (example data)',
      description: 'Long description with interpretation or definition or any other relevent information.',
      path: '/negit-2009.jpg'
    }
  ],
  currentSlideIdx: 0,
  currentSlide: computed('slides', 'currentSlideIdx', function() {
    return this.get('slides')[this.get('currentSlideIdx')]
  }),
  actions: {
    switchIdx: function(idx) {
      this.set('currentSlideIdx', idx);
    }
  }
})
