import { useEffect, useState } from 'react';
import Character from './Character';

function CharacterList({page}) {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        if (response.ok) {
          const data = await response.json();
          setCharacters(data.results);
          setLoading(false);
          setError(null);
        } else {
          setError('Error al obtener los datos.'); //No llegan los datos
        }
      } catch (error) {
        setError(error); //No se realiza la solicitud
      }
    }
    getData();
  }, [page]);

  if (error) {
    return <h4 className="text-center py-4">{error}</h4>;
  }

  return (
    <div className="container">
      {loading ? (
        <h3 className="text-center py-4">Cargando...</h3>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
