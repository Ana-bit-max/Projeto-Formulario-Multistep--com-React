// Componentes
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import {FiSend} from 'react-icons/fi';
import UserForm from './components/UserForm';
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';
import Steps from './components/Steps';

// Hooks
import { useForm } from "./hooks/userForm";
import { useState } from 'react';


import './App.css';

const formTemplates = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

import React from "react";
import { GrFormNext } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

import { useForm } from "./useForm";
import UserForm from "./UserForm";
import ReviewForm from "./ReviewForm";
import Thanks from "./Thanks";

function App() {
  const [data, setData] = useState(formTemplates);

  const updateFielHandler = (key, value) => {
    setData ((prev) => {
      return {
        ...prev,
        [key]: value };
    });
  };
   

  const formComponents = [
  <UserForm data={data} updateFielHandler={updateFielHandler} />,
   <ReviewForm data={data} updateFielHandler={updateFielHandler} />,
   <Thanks data={data} />,
  ];

  const {
    currentStep,
    currentComponent,
    changeStep,
    isLastStep,
    firstStep, // Corrigido
  } = useForm(formComponents);

  return (
    <div className="App">
      <div className="header">
        <h2>Deixe a sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto.
        </p>
      </div>

      <div className="form-container">
       <Steps currentStep={currentStep} />
       <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>

          <div className="actions">
            {!firstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <span>Voltar</span>
              </button>
            )}

            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
