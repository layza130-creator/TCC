# Plataforma Digital Centralizada para Franqueados Pizza Cesar

## Descrição

Este projeto consiste em uma plataforma digital centralizada para franqueados da Pizza Cesar, desenvolvida em HTML, CSS e JavaScript puro. Inclui uma página de login segura e um dashboard unificado com acesso a materiais de marketing, brandbook, vídeos promocionais, kits de comunicação, orientações de marketing e um calendário de campanhas.

### Estratégia

A plataforma busca unificar a comunicação entre a franqueadora e os franqueados, garantindo acesso fácil a materiais oficiais e padronizados. Isso visa resolver problemas de falta de padronização e uso incorreto da identidade visual, conforme destacado pela ABF.

### Uso pelos Franqueados

- Acesso rápido a templates de posts, artes e vídeos prontos.
- Download do brandbook atualizado.
- Canal direto para dúvidas e suporte em campanhas locais.
- Dashboard com calendário de campanhas nacionais e regionais.

## Estrutura do Projeto

```
plataforma-franqueados/
├── login.html      # Página de Login
├── dashboard.html  # Dashboard da Plataforma
├── styles.css      # Estilos CSS para ambas as páginas
├── login.js        # Funcionalidades JavaScript para a página de login
├── dashboard.js    # Funcionalidades JavaScript para o dashboard
└── README.md       # Este arquivo
```

## Como Usar

### 1. Descompactar o Projeto

Descompacte o arquivo `plataforma-franqueados.zip` em uma pasta de sua escolha.

### 2. Abrir as Páginas

- Para acessar a página de login: Abra o arquivo `login.html` no seu navegador.
- Após o login, você será redirecionado para `dashboard.html`.

### 3. Credenciais de Teste (para desenvolvimento)

No arquivo `login.js`, você encontrará credenciais de teste:

```javascript
const CREDENTIALS = {
    'admin': 'admin123',
    'franqueado': 'franquia2024',
    'sp.centro': 'pizzacesar',
    'demo': 'demo123'
};
```

**IMPORTANTE:** Em um ambiente de produção real, as credenciais devem ser gerenciadas por um sistema de backend seguro e nunca armazenadas diretamente no código JavaScript do frontend.

## Personalização

### Cores e Fontes

As cores e fontes principais são definidas no arquivo `styles.css`:

```css
:root {
    --color-primary: #E31E24;    /* Vermelho principal */
    --color-secondary: #FFB81C;  /* Amarelo/Dourado */
    --color-dark: #1a1a1a;       /* Preto */
    --color-dark-light: #2d2d2d; /* Cinza escuro */
    --color-white: #ffffff;      /* Branco */
    --color-gray: #cccccc;       /* Cinza */
    --color-gray-dark: #666666;  /* Cinza mais escuro */
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Montserrat', sans-serif;
}
```

Você pode alterar esses valores para ajustar o esquema de cores e tipografia.

### Links do Google Drive

Para integrar os botões do dashboard com suas pastas e arquivos no Google Drive, você precisará editar o arquivo `dashboard.js`.

Localize a variável `DRIVE_LINKS` e substitua os placeholders `SEU_ID_PASTA_...` e `SEU_ID_ARQUIVO_...` pelos IDs reais de suas pastas e arquivos no Google Drive.

```javascript
const DRIVE_LINKS = {
    templates: 'https://drive.google.com/drive/folders/SEU_ID_PASTA_TEMPLATES',
    brandbook: 'https://drive.google.com/file/d/SEU_ID_ARQUIVO_BRANDBOOK/view',
    videos: 'https://drive.google.com/drive/folders/SEU_ID_PASTA_VIDEOS',
    kits: 'https://drive.google.com/drive/folders/SEU_ID_PASTA_KITS',
    orientacoes: 'https://drive.google.com/drive/folders/SEU_ID_PASTA_ORIENTACOES'
};
```

**Como obter o ID de uma pasta/arquivo no Google Drive:**
1. Abra a pasta ou arquivo no Google Drive.
2. O ID estará na URL. Por exemplo, para uma pasta, a URL pode ser `https://drive.google.com/drive/folders/1ABC123XYZ...`. O ID é `1ABC123XYZ...`.
3. Para arquivos, a URL pode ser `https://drive.google.com/file/d/1XYZ789ABC.../view`. O ID é `1XYZ789ABC...`.

### Calendário de Campanhas

As campanhas no calendário são exemplos. Para adicionar ou editar campanhas, edite o objeto `campaigns` no arquivo `dashboard.js`:

```javascript
const campaigns = {
    'AAAA-MM-DD': 'Nome da Campanha',
    '2024-01-15': 'Campanha Verão',
    // ... adicione mais campanhas aqui
};
```

### Suporte ao Franqueado (Modal)

O formulário de suporte no dashboard atualmente apenas exibe uma mensagem de sucesso no frontend. Para que ele funcione de fato, você precisará integrá-lo a um serviço de backend que possa receber as solicitações e encaminhá-las para sua equipe de suporte.

Edite a função `submitSupport(event)` no `dashboard.js` para enviar os dados do formulário para o seu endpoint de API.

## Melhorias Sugeridas

- **Backend Real:** Implementar um backend para gerenciamento seguro de usuários, autenticação e armazenamento de dados de suporte.
- **Gerenciamento de Conteúdo:** Utilizar um CMS (Content Management System) ou um sistema de gerenciamento de arquivos mais robusto para os materiais do Google Drive.
- **Notificações em Tempo Real:** Integrar com serviços de notificação para alertas de novas campanhas ou mensagens de suporte.
- **Análise de Uso:** Adicionar ferramentas de análise para monitorar o uso da plataforma pelos franqueados.
- **Acessibilidade:** Melhorar a acessibilidade para usuários com deficiência.

## Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Variáveis CSS)
- JavaScript ES6+ (Vanilla JS)
- Google Fonts (Playfair Display, Montserrat)

## Licença

Este é um projeto de demonstração educacional. O design e a marca são baseados no Grupo Pizza Cesar para fins de recriação e estudo.

## Suporte

Para dúvidas sobre personalização ou implementação, consulte a documentação ou entre em contato.
