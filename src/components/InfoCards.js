import InfoCard from './InfoCard';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export default function InfoCards({ data }) {
    return data.map((card) => (
      <InfoCard {...card} key={uuidv4()}>
        <img src={card.imgsrc} class="card-img-top" alt="..." />
      </InfoCard>
    ));
  }
  
  InfoCards.propTypes = {
    data: PropTypes.array,
  };
  
  InfoCards.defaultProps = {
    data: [],
  };