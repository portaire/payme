import { Payments } from 'features/payments';

function App() {
  return (
    <div>
      <main className="app-center">
        <Payments updatePaymentLabel="Update payment method" />
      </main>
    </div>
  );
}

export default App;
