import { Form } from "../fragments/Form";
import { Button } from "../fragments/Button";
import { Input } from "../fragments/Input";
import { BsCardChecklist } from "react-icons/bs";
import { AiOutlineClear } from "react-icons/ai";
import { useState, useEffect } from "react"; // Import useEffect and useState
import { useContext } from "react";
import { ChoreContext } from "../contexts/ChoreContext";
import { StyledMain } from "../styles/styledChores";

export const Chores = () => {
  const [chore, setChore] = useState("");
  const { chores, saveNewChore, deleteChore, completeTask, removeAllTask } =
    useContext(ChoreContext);

  const [checkboxes, setCheckboxes] = useState({}); // State to store checkbox values

  // Load checkbox values from local storage on component mount
  useEffect(() => {
    const storedCheckboxes = JSON.parse(localStorage.getItem("checkboxes"));
    if (storedCheckboxes) {
      setCheckboxes(storedCheckboxes);
    }
  }, []);

  // Save checkbox values to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("checkboxes", JSON.stringify(checkboxes));
  }, [checkboxes]);

  function handleSaveNewChore(event) {
    event.preventDefault();
    saveNewChore(chore);
    setChore("");
  }

  function handleCheckboxChange(choreId) {
    // Toggle the checkbox value in the state
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [choreId]: !prevCheckboxes[choreId],
    }));

    // Call the completeTask function to update the completion status
    completeTask(choreId);
  }

  return (
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
        <Button type="button" onClick={removeAllTask}>
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
                  checked={checkboxes[chore.id] || false} // Set the checkbox state
                  onChange={() => handleCheckboxChange(chore.id)}
                />
                <span
                  style={{
                    textDecoration: checkboxes[chore.id] && "line-through",
                  }}
                >
                  {chore.task}
                </span>
                <button onClick={() => deleteChore(chore.id)} type="button">
                  excluir
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </StyledMain>
  );
};
