import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Articles() {
  const [articleList, setArticleList] = useState([]);
  const [loadingError, setLoadingError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setLoadingError('');
    const controller = new AbortController();

    console.log('montage du composant');

    axios
      .get('https://jsonplaceholder.typicode.com/posts', {
        signal: controller.signal,
      })
      .then((res) => {
        setArticleList(res.data);
      })
      .catch((err) => {
        console.error(err);
        if (err.message !== 'canceled')
          setLoadingError(
            `Impossible de charger la liste d'articles depuis l'API`
          );
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      console.log('demontage du composant Articles, annulation de la requête');
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>Les articles</h1>
      {isLoading && <p>Chargment en cours...</p>}
      <p style={{ color: 'red' }}>{loadingError}</p>
      <ul>
        {articleList.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </>
  );
}
