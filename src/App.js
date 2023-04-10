import "./App.css";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'

function App() {
  return (
    <>
      <style type="text/css">
        {`
.btn-flat {
  background-color: white;
  color: white;
  border: white;
}

.btn-xxl {
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
}
`}
      </style>
      <div className="App">
        <Button className = "homepage-btn" variant="flat" size="xxl">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp9AxhxlZhyxlUC9Uw6MEE97d642ROWXu28Hadm_5t&s"></img>
        </Button>
        <h2 className= "homepage-header">Hi, <br />
          I'm Grace, <br />
          Full Stack Software Developer, <br />
          and Poet</h2>
      </div>
    </>
  );
}

export default App;

