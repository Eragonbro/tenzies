import React from "react";


// const styleNormalButton = {
//     borderRadius: "8px",
//     border: "1px solid transparent",
//     padding: "0.6em 1.2em",
//     fontSize: "1em",
//     fontWeight: 500,
//     // backgroundColor: "#f9f9f9",
//     // color: "black", 
//     colorScheme: "light dark",
//     cursor: "pointer",
//     transition: "border-color 0.25s"
//   } 

// const styleFrozenButton = {
// borderRadius: "8px",
// border: "1px solid transparent",
// padding: "0.6em 1.2em",
// fontSize: "1em",
// fontWeight: 500,
// backgroundColor: props.isFrozen?"#9abf06":"#f9f9f9",
// color: props.isFrozen?"black":"alice",
// cursor: "pointer",
// transition: "border-color 0.25s"
// } 


export default function Button(props) {
    const styleButton = {
        borderRadius: "8px",
        border: "1px solid transparent",
        padding: "0.6em 1.2em",
        fontSize: "1em",
        fontWeight: 500,
        backgroundColor: props.isFrozen?"#9abf06":"#f9f9f9",
        color: "black",
        cursor: "pointer",
        transition: "border-color 0.25s"
        } 
    return(
        <button  
            style={styleButton}
            id= "{props.id}"
            onClick={props.onClick}

            >{props.randomNumber}</button>
    )
}