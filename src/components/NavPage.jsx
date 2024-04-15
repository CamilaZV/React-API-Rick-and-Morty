import { useState } from 'react';
import CharacterList from './CharacterList';
import Header from './Header';

function NavPage() {
  const [numPage, setNumPage] = useState(1);

  return (
    <div>
      <Header numPage={numPage} setNumPage={setNumPage} />
      <CharacterList page={numPage} />
      <Header numPage={numPage} setNumPage={setNumPage} />
    </div>
  );
}

export default NavPage;
