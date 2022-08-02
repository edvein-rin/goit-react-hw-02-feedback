import PropTypes from 'prop-types';

import styles from './styles.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <p className={styles.statistics}>
    Good: {good}
    <br />
    Neutral: {neutral}
    <br />
    Bad: {bad}
    <br />
    Total: {total}
    <br />
    Positive feedback: {positivePercentage.toPrecision(4)}%
  </p>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
