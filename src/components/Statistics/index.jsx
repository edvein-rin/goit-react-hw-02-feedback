import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

export class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
    const formattedPositivePercentage =
      this.props.positivePercentage.toPrecision(4);

    return (
      <p className={styles.statistics}>
        Good: {this.props.good}
        <br />
        Neutral: {this.props.neutral}
        <br />
        Bad: {this.props.bad}
        <br />
        Total: {this.props.total}
        <br />
        Positive feedback: {formattedPositivePercentage}%
      </p>
    );
  }
}
