# Guia de Instalação e Execução do Projeto

Este guia fornece instruções passo a passo para baixar, instalar e executar este projeto em sua máquina local.

---

## **Pré-requisitos**

Antes de começar, certifique-se de que você tem os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Git](https://git-scm.com/)

---

## **Passo 1: Clonar o Repositório**

1. Abra o terminal ou prompt de comando.
2. Navegue até o diretório onde deseja clonar o projeto.
3. Execute o seguinte comando para clonar o repositório:

   ```bash
   git clone https://github.com/<seu-usuario>/<nome-do-repositorio>.git
   ```

    ubstitua `<seu-usuario>` e `<nome-do-repositorio>` pelo nome do repositório no GitHub.

4. Entre no diretório do projeto:

   ```bash
   cd <nome-do-repositorio>
   ```

---

## **Passo 2: Instalar Dependências**

1. Certifique-se de estar no diretório raiz do projeto.
2. Execute o seguinte comando para instalar as dependências:

   ```bash
   npm install
   ```

---

## **Passo 3: Executar o Projeto**

### **Executar o Servidor Local**

1. Navegue até o diretório `public`:

   ```bash
   cd public
   ```

2. Inicie um servidor local. Você pode usar o `http-server` ou o Live Server do VS Code:

   - **Usando o `http-server`**:
     Instale o `http-server` globalmente (se ainda não estiver instalado):

     ```bash
     npm install -g http-server
     ```

     Em seguida, execute:

     ```bash
     http-server
     ```

     O servidor será iniciado, e você poderá acessar o projeto em `http://127.0.0.1:8080`.

   - **Usando o Live Server do VS Code**:
     Abra o arquivo `index.html` no VS Code, clique com o botão direito e selecione **"Open with Live Server"**.

---

## **Passo 4: Executar os Testes**

1. Volte para o diretório raiz do projeto:

   ```bash
   cd ..
   ```

2. Execute os testes com o seguinte comando:

   ```bash
   npm test
   ```

---

## **Estrutura do Projeto**

Abaixo está a estrutura básica do projeto:

   ```plaintext
   <nome-do-repositorio>/
   ├── public/
   │   ├── index.html          # Página principal do projeto
   │   ├── formCreditCardBrand.js # Script para manipular o formulário
   ├── src/
   │   ├── scripts/
   │   │   ├── utils.js        # Função para validação de bandeiras de cartão
   │   ├── __tests__/
   │   │   ├── utils.test.js   # Testes unitários para a função utils.js
   ├── package.json            # Configuração do projeto e dependências
   ├── babel.config.js         # Configuração do Babel para suporte a ES6
   ```

---

## **Passo 5: Personalizar o Projeto**

- Edite os arquivos em `src/scripts` para adicionar ou modificar funcionalidades.
- Adicione novos testes em `src/__tests__` para garantir a qualidade do código.

---

## **Dúvidas ou Problemas**

Se você encontrar algum problema, abra uma [issue](https://github.com/<seu-usuario>/<nome-do-repositorio>/issues) no repositório do GitHub.

---

## **Licença**

Este projeto está licenciado sob a [MIT License](LICENSE).
