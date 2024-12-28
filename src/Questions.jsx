/* eslint-disable react/prop-types */
import AlternativeQuestion from "./AlternativeQuestion"


const Questions = ({questions, activeId, toggleQuestion}) => {
  console.log(questions);
  
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) =>{
       return <AlternativeQuestion  key={question.id} {...question}
       activeId={activeId} toggleQuestion={toggleQuestion}/>
      })}
    </section>
    
  )
}
export default Questions