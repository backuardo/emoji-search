import Fuse from 'fuse.js';
import emojiList from './emojiList.json';

class FuzzySearch {
  constructor() {
    const options = {
      shouldSort: true,
      tokenize: false,
      threshold: 0.3,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        'title',
        'keywords',
      ],
    };

    this.fuse = new Fuse(emojiList, options);
  }

  search(searchTerm) {
    return this.fuse.search(searchTerm);
  }
}

export default FuzzySearch;
