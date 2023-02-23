import PropTypes from 'prop-types';
import StyledButton from './Feedback.styled';


export function FeedbackOptions ({options, onLeaveFeedback}) {
    return (
        <div>
        {options.map(option => (
<StyledButton key={option} name={option} type="button" onClick={onLeaveFeedback}>{option}</StyledButton>
        ))}
        
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
