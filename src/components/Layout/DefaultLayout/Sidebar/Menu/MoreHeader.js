import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function MoreHeader({ title, onBack }) {

    return (
        <header className={cx("more-header")}>
            <button className={cx("back")} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </button>
            <h4 className={cx("more-title")}>
                {title}
            </h4>
        </header >
    );
}

export default MoreHeader;