import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { avatar, name, isOnlane } }) => {
    return (
        <div>
            <span className={isOnlane}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </div>
    )

};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired,
};