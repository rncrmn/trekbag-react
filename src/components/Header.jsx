import { useItemStore } from "../stores/itemsStore";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
    const items = useItemStore((state) => state.items);

    return (
        <header>
            <Logo />
            <Counter
                numberOfItemsPacked={items.filter((item) => item.packed).length}
                totalNumberofItems={items.length}
            />
        </header>
    );
}
