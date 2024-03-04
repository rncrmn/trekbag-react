export default function Counter({ numberOfItemsPacked, totalNumberofItems }) {
    return (
        <p>
            <b>{numberOfItemsPacked}</b> / {totalNumberofItems} items packed
        </p>
    );
}
