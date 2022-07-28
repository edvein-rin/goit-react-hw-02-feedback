import PropTypes from 'prop-types';

import styles from './styles.module.css';

export const Section = ({ title, children }) => (
  <section aria-label={title}>
    <h1 className={styles.title}>{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};
