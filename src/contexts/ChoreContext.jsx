import { useState, useEffect } from "react";

import { createContext } from "react";

export const ChoreContext = createContext({});

export const ChoreProvider = ({ children }) => {
  const [chores, setChores] = useState([]);

  function saveNewChore(task) {
    if (!task) return;

    const newChore = {
      id: chores.length + 1,
      task: task,
      completed: false,
    };

    setChores((oldChores) => [...oldChores, newChore]);
  }

  function deleteChore(id) {
    const filteredChores = chores.filter((chore) => chore.id !== id);
    setChores(filteredChores);
  }

  function completeTask(id) {
    const updatedChores = chores.map((chore) =>
      chore.id === id ? { ...chore, completed: !chore.completed } : chore
    );
    setChores(updatedChores);

    localStorage.setItem("@choreList", JSON.stringify(updatedChores));
    if (updatedChores.length === 0) {
      setCheckboxes({});
    }
  }

  const removeAllTask = () => {
    const confirmed = window.confirm("Deseja realmente limpar a lista?");
    if (confirmed) {
      setChores([]);
    }
  };

  useEffect(() => {
    const choreList = localStorage.getItem("@choreList");
    if (choreList) {
      setChores(JSON.parse(choreList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@choreList", JSON.stringify(chores));
  }, [chores]);

  return (
    <ChoreContext.Provider
      value={{ chores, saveNewChore, deleteChore, completeTask, removeAllTask }}
    >
      {children}
    </ChoreContext.Provider>
  );
};
