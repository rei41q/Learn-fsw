import Counting from "./Counting";
import Counting2 from "./Counting2";
import Education from "./Education";
import Identity from "./Identity";

const App = () => {
  const userObject = {
    name: "El Setiyawan",
    address: "Jogjakarta",
  };

  const educations = {
    univ: "UGM",
    jurusan: "Teknik Mesin",
  };

  return (
    <>
      <div>
        <h1>Halaman React Pertamaku</h1>
      </div>
      <Identity user={userObject} />
      <hr />
      <Education educations={educations} />
      <hr />
      <Counting startNumber={3}/>
      <Counting2 startNumber={10}/>
    </>
  );
};

export default App;
