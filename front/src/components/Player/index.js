import React from 'react';

import Card from '../../components/Card';
import Veia from "../../avatars/veia.svg";
import Gordo from "../../avatars/gordo.svg";

import './styles.css';

const avatar = type => {
    const avatars = {
      'veia': Veia,
      'gordo': Gordo
    };
    return avatars[type];
  }

  function Player(props) {
    const done =  !props.showCard && props.value >= 0 ? 'Player done' : 'Player';

    return (
      <div className={done}>
        <span className="Avatar">
          <img src={avatar(props.avatar)} alt={props.name} />
        </span>
        <p className="Name">{props.name}<small>{props.id}</small></p>
        { props.showCard ? <Card value={props.value} active={true} /> : '' }
      </div>
    );
  }

  export default Player;
