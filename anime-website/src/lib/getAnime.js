// async function fetchFromJikan(url, cacheTime) {
//   const response = await fetch(url);
//   const data = await response.json();

//   return data;
// }

async function fetchFromJikan(url, cacheTime) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      next: `revalidate=${cacheTime || 60 * 60 * 24}`,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = await response.json();

  //console.log("API Response:", data); // Log the response for inspection

  // // Log titles from the first entry in the "data" array
  // const titles = data.data[0]?.titles.map((title) => title.title);
  // console.log("Titles from the first entry:", titles);

  // // Log a single title from each entry in the "data" array
  // const allTitles = data.data.map((entry) => entry.titles[0]?.title);
  // console.log("Single title from each entry:", allTitles);

  return data;
}

export async function getTopAnime() {
  const url = `https://api.jikan.moe/v4/top/anime`;
  const data = await fetchFromJikan(url.toString());

  return data || null; // Return results or null if undefined
}

// export async function getSeasonAnime() {
//   const url = "";
//   const data = await fetchFromJikan(url);

//   return data.results;
// }

// export async function getSeasonUpcoming() {
//   const url = "";
//   const data = await fetchFromJikan(url);

//   return data.results;
// }

// // this will be for genres section when that is implemetned change this code
// export async function getDiscoverMovies(id?: string, keywords?: string) {
//     const url = new URL(`https://api.themoviedb.org/3/discover/movie`);

//     keywords && url.searchParams.set("with_keywords", keywords);
//     id && url.searchParams.set("with_genres", id);

//     const data = await fetchFromTMDB(url);
//     return data.results;
//   }

// export async function getSearchedMovies(term) {
//   const url = new URL("");

//   const response = await fetch(url.toString(), options);
//   const data = await response.json();

//   return data.results;
// }
