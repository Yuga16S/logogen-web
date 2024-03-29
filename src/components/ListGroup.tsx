import { useState } from "react";


interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void; // this function takes in a parameter(items) of type string and returns nothing(void)
}

function ListGroup({items, heading, onSelectItem} : Props) {
   
    //Below is a state Hook is a function that allows us to tap into built in features in React. 
    //This state hook tells react that this component(ListGroup) has data or state that will change over time.
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        //from below it is JSX code, we cannot add JS code here like the above in between the JSX code, instead use {} to render the data.
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item Found</p>}
            <ul className="list-group">
                {items.map((item, index) => <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} onClick={() => {setSelectedIndex(index); onSelectItem(item);}}>{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;