import participantes from "./data/participantes.js";
import Header from "./components/Header";
import ParticipanteCard from "./components/ParticipanteCard";
import Home from "./pages/Home";
import Votacao from "./pages/Votacao";
import funcoes from "./services/votacaoService.js";

    return (
    <main>
      <Header activePage={activePage} onNavigate={navigate} />
      <Home activePage={activePage} onNavigate={navigate} />
      <h1>participantes</h1>
      <label>
        Buscar por nome
        <input value={busca} onChange={(event) => setBusca(event.target.value)} />
      </label>
          {dados.categorias.map((participantes) => (
            <option key={participantes.id} value={participantes.id}>{participantes.nome}</option>
          ))}
      <p>{visiveis.length} resultados</p>
      {visiveis.length === 0 && <p>Nenhum participantes encontrado.</p>}
      <ul>
        <participantesCard participantes={participantes} onVotar={() => handleVoto(participantes)} />
        {visiveis.map((participantes) => (
          <li key={participantes.id}>
            <strong>{participantes.nome}</strong> {participantes.id.toFixed(2)}
            <button onClick={() => setparticipantes(participantes)}>Ver detalhes</button>
          </li>
        ))}
      </ul>
      {participantes && (
        <section aria-label="Detalhes do participante">
          <h2>{participantes.nome}</h2>
          <p>{participantes.votos}</p>
          <button onClick={() => setparticipantes(null)}>Fechar detalhes</button>
        </section>
      )}
    </main>
  );



export default ParticipanteCard;