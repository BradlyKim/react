import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";

const TodoComponent = () => {
  const nextId = useRef(2);
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "할일",
      isDone: false,
    },
  ]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    const newArray = [...todoList, { id: nextId.current, text, idDone: false }];
    nextId.current = nextId.current + 1;
    setTodoList(newArray);
    setText("");
  };

  const handleDelete = (id) => {
    const newArray = todoList.filter((todo) => todo.id !== id);
    console.log(newArray);
    setTodoList(newArray);
  };

  const handleToggle = (e, id) => {
    const isDone = e.target.checked;
    const newArray = todoList.map((todo) =>
      todo.id === id ? { ...todo, isDone } : todo
    );
    console.log(newArray);
    setTodoList(newArray);
  };

  return (
    <Container>
      <Title>일정 관리</Title>
      <InputWrapper>
        <Input
          value={text}
          placeholder="할 일을 입력하세요"
          onChange={handleChange}
        />
        <BtnAdd onClick={handleAdd}>등록</BtnAdd>
      </InputWrapper>
      <TodoList>
        {todoList.map(({ id, text, isDone }) => (
          <TodoItem key={id} isDone={isDone}>
            <label>
              <input type="checkbox" onChange={(e) => handleToggle(e, id)} />
              <TodoContent isDone={isDone}>{text}</TodoContent>
            </label>
            <BtnDelete onClick={() => handleDelete(id)}>삭제</BtnDelete>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
};
const Container = styled.div`
  width: 600px;
  margin: 20px auto;
  border: 1px solid;
`;

const Title = styled.div`
  background: #06857e;
  color: white;
  font-size: 20px;
  font-weight: 600;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.div`
  display: flex;
  padding: 10px;
  background: black;
`;

const Input = styled.input`
  flex: 1;
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  &::placeholder {
    color: white;
  }
`;

const BtnAdd = styled.button``;

const TodoList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TodoContent = styled.span``;
const TodoItem = styled.li`
  display: flex;
  width: 580px;
  padding: 10px;
  justify-content: space-between;
  & + & {
    border-top: 1px solid #ddd;
  }

  &:nth-child(even) {
    background: gray;
    color: white;
  }

  ${({ isDone }) =>
    isDone &&
    css`
      /* background: black; */
      /* color: #fff; */
      ${TodoContent} {
        text-decoration: line-through;
      }
    `}
`;
const BtnDelete = styled.button``;

export default TodoComponent;
