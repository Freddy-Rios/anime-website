// this is the search page section for users this is using next.js
// special file system for search results. noted by the [term] in files

import { notFound } from "next/navigation";

function SearchPage({ params: { term } }) {
  // Throws a 404 error if the page is not found
  if (!term) notFound;

  // Decoeds the term searched by the user so it is readable
  const termToUse = decodeURI(term);

  // the "term" is mainly for testing Purposes but can be used later
  // it is the term the users searches for
  return <div>Searched for: {termToUse}</div>;
}

export default SearchPage;
