import ParticularPost from "./components/ParticularPost";
import ShowAllPosts from "./components/ShowAllPosts";

function App() {
  return (
    <div className="bg-light  ">
      <h1 className="alert alert-warning  w-100 text-center">RTK Query</h1>

      {/* Uncomment to see the commented Components */}
      {/* <ShowAllPosts /> */}
      <ParticularPost />
    </div>
  );
}

export default App;
