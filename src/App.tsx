import "./styles/main.scss";
import { Section } from "./components/Section";

function App() {
  return (
    <>
      <header className="header">
        <h1 className="title">Inteligência Artificial para gerar CSS</h1>
      </header>
      <div className="sections">
        <Section text="Mostrar codigo gerado" />
        <Section text="Mostrar animação" />
      </div>
    </>
  );
}

export default App;
