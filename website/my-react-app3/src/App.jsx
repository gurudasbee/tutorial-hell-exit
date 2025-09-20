// import Button from "./Button/Button.jsx"
// import Button from "./Button"
import Student from "./Student.jsx"


function App() {
  return (
  <>
    {/* <Button /> */}
    <Student name="Spongebob" age={34} isStudent={true} />
    <Student name="Patrick" age={42} isStudent={false} />
    <Student name="Squidware" age={50} isStudent={false} />
    <Student name="Sandy" age={27} isStudent={true} />
    <Student />
  </>
  );
 }

export default App
