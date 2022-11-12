/* 
const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1); 
*/

// JSX
/* const element = <h1 className="header">This is JSX</h1>
console.log(element); */

/*
    {
        type: "h1", 
        key: null, 
        ref: null, 
        props: {
            className: "header", 
            children: "This is JSX"
        }, 
        _owner: null, 
        _store: {}
    }
*/

//JSX
// React can render only one parent element
const page = (
    <div>
        <h1 className="header">This is JSX</h1> 
        <p>This is a paragraph</p>
    </div>
)


ReactDOM.render(
    page,
    document.getElementById("root")
);

