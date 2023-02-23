import PropTypes from 'prop-types';
import StyledSection from './Section.styled';

export function Section({ title, children }) {
  return (
    <StyledSection>
      <h2>{title}</h2>
      <div>{children}</div>
    </StyledSection>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
