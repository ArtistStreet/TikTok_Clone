import classNames from "classnames/bind";
import styles from "./Wrapper.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function PopperWrapper({ searchInput, searchAccounts, active, setActive, setCollapsed, title, spinnerIcon, moreContent, hideHeader }) {
    const handleClose = () => {
        setActive(false); // Close the popper
        setCollapsed(false); // Expand the sidebar
    };

    return (
        <div className={cx("search-result", { active })}>
            <div className={cx("header", { hideHeader })}> {/* Updated to use hideHeader prop */}
                <div className={cx("title-wrapper")}>
                    <h2 className={cx("title")}>{title}</h2>
                    <button
                        className={cx("clear")}
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon icon={faXmark} className={cx("icon")} />
                        {spinnerIcon && <span className={cx("spinner-icon")}>{spinnerIcon}</span>}
                    </button>
                </div>
                {searchInput}
            </div>
            {moreContent}
            {searchAccounts}
        </div>
    );
}

export default PopperWrapper;