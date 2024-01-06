import AnimeCarousel from "@/components/AnimeCarousel";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Home from "@/views/Home";
import { getSeasonAnime, getSeasonUpcoming, getTopAnime } from "@/lib/getAnime";

export default async function Homepage() {
  const topAnime = await getTopAnime();
  // const seasonAnime = await getSeasonAnime();
  // const seasonUpcoming = await getSeasonUpcoming();

  // Log a single title from each entry in the "data" array
  // const allTitles = topAnime.data.map((entry) => entry.titles[0]?.title);
  // console.log("Single title from each entry:", allTitles);

  return (
    <>
      {/* anime carousel banner */}
      <Home />

      <div>
        <AnimeCarousel anime={topAnime} title="Top Anime" />
        {/* anime ccarosel */}
        {/* <AnimeCarousel anime={[]} title="Season Anime" /> */}
        {/* anime ccarosel */}
        {/* <AnimeCarousel anime={[]} title="Upcoming Season Anime" /> */}
      </div>
    </>
  );
}
