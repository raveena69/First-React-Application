import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'Raveena';
  const lastName = "Sachini";
  const age = 25;
  const profession = 'student';
  const inputPlaceholder = "Enter your data";
  const inputPlaceholder1 = "Enter your data demo";
  const detailInputBox = <input type="text" placeholder={inputPlaceholder1} autoComplete/>;
  const mArray = [11,22,33,44];

  const mObject = {
    name: 'Anuhas',
    age : 26
  }

  const getFullName = (firstName,lastName) =>{
    return `${firstName} ${lastName}`;
  }

  const getFullName1 = (firstName,lastName) => `${firstName} ${lastName}`;


  return (
    <div className="App">
      <h3>Name : {firstName} {lastName}</h3>
      <h3>Name 1 : {firstName + ' ' + lastName}</h3>
      <h3>Name 2 : {`${firstName} ${lastName}`}</h3>
      <h3>Name 3 : {getFullName(firstName, lastName)}</h3>
      <h3>Name 4 : {getFullName1(firstName, lastName)}</h3>
      <p>Age : {age}</p>
      <p>Profession : {profession}</p>

      <input type="text" placeholder={inputPlaceholder} autoComplete/> <br/>
      
      {detailInputBox}

      <br/>
      <i>Array : {mArray[2]} </i>

      <p>Name : {mObject.name}</p>
      <b>Age  : {mObject.age}</b>

      {/* {
        mArray.map()
      } */}

      <br/>
      <p>mArray[2] == 2</p>
      {
        mArray[2] == 2 ? "Correct" : "False"
      }

      <br/>
      <p>mArray[2] &gt; 2</p>
      {
        mArray[2] > 2 ? "Correct" : "False"
      }

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;