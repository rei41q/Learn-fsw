import { useState } from "react";
import style from "./app.module.css";

const App2 = (props) => {
  // udah melakukan api call dan mendapatkan hasil berupa
  // array of strings

  const [dataList] = useState([
    "Ini didalam kotak 1",
    "Ini didalam kotak 2",
    "Ini didalam kotak 3",
    "Ini didalam kotak 4",
    "Ini didalam kotak 5",
  ]);

  return (
    <div className="cobainWrapper">
      
      {dataList.map((data) => {
        return (
          <div style={styles.boxStyle}>
            <p>{data}</p>
          </div>
        );
      })}

      {/* <div style={styles.boxStyle}>
        <p>Ini didalam kotak 1</p>
      </div>
      <div style={styles.boxStyle}>
        <p>Ini didalam kotak 2</p>
      </div>
      <div style={styles.boxStyle}>
        <p>Ini didalam kotak 3</p>
      </div>
      <div style={styles.boxStyle}>
        <p>Ini didalam kotak 4</p>
      </div>
      <div style={styles.boxStyle}>
        <p>Ini didalam kotak 5</p>
      </div>
      <div style={styles.boxStyle}>
        <p>Ini didalam kotak 6</p>
      </div> */}
    </div>
  );
};

const styles = {
  boxStyle: {
    border: "1px solid black",
    backgroundColor: "green",
    color: "white",
    borderRadius: "10px",
    margin: "5px",
    padding: "15px",
  },
};

export default App2;
