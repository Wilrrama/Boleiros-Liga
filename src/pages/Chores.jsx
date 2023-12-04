import { Form } from "../fragments/Form";
import { Button } from "../fragments/Button";
import { BsCardChecklist } from "react-icons/bs";
import { AiOutlineClear } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ChoreContext } from "../contexts/ChoreContext";
import { StyledMain, BackgroundContainer } from "../styles/styledChores";

export const Chores = () => {
  const [chore, setChore] = useState("");
  const [checkboxes, setCheckboxes] = useState([]);
  const { chores, saveNewChore, deleteChore, completeTask, removeAllTask } =
    useContext(ChoreContext);

  useEffect(() => {
    const storedCheckboxes = JSON.parse(localStorage.getItem("@checkboxes"));
    if (storedCheckboxes) {
      setCheckboxes(storedCheckboxes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@checkboxes", JSON.stringify(checkboxes));
  }, [checkboxes]);

  function handleSaveNewChore(event) {
    event.preventDefault();
    const nextCheckboxKey = Object.keys(checkboxes).length + 1;
    saveNewChore(chore);
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [nextCheckboxKey]: false,
    }));
    setChore("");
  }

  function handleCheckboxChange(choreId) {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [choreId]: !prevCheckboxes[choreId],
    }));
    completeTask(choreId);
  }

  const removeAllChecks = () => {
    setCheckboxes({});
  };

  function handleClearButtonClick() {
    removeAllTask();
    removeAllChecks();
  }

  function handleClearItem(choreId) {
    const updatedCheckboxes = { ...checkboxes };
    delete updatedCheckboxes[choreId];
    localStorage.setItem("@checkboxes", JSON.stringify(updatedCheckboxes));

    setCheckboxes((prevCheckboxes) => {
      const newCheckboxes = { ...prevCheckboxes };
      delete newCheckboxes[choreId];
      return newCheckboxes;
    });

    deleteChore(choreId);
  }

  return (
    <>
      <BackgroundContainer />
      <StyledMain>
        <h2>Lista dos Itens</h2>
        <Form onSubmit={handleSaveNewChore}>
          <input
            label=""
            type="text"
            placeholder="Item ou tarefa"
            value={chore}
            onChange={(event) => setChore(event.target.value)}
          />
          <Button type="submit">
            <BsCardChecklist />
          </Button>
          <Button type="button" onClick={handleClearButtonClick}>
            <AiOutlineClear />
          </Button>
        </Form>

        <div className="chores-list">
          <ul>
            {!chores.length ? (
              <p>Lista Vazia</p>
            ) : (
              chores.map((chore) => (
                <li key={chore.id}>
                  <input
                    type="checkbox"
                    checked={checkboxes[chore.id] || false}
                    onChange={() => handleCheckboxChange(chore.id)}
                  />
                  <span
                    style={{
                      textDecoration: checkboxes[chore.id] && "line-through",
                    }}
                  >
                    {chore.task}
                  </span>
                  <button
                    onClick={() => handleClearItem(chore.id)}
                    type="button"
                  >
                    excluir
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </StyledMain>
    </>
  );
};
