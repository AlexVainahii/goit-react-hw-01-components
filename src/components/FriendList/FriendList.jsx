import PropTypes from 'prop-types';
import css from './FriendList.module.css';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map(friend => {
        return (
          <li className={css.item} key={friend.id}>
            {friend.isOnline ? (
              <span className={css.online}></span>
            ) : (
              <span className={css.offline}></span>
            )}
            <img
              className={css.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
