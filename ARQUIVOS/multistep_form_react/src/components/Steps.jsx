import {AiOutLinerUser, AiOutLineStar} from "react-icons/ai";
import { FiSend } from "react-icons/fi";

import "./Steps.css";

const Steps = ({ currentStep }) => {
  return <div className="steps">
    <div className="step">
        <AiOutlinerUser />
        <p>Identificação</p>
    </div>
    <div className="step">
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