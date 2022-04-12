import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ArticleDetails() {
  const { id } = useParams();
  const [articleDetails, setArticleDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setLoadingError('');
    const controller = new AbortController();

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        signal: controller.signal,
      })
      .then((res) => setArticleDetails(res.data))
      .catch((err) => {
        console.error(err);
        if (err.message === 'cancelled')
          setLoadingError(`Erreur lors du chargement de l'article`);
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [id]);

  if (isLoading || articleDetails === null)
    return <p>Chargement en cours...</p>;
  if (loadingError) return <p style={{ color: 'red' }}>{loadingError}</p>;

  return (
    <>
      <h1>{articleDetails.title}</h1>
      <p>{articleDetails.body}</p>
    </>
  );
}
