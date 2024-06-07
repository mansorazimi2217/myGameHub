import useGenres from "../hooks/useGenre";

const GenreList = () => {
  //   const { data } = useData<Genre>("/genres");
  const { data } = useGenres();
  return (
    <>
      <ul>
        {data.map((gen) => (
          <li key={gen.id}>{gen.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
