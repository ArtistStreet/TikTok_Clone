import classNames from "classnames/bind";
import styles from "./FollowingAccounts.module.scss"
import PropTypes from 'prop-types';
import ProfileImage from "file:///home/kali/Desktop/Bui_Thi_Ly.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (attrs) => (
        <div className={cx("preview")} tabIndex="-1" {...attrs}>
            <AccountPreview></AccountPreview>
        </div>
    );

    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[0, 5]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx("account-item")}>
                    <img src={ProfileImage} alt="" className={cx("avatar")}></img>
                    <div className={cx("item-info")}>
                        <p className={cx("nickname")}>
                            <span>Bui Thi Ly</span>
                            <FontAwesomeIcon className={cx("check")} icon={faCircleCheck}></FontAwesomeIcon>
                        </p>
                        <p className={cx("name")}>buithily</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;