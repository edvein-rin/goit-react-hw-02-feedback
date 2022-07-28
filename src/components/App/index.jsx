import { Component } from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions';
import { Notification } from 'components/Notification';
import { Statistics } from 'components/Statistics';

import styles from './styles.module.css';
import { Section } from 'components/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static feedbackOptions = ['good', 'neutral', 'bad'];

  onLeaveFeedback = option => {
    this.setState(oldState => ({
      [option]: oldState[option] + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    (this.state.good * 100) / this.countTotalFeedback();

  render() {
    const totalFeedback = this.countTotalFeedback();
    const hasAtLeastOneReview = !!totalFeedback;
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <main className={styles.root}>
        <Section title="Please leave a review">
          <FeedbackOptions
            options={this.constructor.feedbackOptions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {hasAtLeastOneReview ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </main>
    );
  }
}
