import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect, forwardRef } from "react";
import AccountItem from "./AccountItem";
import { Debounce } from "../../../../../hooks";
import { PopperWrapper } from "../../../../Popper";
import axios from "axios";

const cx = classNames.bind(styles);

const SearchResult = forwardRef(({ active, setActive, setCollapsed, onTextChange }, ref) => {
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [text, setText] = useState(""); // Local state for text

    const inputRef = useRef();
    const debounce = Debounce(text, 500);

    useEffect(() => {
        if (ref) {
            ref.current = inputRef.current; // Expose inputRef to parent
        }
    }, [ref]);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        axios
            .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
                params: {
                    q: debounce,
                    type: "less",
                },
            })
            .then((res) => {
                setSearchResult(res.data.data);
            })
            .catch(() => {
                setSearchResult([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [debounce]);

    const handleClear = () => {
        setText(""); // Clear local state
        onTextChange(""); // Notify parent of cleared text
        inputRef.current.focus(); // Focus on the input field
    };

    return (
        <PopperWrapper
            active={active}
            setActive={setActive}
            setCollapsed={setCollapsed}
            title={"Search"}
            searchInput={
                <form className={cx("search-input")}>
                    <input
                        type="text"
                        placeholder="Search"
                        className={cx("input")}
                        ref={inputRef}
                        value={text}
                        onChange={(e) => {
                            const value = e.target.value;
                            setText(value); // Update local state
                            onTextChange(value); // Notify parent of text change
                        }}
                    />
                    {!!text && (
                        <button className={cx("search-clear")} onClick={handleClear}>
                            {!loading && <FontAwesomeIcon icon={faXmark} className={cx("clear-icon")} />}
                            {loading && <FontAwesomeIcon icon={faSpinner} spin className={cx("loading-icon")} />}
                        </button>
                    )}
                </form>
            }
            searchAccounts={
                <div className={cx("search")}>
                    <h4 className={cx("accounts")}>Accounts</h4>
                    {searchResult.map((result) => (
                        <AccountItem key={result.id} data={result} />
                    ))}
                </div>
            }
        />
    );
});

export default SearchResult;