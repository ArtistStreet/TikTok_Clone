import classNames from "classnames/bind";
import styles from "./FollowingAccounts.module.scss"
import PropTypes from 'prop-types';
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles)

function FollowingAccounts({label}) {
    return ( 
        <div className={cx("wrapper")}>
            <p className={cx("label")}>
                {label}
            </p>
            <div className={cx("accounts")}>
                <AccountItem />
                <AccountItem />
                <AccountItem />
            </div>

            <div className={cx("see-more")}>See all</div>
        </div>
     );
}

FollowingAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default FollowingAccounts;