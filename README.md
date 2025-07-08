# 🎨 n8n-css-ia

Projeto web que utiliza Inteligência Artificial e o serviço n8n para **gerar animações CSS automaticamente**, com uma interface simples, responsiva e moderna.

---

## 🚀 Sobre o Projeto

Esta aplicação permite ao usuário descrever uma animação em linguagem natural (ex: "criar uma animação de botão pulsante") e receber como resposta:

- ✅ O código CSS da animação
- ✅ Um preview da animação
- ✅ Um botão para copiar o código gerado

O projeto é conectado a um **webhook do n8n**, que processa a solicitação usando uma IA (como OpenAI ou outra integrada via n8n) e retorna os dados prontos para o front-end.

---

## 🛠 Tecnologias Utilizadas

- ⚛️ **React** — Biblioteca para construção da interface
- 🎨 **Sass (SCSS)** — Estilização customizada com variáveis e mixins
- 🌐 **n8n** — Plataforma de automação responsável por gerar as animações com IA
- 📦 **Vite** — Empacotador rápido para desenvolvimento moderno
- 💡 **React Icons** — Para ícones de copiar/copiado

---

## ⚙️ Como Rodar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/IgorBern02/n8n-css-ia.git
````
2. Instale as dependências:
```bash
npm install
```

3. Inicie o projeto:
```bash
npm run dev
```

4.Acesse no navegador:
```bash
[npm install](http://localhost:5173)
```


Webhook (n8n)
O projeto está conectado ao webhook:

```bash
https://igorbern.app.n8n.cloud/webhook/animacao-css
```

Esse endpoint espera uma requisição POST com o seguinte formato:

```bash
{
  "pergunta": "Descreva aqui a animação desejada"
}

```
O retorno é um JSON com:

-resposta.code: código CSS da animação
-resposta.preview: HTML da animação
-resposta.style: estilos adicionais (injetados dinamicamente)

✨ Funcionalidades
-Campo de input com suporte ao botão Enter
-Botão de "Gerar animação"
-Feedback de carregamento com loading...
-Card escuro para o código e claro para o preview
-Botão de copiar com ícone animado
-Estilo responsivo com breakpoints Sass

👨‍💻 Autor
Desenvolvido por Igor Bernardes 💻

