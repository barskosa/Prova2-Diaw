import participantes from "./data/participantes";

function ParticipanteCard({ participantes, onVotar }) {
  const {nome, foto, naRoca} = participantes;

  return (
    <div>
      {ParticipanteCard}
      <img src={participantes.foto} alt={participantes.nome} />
      <h3>{participantes.nome}</h3>
      <p>{participantes.naRoca ? "Está na roca" : "Não está na roca"}</p>
      <button onClick={onVotar}>Votar</button>
    </div>
  );
}



export default ParticipanteCard;