import { registrarVoto } from "../services/votacaoService";

const [UltimoVoto, setUltimoVoto] = useState(null);
const [votosNaSessao, setVotosNaRoca] = useState(0);

function handleVoto(participantes) {
  registrarVoto(participantes.id);

}