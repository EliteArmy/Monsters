import './card-list.styles.css';
import { Card } from '../card/card.component';

// children is null if nothing is passed in between brackets
export const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
