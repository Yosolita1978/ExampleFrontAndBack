
import { useEffect, useState } from 'react';


function App() {

  const [myname, setMyname] = useState('')
  const [message, setMessage] = useState('')

  const callBackEnd = async () => {
    const response = await fetch('/api/myname');
    const data = await response.json();
    console.log(data);
    setMyname(data.name);
  };

  const callForMessage = () => {
    fetch('/api')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMessage(data.message);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    callBackEnd();
    callForMessage();
  }, []);
  

  return (
    <>
      <div>
        <h1>Hello Techtonica!</h1>
        {myname}

        <h2>Message from the backend: {message}</h2>
       </div>
    </>
  )
}

export default App
