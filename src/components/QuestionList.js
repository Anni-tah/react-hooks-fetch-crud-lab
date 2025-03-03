import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import QuestionForm from "./QuestionForm";

function QuestionList() {
  const [quests, setQuests]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then((r)=>r.json())
    .then((data)=>setQuests(data))
    .catch((error)=>console.error("Error fetching data", error))
  },[])
  function handlesDelete(id){
    const updateQuestions=quests.filter((quest)=> quest.id !== id);
    setQuests(updateQuestions);
  }

  
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{quests.map((quest)=>(
       <QuestionItem key={quest.id} question={quest} onDelete={handlesDelete} />
      
      ))}
      </ul>
    
    </section>
  );
}

export default QuestionList;
