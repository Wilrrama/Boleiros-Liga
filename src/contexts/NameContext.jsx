import React, { createContext, useState, useEffect } from "react";

export const NameContext = createContext({});

export const NameProvider = ({ children }) => {
  const [nameList, setNameList] = useState([]);

  const addName = (name) => {
    setNameList([...nameList, name]);
  };

  const removeName = (NameId) => {
    const newNameList = nameList.filter((name) => name.id !== NameId);
    setNameList(newNameList);
  };

  const removeAll = () => {
    const confirmed = window.confirm("Deseja realmente limpar a lista?");
    if (confirmed) {
      setNameList([]);
    }
  };

  useEffect(() => {
    const storedList = localStorage.getItem("@nameList");
    if (storedList) {
      setNameList(JSON.parse(storedList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@nameList", JSON.stringify(nameList));
  }, [nameList]);

  return (
    <NameContext.Provider
      value={{
        nameList,
        addName,
        removeName,
        removeAll,
      }}
    >
      {children}
    </NameContext.Provider>
  );
};
