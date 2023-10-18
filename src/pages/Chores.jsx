import { Form } from "../fragments/Form";
import { Button } from "../fragments/Button";
import { Input } from "../fragments/Input";
import { BsCardChecklist } from "react-icons/bs";
import { AiOutlineClear } from "react-icons/ai";
import { useState } from "react";
import { useContext } from "react";
import { ChoreContext } from "../contexts/ChoreContext";
import { StyledMain } from "../styles/styledChores";

export const Chores = () => {
  const [chore, setChore] = useState("");
  const { chores, saveNewChore, deleteChore, completeTask, removeAllTask } =
    useContext(ChoreContext);

  function handleSaveNewChore(event) {
    event.preventDefault();
    saveNewChore(chore);
    setChore("");
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
                <input type="checkbox" onClick={() => completeTask(chore.id)} />
                <span
                  style={{
                    textDecoration: chore.completed && "line-through",
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