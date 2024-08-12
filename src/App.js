import React, {useState,useEffect} from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import axios from 'axios';
function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    let cancel
    setLoading(true)
    axios.get(currentPageUrl,{
      cancelToken: new axios.CancelToken(c=>cancel=c)
    })
      .then(res => {
        setLoading(false)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
        setPokemon(res.data.results.map(p => p));
      })
      .catch(error => {
        console.error('Error fetching Pokémon:', error);
      });
      return () => cancel()
  }, [currentPageUrl]); //

  function goToNextPage()
{
  setCurrentPageUrl(nextPageUrl);
}
function goToPrevPage()
{
  setCurrentPageUrl(prevPageUrl);
}
if(loading) return 'Loadin bitch ...'
  return (
    <>
    <PokemonList poke={pokemon} />
    <Pagination goToNext={nextPageUrl ? goToNextPage : null}
    goToPrev={prevPageUrl ? goToPrevPage : null}
    ></Pagination>
    
    </>
  );
}

export default App;
