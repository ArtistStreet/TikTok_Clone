import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";
// import ProfileImage from "file:///home/kali/Desktop/Bui_Thi_Ly.jpg";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/${data.nickname}`} className={cx("wrapper-account-item")} >
            <img className={cx("avatar")} alt={data.full_name} src={data.avatar} />
            <div className={cx("info")}>
                <h4 className={cx("name")}>{data.full_name}</h4>
                <span className={cx("username")}>{data.nickname}</span>
            </div>
        </Link >
    );
}

export default AccountItem;