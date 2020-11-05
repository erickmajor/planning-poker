import Player from '../../components/Player';
import socket from '../../services/socket';

import './styles.css';

function Players(props) {

  const players = props.players;
  const showCard = !players.filter(player => player.value < 0).length;
  const opponents = players.filter(player => player.id !== socket.id);

  return (
    <div className="Players">
      { opponents.map(player =>
        <Player key={player.id} id={player.id} avatar={player.avatar} value={player.value} name={player.name} showCard={showCard} />
      )}
    </div>
  );
}

export default Players;
