import {AiOutlinerUser, AiOutlineStar} from "react-icons/ai";
import { FiSend } from "react-icons/fi";

import "./Steps.css";

const Steps = ({ currentStep }) => {
  return <div className="steps">
    <div className="step active">
        <AiOutlinerUser />
        <p>Identificação</p>
    </div>
      <div className= {`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
    </div>
    <div className="step">
        <FiSend />
        <p>Envio</p>
    </div>

  </div>
   
};

export default Steps;