# Instruções para GitHub Pages

## ✅ IMPORTANTE: Caminhos Relativos

Este projeto foi configurado para funcionar **tanto localmente quanto no GitHub Pages** usando **caminhos relativos puros**.

Todos os caminhos para arquivos CSS, JavaScript e links de navegação foram ajustados para serem relativos à localização do arquivo HTML atual (ex: `href="styles.css"`, `href="plataforma/login.html"`). Isso garante que os recursos sejam carregados corretamente independentemente do nome do repositório ou da estrutura de hospedagem.

## Vantagens desta Abordagem

- ✅ **Funciona em qualquer nome de repositório** (não precisa ser `TCC`)
- ✅ **Funciona localmente** (abrindo os arquivos HTML diretamente no navegador)
- ✅ **Funciona no GitHub Pages** (independentemente do nome do repositório)
- ✅ **Funciona em domínios personalizados** (se você configurar um domínio próprio)

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

Para testar o site localmente, você pode simplesmente **abrir o arquivo `index.html` diretamente no seu navegador**. Os caminhos relativos garantem que tudo funcione corretamente.

Alternativamente, você pode usar um servidor web local para uma experiência mais próxima do ambiente de produção:

*   **Com Python 3:** Abra o terminal na raiz do projeto e execute:
    ```bash
    python3 -m http.server 8000
    ```
    Depois, acesse `http://localhost:8000/` no seu navegador.

*   **Com Node.js (se tiver `http-server` instalado):**
    ```bash
    npx http-server
    ```

## Estrutura de Arquivos

```
pizza-cesar-completo/
├── index.html              # Página principal do site de franquia
├── styles.css              # Estilos APENAS para o site de franquia
├── script.js               # Scripts APENAS para o site de franquia
│
└── plataforma/             # Subpasta da plataforma de franqueados
    ├── login.html          # Página de login
    ├── dashboard.html      # Dashboard da plataforma
    ├── styles.css          # Estilos APENAS para a plataforma
    ├── login.js            # Scripts para login
    ├── dashboard.js        # Scripts para dashboard
    └── CREDENCIAIS.txt     # Credenciais de teste
```

## Suporte

Se encontrar problemas, verifique:
1. A estrutura de pastas está correta (conforme acima)?
2. Os nomes dos arquivos estão corretos (em letras minúsculas)?
3. O GitHub Pages está ativado nas configurações do repositório?
4. O branch selecionado é o `main`?
5. Aguardou alguns minutos após o push para o site atualizar?

---

**Desenvolvido para o Grupo Pizza Cesar**

