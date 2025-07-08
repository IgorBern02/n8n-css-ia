import "./styles/main.scss";
import { CardIA } from "./components/CardIA";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [codeResult, setCodeResult] = useState("💻Código CSS");
  const [animResult, setAnimResult] = useState("🎨Resultado");
  const [isLoading, setIsLoading] = useState(false);
  const webhook = "https://igorbern.app.n8n.cloud/webhook/animacao-css";

  const handleClick = async () => {
    setIsLoading(true); // começa o loading

    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pergunta: inputValue }),
      });

      const data = await res.json();
      const info = JSON.parse(data.resposta);

      setCodeResult(info.code);
      setAnimResult(info.preview);

      const styleTag = document.createElement("style");
      styleTag.innerHTML = info.style;
      document.head.appendChild(styleTag);
    } catch (error) {
      setCodeResult("Erro ao gerar código");
      setAnimResult("Erro ao gerar animação");
      console.error("Erro ao buscar animação:", error);
    } finally {
      setIsLoading(false); // termina o loading
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <header className="header">
        <h1 className="title">Inteligência Artificial para gerar CSS</h1>
      </header>
      <main className="main">
        <section className="section_join">
          <input
            type="text"
            className="input"
            placeholder="Digite a animação que você deseja..."
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            disabled={isLoading}
            onKeyDown={handleKeyDown}
          />
          <button className="botao" onClick={handleClick}>
            {isLoading ? "Gerando..." : "Gerar animação"}
          </button>
        </section>
        <section className="section_result">
          <CardIA text={codeResult} showCopyButton />
          <CardIA>
            {isLoading ? (
              <p>Carregando animação...</p>
            ) : (
              <p dangerouslySetInnerHTML={{ __html: animResult }} />
            )}
          </CardIA>
        </section>
      </main>
    </>
  );
}

export default App;
