import React, { useContext, useState } from 'react';

const CocktailContext = React.createContext();

export function useCocktail() {
  return useContext(CocktailContext);
}

export function CocktailsProvider({ children }) {
  const [loginInfo, setLoginInfo] = useState({
    name: '',
    password: '',
  });

  const [logged, setLogged] = useState({
    nickname: '',
    type: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (loginInfo.password === 'admin' && loginInfo.name === 'admin') {
      setLogged({
        nickname: loginInfo.name,
        type: 'admin',
      });
      setLoginInfo({
        name: '',
        password: '',
      });
    } else {
      setLogged({
        nickname: loginInfo.name,
        type: 'user',
      });
      setLoginInfo({
        name: '',
        password: '',
      });
    }
  }

  return (
    <CocktailContext.Provider
      value={{
        loginInfo,
        handleChange,
        handleSubmit,
        logged,
        setLogged,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
}
