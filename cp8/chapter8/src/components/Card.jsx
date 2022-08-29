import React from "react";

const Card = (props) => {
  const { title, body, onClick } = props;
  return (
    <div style={styles.card} >
      <div style={styles.title}>{title}</div>
      <div>{body}</div>
    </div>
  );
};

const styles = {
  card: {
    border: "0.5px solid black",
    width: "20%",
    margin: "10px",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "5px 5px #888888",
    cursor: "pointer",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "10px",
    textTransform: "capitalize",
  },
};
export default Card;
