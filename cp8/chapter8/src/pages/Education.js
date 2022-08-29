
const Education = (props) => {
  return (
    <>
      <div>Education Section</div>
      <div>{props.educations.univ === "UGM" ? "ugm deh" : "kampus lain"}</div>
      <div>{props.educations.jurusan}</div>
    </>
  );
};

export default Education;
