import "./index.css";
import ForegroundColors from "./ForegroundColors";
import Borders from "./Borders";
export default function Lab2() {
    return(
        <div id="wd-lab2">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <h3>Styling with the STYLE attribute</h3>
            <p style={{ backgroundColor: "blue", color: "white"}}>
                Style attribute allows configuring look and feel. 
                Convenient, but bad practice. 
                Rather you should use CSS files (called index.css) and import them.
            </p>
            <div id="wd-css-id-selectors">
                <h3>Id selectors</h3>
                <p id="wd-id-selector-1">
Instead of changing the look and feel of all the elements of the same name, e.g., 
P, we can refer to a specific element by its ID
                </p>
                <p id="wd-id-selector-2">
Heres another paragraph using a different ID and a different look and feel
                </p>
            </div>
            <ForegroundColors />
            <Borders />
        </div>
    );
}