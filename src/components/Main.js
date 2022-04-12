import { Route, Routes } from 'react-router-dom';
import Articles from '../screens/Articles';
import HomePage from '../screens/Home';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/articles' element={<Articles />} />
      </Routes>
    </main>
  );
}
