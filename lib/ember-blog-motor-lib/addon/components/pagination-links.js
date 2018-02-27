import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/pagination-links';



export default Component.extend({
  tagName: 'nav',
  classNames: ['pagination-links'],
  layout,

  pageLinks: computed('size', 'count', function() {
    const links = [];
    const pageCount = Math.ceil(this.count / this.size);

    for(let i=2; i<pageCount; i++) {
      links.push(i);
    }
    return links;
  }),

  lastPage: computed('size', 'count', function() {
    return Math.ceil(this.count / this.size);
  })
});
