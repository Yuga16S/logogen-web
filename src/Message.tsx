
function Message() {

    // Below is not a html code inside Js rather it is JSX: JavaScript XML code, unde the hood the <h1>Hello World</h1> gets converted into a react component: refer babeljs.io/repl site 
    const name ='Yuga';
    return <h1>Hello {name}</h1>;
}

export default Message; //exporting Message as a default object for this module