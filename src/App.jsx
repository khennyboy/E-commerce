import { useState } from "react";

function App() {
  const [username, setusername] = useState('')
  const [password, setPassword] = useState('')
  console.log('hello')
  const setInput = (setter) => (event) => {
    setter(event.target.value)
  }
  return (
    <form>
      <h3>username is {username} and password is {password}</h3>
      <input type="text"  onChange={setInput(setusername)}/>
      <input type="password"  onChange={setInput(setPassword)}/>
    </form>
  );
}

export default App;
