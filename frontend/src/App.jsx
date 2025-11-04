import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
const App = () => {

  const getJokes = async () => {

    const response = await axios.get("https://fullstack-deployment-tz8c.onrender.com/api/jokes")

    console.log(response.data);

    setJokes(response.data)

  }

  useEffect(() => {
    getJokes();
  }, [])

  const [jokes, setJokes] = useState([])
  return (
    <div className='flex flex-col items-center justify-center p-4 text-2xl mt-5'>
      <h1 className='text-red-300 font-extralight text-3xl pb-10'>Jokes Application</h1>

      <h2>Available Jokes : {jokes.length}</h2>

      {
        jokes.length > 0 ?
          (
            jokes.map((joke) => {
              return (
                <div key={joke.id} className='p-2 text-2xl font-sans'>
                  <h1>{joke.joke}</h1>
                </div>
              )
            })
          )
          :
          (
            <h1> No Jookes</h1>
          )
      }

    </div>
  );
}

export default App;
