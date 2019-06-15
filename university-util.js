import universityList from './universities.json';
import createTrie from 'autosuggest-trie';

const universities = universityList.map(uni => ({ name: uni }));
const universitySet = new Set(universityList);
const splitByHyphen = /\s+|-/;
const trie = createTrie(universities, 'name', { splitRegex: splitByHyphen });

export const getUniversitySuggestions = query => {
  const trimmedQuery = query.trim();
  let results;

  if (trimmedQuery === '') {
    results = [];
  } else {
    results = trie.getMatches(trimmedQuery, {
      limit: 15,
      splitRegex: splitByHyphen
    });
    const ranks = {};
    const normalizedQuery = trimmedQuery
      .split(splitByHyphen)
      .join(' ')
      .toLowerCase();
    for (const result of results) {
      const normalizedResult = result.name
        .split(splitByHyphen)
        .join(' ')
        .toLowerCase();
      if (normalizedResult === normalizedQuery) {
        ranks[result.name] = 3;
      } else if (normalizedResult.startsWith(normalizedQuery)) {
        ranks[result.name] = 2;
      } else if (normalizedResult.includes(normalizedQuery)) {
        ranks[result.name] = 1;
      } else {
        ranks[result.name] = 0;
      }
    }
    results = Object.keys(ranks)
      .sort((a, b) => ranks[b] - ranks[a])
      .slice(0, 5);
    if (results.length === 1 && results[0].name === trimmedQuery) {
      results = [];
    }
  }

  return results;
};

export const isUniversity = input => universitySet.has(input);
