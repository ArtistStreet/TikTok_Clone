import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss"
import { useState } from "react";

import classNames from "classnames/bind";
const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isMoreActive, setIsMoreActive] = useState(false);
    // const [isActive, setIsActive] = useState(false);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container", { active: isMoreActive || isSearchActive })}>
                <Sidebar
                    isSearchActive={isSearchActive}
                    setIsSearchActive={setIsSearchActive}
                    isMoreActive={isMoreActive}
                    setIsMoreActive={setIsMoreActive}
                />
            </div>
            <div className={cx("content")}>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;