import React from "react";
export {Correct, Incorrect, ShowAnswers};
function Correct(){
    return (      
    <div>
    <h1>Bible Quiz</h1>
    <h3>The Bible consists of the Old and New Testaments</h3>
    <h3>Moses led the Israelites out of Egypt</h3>
    <h3>The sermon on the Mount is found in the book of Luke</h3>
    </div>
    )
}
function Incorrect(){
    return (
        <div>
        <h1>Bible Quiz</h1>
        <h3>The Bible consists of the Old and New Testaments</h3>
        <p className="green">Correct!</p>
        <h3>Moses led the Israelites out of Egypt</h3>
        <p className="green">Correct!</p>
        <h3>The sermon on the Mount is found in the book of Luke</h3>
        <p className="red"> Incorrect!</p>
        </div>
    )
}

function ShowAnswers(props){
    const istrue = props.istrue;
    if(istrue){
    return(
    <Correct/>
    );
    }
    return(
    <Incorrect/>
    );
    }
export default function BibleQuiz(){
    return(
        <div>
            <ShowAnswers istrue={true}/>
        </div>
    )
};
