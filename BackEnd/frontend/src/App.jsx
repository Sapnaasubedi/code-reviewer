import prism from "prismjs";
import "prismjs/themes/prism.css";
import {  useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import axios from "axios";
import MarkDown from "react-markdown";

import './App.css'

function App() {
const [code, setCode] = useState(``);
const [review, setReview] = useState();

  useEffect(()=> {
    prism.highlightAll()
  },[])

  async function reviewCode(){
const response = axios.post('http://localhost:3000/ai/get-review', {code})
setReview((await response).data)  }


  return (
    <>
     <main>
      <div className="left">
         <div className="code">
          <Editor value={code}
          onValueChange={code => setCode(code)}
          highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
          padding={10}
          style={{
            fontFamily: `"Fira code", "Fira Mono", monospace`,
            fontSize:"16px",
            border:"1px solid #ddd",
            borderRadius:"5px",
            height:"100%",
            width: "100%",

          }}>

          </Editor>
        
            </div> 
      <div onClick={reviewCode}  className="review">Review</div>
      </div>
      <div  className="right">
<MarkDown>{review}</MarkDown>      </div>
     </main>
    </>
  )
}

export default App
