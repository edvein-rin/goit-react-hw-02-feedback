import PropTypes from 'prop-types';

import styles from './styles.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={styles.options}>
    {options.map(option => {
      const label = option.charAt(0).toUpperCase() + option.slice(1);
      const handleClick = () => onLeaveFeedback(option);

      return (
        <li key={option} className={styles.option}>
          <button className={styles.button} type="button" onClick={handleClick}>
            {label}
          </button>
        </li>
      );
    })}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
