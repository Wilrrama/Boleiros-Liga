import React, { useContext, useState } from "react";
import { GiSoccerBall } from "react-icons/gi";
import { AiOutlineClear } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { NameContext } from "../contexts/NameContext";
import { Input } from "../fragments/Input";
import { Form } from "../fragments/Form";
import { Button } from "../fragments/Button";
import { StyledMain, BackgroundContainer } from "../styles/styledPeople";

export const People = () => {
  const [valueName, setValueName] = useState("");
  const { nameList, addName, removeName, removeAll } = useContext(NameContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newName = { id: uuidv4(), text: valueName };
    addName(newName);
    setValueName("");
  };

  return (
    <>
      <BackgroundContainer />
      <StyledMain>
        <h1>Lista dos Boleiros</h1>

        <Form onSubmit={handleSubmit}>
          <Input
            label=""
            type="text"
            placeholder="Digite o nome"
            id="nome"
            value={valueName}
            setValueName={setValueName}
          />
          <Button type="submit">
            <GiSoccerBall />
          </Button>
          <Button type="button" onClick={removeAll}>
            <AiOutlineClear />
          </Button>
        </Form>

        {nameList && nameList.length > 0 ? (
          <ol>
            {nameList.map((name) => (
              <li key={name.id}>
                <span>{name.text}</span>
                <Button onClick={() => removeName(name.id)} name="Remover" />
              </li>
            ))}
          </ol>
        ) : (
          <p> Nenhum boleiro na lista</p>
        )}
      </StyledMain>
    </>
  );
};
