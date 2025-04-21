import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import ProfileImage from "file:///home/kali/Desktop/Bui_Thi_Ly.jpg";

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, collapsed, onClick }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => cx("menu-item", { active: isActive })}
            onClick={onClick} // Attach the onClick handler
        >
            {icon || (
                <span className={cx("default-icon", "small-icon")}>
                    <img src={ProfileImage} alt="Default Icon" />
                </span>
            )}
            {!collapsed && (
                <span className={cx("title")}>{title}</span>
            )}
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node,
    onClick: PropTypes.func, // Add prop type for onClick
};

export default MenuItem;