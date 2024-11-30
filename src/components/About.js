 import React from'react'

export default function About(props) {
    //  const [myStyle,setMyStyle] =useState( {color:'black',
    //      background:'white'})

    //  const [btntext,setBtnText]=useState("Enable Light Mode")
    let myStyle={
      color:props.mode==='dark'?'white':'grey',
      backgroundColor:props.mode==='dark'?'grey':'white',
      border:'2px soild ',
     borderColor: props.mode==='dark'?'white':'grey'
    }


//  const toggleStyle =()=>
// {
    // if(myStyle.color==='black'){
    //     setMyStyle({
    //         color:'white',
    //     background:'black'
    //     } )
    //     setBtnText("Enable Dark Mode")
    // }
    // else{
    //     setMyStyle({
    //         color:'black',
    //     background:'white'
    //     } )
    //     setBtnText("Enable Light Mode")
    // }
// }

  return (
    <div className="container">
        <h1 className="my-3"style={{color:props.mode==='dark'?'white':'grey'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    <strong>  Analyze your text</strong>  
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show"  aria-labelledby="headingOne"data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      App might offer additional analysis, such as counting the occurrence of specific characters, letters, or digits, which can be useful for text frequency analysis.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>  Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse"  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Each of these tools offers free text editing and manipulation options, and they are accessible without registration in most cases. Let me know if you need help with any specific one!
     
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     <strong>   browser compatiable</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse"aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
     Works on all major browsers and offers functions like case conversion, whitespace removal, text reversal, and more. 
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
