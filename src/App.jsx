import Heading from "./Component/Heading";
import Slogan from "./Component/Slogan";
import TimePara from "./Component/TimePara";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

function App() {
  return(
    <center className="clock-container">
  <Heading/>
  <Slogan/>
  <TimePara/>
  </center>
  );
}
export default App;