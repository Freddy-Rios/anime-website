// inside the parameters we will het the props id param and search param
// used in destructuring method
function GenrePage({ params: { id }, searchParams: { genre } }) {
  return (
    <div>
      GenrePage ID: {id} and name: {genre}
    </div>
  );
}
// EX: http://localhost:3000/genre/80?genre=Crime
// this will get the id of 80 and genre of Crime used for later
export default GenrePage;
