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
    </>
  );
};

export default App;
