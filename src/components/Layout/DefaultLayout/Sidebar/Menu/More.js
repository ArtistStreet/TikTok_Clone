import { PopperWrapper } from "../../../../Popper";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import MoreHeader from "./MoreHeader";
import { useState } from "react";

const cx = classNames.bind(styles);

const items = [
    {
        title: "English",
        icon: <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>,
        children: {
            title: "Language",
            data: [
                {
                    code: "vi",
                    title: "Vietnam",
                },
                {
                    code: "en",
                    title: "English",
                }
            ]
        }
    },
    {
        title: "Logout",
    }
]

function More({ active, setActive, setCollapsed }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const [selectedLanguage, setSelectedLanguage] = useState("en"); // Track selected language by code

    function handleSelectLanguage(code, title) {
        setSelectedLanguage(code); // Update selected language by code
        items[0].title = title; // Update items.title to reflect the selected language
        // console.log(items[0].title)
    }

    function render() {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <li
                    key={index}
                    className={cx("more-item")}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                            // console.log(item.code);
                        } else if (item.code) {
                            handleSelectLanguage(item.code, item.title); // Handle language selection
                            // console.log(item.title);
                        }
                    }}
                >
                    <span>{item.title}</span>
                    {item.icon && ( // Ensure the icon is rendered if it exists
                        <span className={cx("more-icon")}>
                            {item.code === selectedLanguage ? (
                                <FontAwesomeIcon icon={faCheck} /> // Show check icon for selected language
                            ) : (
                                item.icon // Render the provided icon (e.g., faChevronRight)
                            )}
                        </span>
                    )}
                    {item.code && (
                        <span className={cx("more-icon")}>
                            {item.code === selectedLanguage ? (
                                <FontAwesomeIcon icon={faCheck} /> // Show check icon for selected language
                            ) : null}
                        </span>
                    )
                    }
                </li >
            );
        });
    }

    return (
        <PopperWrapper
            active={active}
            setActive={setActive}
            setCollapsed={setCollapsed}
            title={"More"}
            hideHeader={history.length > 1} // Fixed condition
            moreContent={
                <div className={cx("more-container", { active })}>
                    <ul className={cx("more-content")}>
                        {history.length > 1 && (
                            <MoreHeader
                                title={current.title || "More"}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {render()}
                    </ul>
                </div>
            }
        />
    );
}

export default More;