import FuzzySearch from 'fuzzy-search';
import emojiList from './emojiList.json';

class EmojiSearch {
  constructor() {
    this.searcher = new FuzzySearch(emojiList, ['keywords'], { caseSensitive: false, sort: true });
  }

  search(searchTerm) {
    return this.searcher.search(searchTerm);
  }
}

export default EmojiSearch;
