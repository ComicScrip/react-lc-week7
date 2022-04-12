import { Route, Routes } from 'react-router-dom';
import ArticleDetails from '../screens/ArticleDetails';
import Articles from '../screens/Articles';
import HomePage from '../screens/Home';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/articles/:id' element={<ArticleDetails />} />
      </Routes>
    </main>
  );
}
