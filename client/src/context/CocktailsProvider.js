import React, { useContext, useState } from 'react';

const CocktailContext = React.createContext();

export function useCocktail() {
  return useContext(CocktailContext);
}

export function CocktailsProvider({ children }) {
  //login 
  const [logged, setLogged] = useState({
    nickname: '',
    type: '',
  });

  return (
    <CocktailContext.Provider
      value={{
        logged,
        setLogged,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
}
