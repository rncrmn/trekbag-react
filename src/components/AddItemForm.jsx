import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
    const [itemText, setTextItem] = useState("");
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        // basic validation
        if (!itemText) {
            alert("Item can't be empty");
            inputRef.current.focus();
            return;
        }

        onAddItem(itemText);
        setTextItem("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add an item</h2>
            <input
                ref={inputRef}
                type="text"
                value={itemText}
                onChange={(e) => setTextItem(e.target.value)}
                autoFocus={true}
            />
            <Button>Add to list</Button>
        </form>
    );
}
