# Instruções para GitHub Pages

## ⚠️ IMPORTANTE: Configuração de Caminhos (Paths)

Este projeto foi configurado para funcionar no GitHub Pages com o nome de repositório **`TCC`**.

Todos os caminhos para arquivos CSS, JavaScript e links de navegação foram ajustados para incluir o prefixo `/TCC/` (ex: `/TCC/styles.css`, `/TCC/plataforma/login.html`). Isso garante que os recursos sejam carregados corretamente quando o site estiver hospedado em `https://SEU_USUARIO.github.io/TCC/`.

## Se você mudar o nome do repositório

Se você decidir usar um nome de repositório diferente de `TCC`, você precisará fazer uma **busca e substituição global** em todos os arquivos HTML, CSS e JavaScript do projeto.

Procure por todas as ocorrências de `/TCC/` e substitua por `/NOME_DO_SEU_REPOSITORIO/`.

**Exemplos de arquivos a serem alterados:**
- `index.html`
- `plataforma/login.html`
- `plataforma/dashboard.html`
- `plataforma/styles.css`
- `plataforma/login.js`
- `plataforma/dashboard.js`
- `styles.css`
- `script.js`

## Credenciais de Login

As credenciais de teste estão visíveis diretamente na página de login:

- **Usuário:** admin | **Senha:** admin123
- **Usuário:** franqueado | **Senha:** franquia2024
- **Usuário:** demo | **Senha:** demo123

## Como Atualizar o Projeto no GitHub

Após fazer qualquer alteração nos arquivos:

1. Abra o terminal na pasta do projeto
2. Execute os comandos:

```bash
git add .
git commit -m "Descrição das alterações"
git push
```

3. Aguarde alguns minutos para o GitHub Pages atualizar o site.

## Testando Localmente

Para testar o site localmente (abrindo os arquivos HTML diretamente no navegador), os caminhos absolutos com `/TCC/` **não funcionarão**.

Você tem duas opções para testar localmente:

1.  **Remover temporariamente o prefixo `/TCC/`:** Faça uma busca e substituição global para remover `/TCC/` de todos os paths. Teste. Depois, adicione `/TCC/` novamente antes de fazer o push para o GitHub.

2.  **Usar um servidor web local:** Esta é a forma **recomendada**.
    *   **Com Python 3:** Abra o terminal na raiz do projeto (`pizza-cesar-completo`) e execute:
        ```bash
        python3 -m http.server 8000
        ```
    *   **Com Node.js (se tiver `http-server` instalado):**
        ```bash
        npx http-server
        ```
    Depois, acesse `http://localhost:8000/TCC/` no seu navegador (assumindo que você está servindo a pasta pai do `TCC` e o `TCC` é o nome do seu repositório).

## Suporte

Se encontrar problemas, verifique:
1. O prefixo `/TCC/` (ou o nome do seu repositório) está correto em todos os links e referências?
2. O GitHub Pages está ativado nas configurações do repositório?
3. O branch selecionado é o `main`?
4. Aguardou alguns minutos após o push para o site atualizar?

---

**Desenvolvido para o Grupo Pizza Cesar**

