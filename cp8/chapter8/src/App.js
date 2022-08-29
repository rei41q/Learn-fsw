import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs";
import Education from "./pages/Education";
import Identity from "./pages/Identity";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Ini halaman home</div>} />
      <Route
        path="/identity"
        element={<Identity user={{ name: "El Setiyawan", address: "Jogja" }} />}
      />
      <Route
        path="/education"
        element={
          <Education
          educations={{ univ: "UMY", jurusan: "Hubungan International" }}
          />
        }
      />
    </Routes>
  );
};

export default App;
