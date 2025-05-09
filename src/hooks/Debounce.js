import { useEffect, useState } from "react";

function Debounce(value, delay) {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebounce(value), delay);
        return () => clearTimeout(handler)
    }, [value])
    return debounce;
}

export default Debounce;