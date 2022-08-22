import Education from "./Education";
import Identity from "./Identity";

const App = () => {

  const userObject = {
    name: "the name",
    address: "the address",
  };
  
  return (
    <>
      <div>
        <h1>Halaman React Pertamaku</h1>
      </div>
      <Identity user={userObject} />
      <hr />
      <Education />
    </>
  );
};

export default App;
