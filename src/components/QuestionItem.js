import React, { useState } from "react";

function QuestionItem({ question, onDelete }) {
  const { id, prompt, answers, correctIndex } = question;
  const [selected, setSelected]=useState(correctIndex)

  function deleteQuestion(){
    console.log("Deleting question with ID:", id);
    fetch(`http://localhost:4000/questions/${id}`,{
      method:"DELETE"
    })
    .then((r)=>r.json())
    .then((data)=>onDelete(id))
    .catch((error)=>console.error("Error deleleting data", error))
  }

  function updateQuestion(newCorrectIndex){
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({ correctIndex: newCorrectIndex })
    })
    .then((r)=>r.json())
    .then((updateQuestion)=>setSelected(updateQuestion.correctIndex))
    .catch((error)=>console.error("Error updating question",error))

  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e)=>{
          setSelected(e.target.value)
          updateQuestion(selected)
        }}
          >{options}</select>
      </label>
      <button onClick={deleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
