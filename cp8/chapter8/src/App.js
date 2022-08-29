import { Link, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs";
import Education from "./pages/Education";
import Identity from "./pages/Identity";

const App = () => {
  return (
    <>
      <nav style={{ backgroundColor: "lightgreen" }}>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/identity">Identity</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
        </ul>
      </nav>
      <div
        style={{
          backgroundColor: "lightgreen",
          padding: "10px",
        }}
      >
        <div style={{ backgroundColor: "white", minHeight: "200px" }}>
          <Routes>
            <Route path="/" element={<div>Ini halaman home</div>} />
            <Route
              path="/identity"
              element={
                <Identity user={{ name: "El Setiyawan", address: "Jogja" }} />
              }
            />
            <Route
              path="/education"
              element={
                <Education
                  educations={{
                    univ: "UMY",
                    jurusan: "Hubungan International",
                  }}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
