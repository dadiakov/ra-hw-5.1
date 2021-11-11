/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';

export default function InfoCard({ title, text, ...props }) {
    return (
      <div class="card">
        {props.imgsrc ? props.children : null}
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{text}</p>
          <a href="#" class="btn btn-primary">
            Посмотреть
          </a>
        </div>
      </div>
    );
  }
  
  InfoCard.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    imgsrc: PropTypes.string,
  };
  
  InfoCard.defaultProps = {
    title: 'История о котиках...',
    text: 'Тут должна быть невероятно интересная история о котиках...',
    imgsrc: '',
  };