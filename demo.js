import React from "react";
import ReactDOM from "react-dom/client";
function Greeting2() {
    return <h1>My second Component</h1>;
}
const abcd2=ReactDOM.createRoot(document.getElementById("abcd2"));
abcd2.render(<Greeting2/>);
export default Greeting2;