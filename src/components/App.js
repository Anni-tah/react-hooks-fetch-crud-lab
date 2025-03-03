import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [quests, setQuests] = useState([]);

  function handlesAddQuestion(newQuestion){
    setQuests([...quests,newQuestion]);
 
   
  

  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handlesAddQuestion} /> : <QuestionList/>}
    </main>
  );
}

export default App;
