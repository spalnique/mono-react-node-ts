import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isFetching, setIsFetching] = useState<null | boolean>(null);
  const [response, setResponse] = useState<null | Response>(null);

  useEffect(() => {
    const fetchFn = async () => {
      try {
        const res = await fetch('http://localhost:3000/status');
        const data = await res.json();

        if (res.ok) setResponse(() => data);
        setCount((count) => count + 1);
      } catch (error) {
        console.error(error);
        setIsFetching(false);
      } finally {
        setIsFetching(false);
      }
    };
    if (isFetching) fetchFn();
  }, [isFetching]);

  return (
    <>
      <h3>Monorepo</h3>
      <h2>React + Node + TS</h2>
      <br />
      <br />
      <br />
      <br />
      <br />

      <button
        onClick={() => {
          if (!isFetching) setIsFetching(true);
        }}
      >
        {isFetching === null
          ? 'Click me!'
          : isFetching
            ? 'Fetching...'
            : 'Done!'}
      </button>
      <p>{`Fetched ${count} times!`}</p>
      {response && <p>{`Response is: ${response}`}</p>}
    </>
  );
}

export default App;
