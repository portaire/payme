import { UpdatePaymentMethod } from '@organisms/UpdatePaymentMethod';
import { useEffect, useState } from 'react';

function App() {
  const [prevData, setPrevData] = useState({});

  const getData = async () => {
    const examplePayment = await fetch(
      'https://portaireapi.herokuapp.com/test/payment',
      {
        method: 'GET',
      }
    );
    const [data] = await examplePayment.json();

    setPrevData(data);
  };

  // React 18 fun :)
  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      getData();
    }

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="App">
      {Object.keys(prevData).length ? (
        <UpdatePaymentMethod prevData={prevData} />
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}

export default App;
