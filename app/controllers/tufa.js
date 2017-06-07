import Ember from 'ember';

const { computed } = Ember;

export default Ember.Route.extend({
  slides: [
    {
      title: 'Example Title',
      subtitle: 'example subtitle',
      data: '1234 units (example data)',
      description: 'Long description with interpretation or definition or any other relevent information.',
      path: '/negit-1993.jpg'
    },
    {
      title: 'Example Title',
      subtitle: 'example subtitle',
      data: '1234 units (example data)',
      description: 'Long description with interpretation or definition or any other relevent information.',
      path: '/negit-1998.jpg'
    },
    {
      title: 'Example Title',
      subtitle: 'example subtitle',
      data: '1234 units (example data)',
      description: 'Long description with interpretation or definition or any other relevent information.',
      path: '/negit-2005.jpg'
    },
    {
      title: 'Example Title',
      subtitle: 'example subtitle',
      data: '1234 units (example data)',
      description: 'Long description with interpretation or definition or any other relevent information.',
      path: '/negit-2009.jpg'
    }
  ],
  currentSlideIdx: 0,
  currentSlide: computed('slides', 'currentSlideIdx', function() {
    return this.get('slides')[this.get('currentSlideIdx')]
  })
})
