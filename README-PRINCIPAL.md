# Projeto Completo Pizza Cesar

Este projeto contém dois sistemas integrados:

1. **Site de Franquia** (Página principal)
2. **Plataforma de Franqueados** (Sistema de login e dashboard)

## Estrutura do Projeto

```
pizza-cesar-completo/
├── index.html              # Página principal do site de franquia
├── styles.css              # Estilos APENAS para o site de franquia
├── script.js               # Scripts APENAS para o site de franquia
├── README.md               # Documentação do site de franquia
├── README-PRINCIPAL.md     # Este arquivo (documentação geral)
│
└── plataforma/             # Subpasta da plataforma de franqueados
    ├── login.html          # Página de login
    ├── dashboard.html      # Dashboard da plataforma
    ├── styles.css          # Estilos APENAS para a plataforma
    ├── login.js            # Scripts para login
    ├── dashboard.js        # Scripts para dashboard
    └── README.md           # Documentação da plataforma
```

## Como os Arquivos Estão Organizados

### ✅ Separação Correta de Estilos

- **`/styles.css`** - Contém APENAS os estilos do site de franquia (index.html)
- **`/plataforma/styles.css`** - Contém APENAS os estilos da plataforma de franqueados (login e dashboard)

Cada arquivo HTML referencia seu próprio arquivo CSS, então **não há conflito** entre os estilos.

### ✅ Separação Correta de Scripts

- **`/script.js`** - Scripts do site de franquia
- **`/plataforma/login.js`** - Scripts da página de login
- **`/plataforma/dashboard.js`** - Scripts do dashboard

## Como Usar

### 1. Abrir o Site de Franquia

Abra o arquivo `index.html` na raiz do projeto no seu navegador. Este é o site principal de captação de franqueados.

No cabeçalho, você verá dois botões:
- **SEJA UM FRANQUEADO** - Leva ao formulário de interesse
- **LOGIN FRANQUEADO** - Leva à plataforma de franqueados (login)

### 2. Acessar a Plataforma de Franqueados

Clique no botão "LOGIN FRANQUEADO" ou abra diretamente o arquivo `plataforma/login.html`.

**Credenciais de teste:**
- Usuário: `admin` / Senha: `admin123`
- Usuário: `franqueado` / Senha: `franquia2024`
- Usuário: `demo` / Senha: `demo123`

Após o login, você será redirecionado para o dashboard da plataforma.

## Personalização

### Site de Franquia

Para personalizar o site de franquia, edite:
- **`index.html`** - Estrutura e conteúdo
- **`styles.css`** (na raiz) - Estilos visuais
- **`script.js`** - Funcionalidades

### Plataforma de Franqueados

Para personalizar a plataforma, edite os arquivos dentro da pasta `plataforma/`:
- **`login.html`** e **`dashboard.html`** - Estrutura
- **`styles.css`** (dentro de plataforma/) - Estilos
- **`login.js`** e **`dashboard.js`** - Funcionalidades

### Configurar Links do Google Drive

Edite o arquivo `plataforma/dashboard.js` e localize a variável `DRIVE_LINKS`:

```javascript
const DRIVE_LINKS = {
    templates: 'https://drive.google.com/drive/folders/SEU_ID_PASTA_TEMPLATES',
    brandbook: 'https://drive.google.com/file/d/SEU_ID_ARQUIVO_BRANDBOOK/view',
    videos: 'https://drive.google.com/drive/folders/SEU_ID_PASTA_VIDEOS',
    kits: 'https://drive.google.com/drive/folders/SEU_ID_PASTA_KITS',
    orientacoes: 'https://drive.google.com/drive/folders/SEU_ID_PASTA_ORIENTACOES'
};
```

Substitua os IDs pelos IDs reais das suas pastas/arquivos no Google Drive.

## Cores Utilizadas

### Site de Franquia
- Vermelho principal: `#E31E24`
- Amarelo/Dourado: `#FFB81C`
- Verde escuro: `#2d5016`

### Plataforma de Franqueados
- Vermelho principal: `#E31E24`
- Amarelo/Dourado: `#FFB81C`
- Preto: `#1a1a1a`
- Cinza escuro: `#2d2d2d`

## Fontes

Ambos os projetos utilizam:
- **Playfair Display** - Para títulos
- **Montserrat** - Para corpo de texto

## Hospedagem

Para hospedar este projeto:

1. Faça upload de toda a pasta `pizza-cesar-completo/` para seu servidor web
2. O arquivo `index.html` na raiz será a página inicial
3. Certifique-se de que a estrutura de pastas seja mantida
4. Configure um certificado SSL para segurança (HTTPS)

## Suporte

Para mais detalhes sobre cada sistema:
- Leia o `README.md` na raiz para informações sobre o site de franquia
- Leia o `plataforma/README.md` para informações sobre a plataforma de franqueados

---

**Desenvolvido como projeto educacional para o Grupo Pizza Cesar**

