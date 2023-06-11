import { useGetPostsQuery } from "./assets/services/FakeDataAPI";

function App() {
  // Only GetPostsQuery is provides the following properties
  const { data, error, isLoading } = useGetPostsQuery();
  return (
    <div className="text-bg-info d-flex align-items-center justify-content-center flex-column">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      
      {data &&
        data.map((item) => {
          return <p className="bg-primary w-100" key={item.id}>{item.title}</p>;
        })}
    </div>
  );
}

export default App;
