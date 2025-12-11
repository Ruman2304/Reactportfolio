function Student(prop){
  return (
    <div className="studentcard">
      <p>name = {prop.name}</p>
      <p>age = {prop.age}</p>
      <p>Student = {prop.isstudent ? "True" : "False"}</p>
    </div>
  );
}

export default Student;
