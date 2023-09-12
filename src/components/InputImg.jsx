import {useRef, useState} from "react";
import PintadoImg from "./PintadoImg.jsx";
import styled from "styled-components";

const InputContainer = styled.form`
  width: 90%;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > h1 {
    font-size: 3rem;
    color: #E6EFF0;
    text-align: center;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 0 auto;

    > input {
      flex: 1 1 0;
      padding: 1rem 1rem;
      font-size: 1.2rem;
      align-self: stretch;
    }

    > button {
      padding: 1rem 2rem;
      background-color: #3197CD;
      border: none;
      border-radius: .2rem;
      color: #E6EFF0;
      cursor: pointer;
      transition: background-color .3s ease-in;
      font-weight: 700;
      font-size: 1.2rem;
      text-decoration: none;
      text-align: center;

      &:hover {
        background-color: #1d5c80;
      }

      @media (min-width: 480px) {
        flex: 0 1 0;
      }
    }

    @media (min-width: 480px) {
      flex-direction: row;
    }

    @media (min-width: 889px) {
      width: 800px;
    }
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
const InputImg = () => {
    const [valorInput, setValorInput] = useState('');
    const inputRef = useRef();

    const captura = (event) => {
        setValorInput(inputRef.current.value);
        inputRef.current.value = '';
        event.preventDefault();
    }
    return (
        <div>
            <InputContainer onSubmit={captura}>
                <h1>Search images on Pixabay</h1>
                <div>
                    <input ref={inputRef} type="text"/>
                    <button>Search</button>
                </div>
            </InputContainer>
            <PintadoImg valor={valorInput}/>
        </div>
    );
}

export default InputImg;