import React, { useState } from "react";
import json from "../data.json";
const App = () => {
  const [data, setData] = useState(json);
  const [openId, setOpenId] = useState(null);

  const openAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <h2>Accordion Component</h2>
      <div>
        {data.map((each) => (
          <div key={each.id} className="container">
            <div className="question-container">
              <span className="accordian-question">{each.question}</span>{" "}
              <button
                onClick={() => {
                  openAccordion(each.id);
                }}
                className="accordian-openansweroption"
              >
                {openId === each.id ? "−" : "+"}
              </button>
            </div>
            {openId === each.id && (
              <span className="accordion-answer">{each.answer}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
