import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss"
import ProfileImage from "file:///home/kali/Desktop/Bui_Thi_Ly.jpg";

const cx = classNames.bind(styles);

function AccountPreview() {
    return (  
        <div className={cx("wrapper")}>
            <header className={cx("header")}>
                <img src={ProfileImage} alt="" className={cx("avatar")}></img>
                <button></button>
            </header>
            <div className={cx("info")}>
                <p className={cx("nickname")}>Bui Thi Ly</p>
                <p className={cx("name")}>Bui Thi Ly</p>
                <p className={cx("anal")}>
                    <strong className={cx("bold")}>2M </strong> Followers
                    <strong className={cx("bold")}> 2M </strong> Following
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;