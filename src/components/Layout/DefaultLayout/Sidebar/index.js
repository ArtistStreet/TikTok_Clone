import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss"
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faHome, faCompass, faUser, faUpload, faBroadcastTower, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import Menu, { MenuItem } from "../Sidebar/Menu"
import config from "../../../config";
import FollowingAccounts from "../Sidebar/followingAccounts";
import SearchResult from "./Menu/SearchResult";
import More from "./Menu/More";
import Logo from "./Menu/Logo";

const cx = classNames.bind(styles)

function Sidebar({ isSearchActive, setIsSearchActive, isMoreActive, setIsMoreActive }) {
    const [text, setText] = useState(""); // State to hold text from SearchResult
    const [isCollapsed, setIsCollapsed] = useState(false);

    const inputRef = useRef();

    return (
        <div style={{ width: "inherit" }}>
            <aside className={cx("wrapper", { active: isSearchActive || isMoreActive })}>
                <div className={cx("header")}>
                    <a href="/">
                        <Logo></Logo>
                    </a>

                    <button
                        className={cx("search", { active: isSearchActive })}
                        onClick={() => {
                            const next = !isSearchActive;
                            setIsSearchActive(next); // Activate Search
                            setIsMoreActive(false); // Deactivate More
                            setIsCollapsed(next); // Toggle Sidebar collapse based on Search state
                            if (next) inputRef.current?.focus(); // Focus on input
                        }}
                    >
                        <div className={cx("search-container")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx("glass")} />
                            <div className={cx("search-name")}>
                                {text ? <span style={{ color: "white" }}>{text}</span> : "Search"} {/* Display text or default "Search" */}
                            </div>
                        </div>
                    </button>
                </div>

                <div className={cx("body")}>
                    <Menu>
                        <MenuItem
                            title="For You"
                            to={config.routes.home}
                            icon={<FontAwesomeIcon icon={faHome} className={cx("Icon")} />}
                            collapsed={isCollapsed}
                            onClick={() => {
                                setIsSearchActive(false);
                                setIsMoreActive(false);
                                setIsCollapsed(false); // Collapse the search result
                            }}
                        />
                        <MenuItem
                            title="Explore"
                            to={config.routes.explore}
                            icon={<FontAwesomeIcon icon={faCompass} className={cx("Icon")} />}
                            collapsed={isCollapsed}
                            onClick={() => {
                                setIsSearchActive(false);
                                setIsMoreActive(false);
                                setIsCollapsed(false);
                            }}
                        />
                        <MenuItem
                            title="Following"
                            to={config.routes.following}
                            icon={<FontAwesomeIcon icon={faUser} className={cx("Icon")} />}
                            collapsed={isCollapsed}
                            onClick={() => {
                                setIsSearchActive(false);
                                setIsMoreActive(false);
                                setIsCollapsed(false);
                            }}
                        />
                        <MenuItem
                            title="Upload"
                            to={config.routes.upload}
                            icon={<FontAwesomeIcon icon={faUpload} className={cx("Icon")} />}
                            collapsed={isCollapsed}
                            onClick={() => {
                                setIsSearchActive(false);
                                setIsMoreActive(false);
                                setIsCollapsed(false);
                            }}
                        />
                        <MenuItem
                            title="LIVE"
                            to={config.routes.live}
                            icon={<FontAwesomeIcon icon={faBroadcastTower} className={cx("Icon")} />}
                            collapsed={isCollapsed}
                            onClick={() => {
                                setIsSearchActive(false);
                                setIsMoreActive(false);
                                setIsCollapsed(false);
                            }}
                        />
                        <MenuItem
                            title="Profile"
                            to={config.routes.profile}
                            collapsed={isCollapsed}
                            onClick={() => {
                                setIsSearchActive(false);
                                setIsMoreActive(false);
                                setIsCollapsed(false);
                            }}
                        />
                        <button
                            className={cx("more", { active: isMoreActive })}
                            onClick={() => {
                                const next = !isMoreActive;
                                setIsMoreActive(next); // Activate More
                                setIsSearchActive(false); // Deactivate Search
                                setIsCollapsed(next); // Toggle Sidebar collapse based on More state
                            }}
                        >
                            <FontAwesomeIcon icon={faEllipsisH} className={cx("more-icon")} />
                            <span className={cx({ hidden: isMoreActive || isSearchActive })}>More
                            </span>
                        </button>
                    </Menu>

                    <div className={cx("btn", { hidden: isSearchActive || isMoreActive })}>
                        <button className={cx("btn-login")}>Log in</button>
                    </div>

                    <div className={cx("following-accounts", { hidden: isSearchActive || isMoreActive })}>
                        <FollowingAccounts label="Suggest accounts" />
                    </div>

                    <div className={cx("footer", { hidden: isSearchActive || isMoreActive })}></div>
                </div>
            </aside >

            <More
                active={isMoreActive}
                setActive={(value) => {
                    setIsMoreActive(value);
                    if (!value) setIsCollapsed(false); // Expand Sidebar when More is closed
                }}
                setCollapsed={setIsCollapsed}
            />
            <SearchResult
                active={isSearchActive}
                setActive={(value) => {
                    setIsSearchActive(value);
                    if (!value) setIsCollapsed(false); // Expand Sidebar when Search is closed
                }}
                setCollapsed={setIsCollapsed}
                onTextChange={setText}
                ref={inputRef}
            />
        </div >
    );
}

export default Sidebar;