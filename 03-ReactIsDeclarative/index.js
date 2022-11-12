/**
 * 
 * Challenge - recreate the above line of code in vanilla JS by creating and 
 * appending an h1 to our div#root (without using inner HTML)
 * Create a new h1 element
 * Give it some textContext
 * Give it a class name of "header"
 * Append it as a child of the div#root

const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1);
*/

ReactDom.render(<h1 className="header">Hello, React!</h1>, document.getElementById("root"));