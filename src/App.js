import './App.css';
import AddKontak from './components/AddKontak';
import ListKontak from './components/ListKontak';

function App() {

  return (
    <div className='p-10 w-screen h-screen text-center'>
      <h1 className="text-5xl text-center font-bold mt-10">Aplikasi Kontak App </h1>
      <h3 className='text-3xl text-center font-semibold mb-10'>Menggunakan Redux dan Tailwind CSS</h3>

      <AddKontak />

      <ListKontak />
    </div>
  );
}

export default App;
