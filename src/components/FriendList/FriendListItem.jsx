import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendListItem.module.css';
export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={css.item}>
      <span className={clsx(isOnline ? css.online : css.offline)}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
