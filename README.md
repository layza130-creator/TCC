# Site Grupo Pizza Cesar - Franquia

## Descrição

Este é uma recriação do site institucional de franquia do Grupo Pizza Cesar (grupopizzacesar.com.br) desenvolvida em HTML, CSS e JavaScript puro. O site é totalmente responsivo e focado em captar interessados em abrir uma franquia.

## Estrutura do Projeto

```
grupo-pizza-cesar-site/
├── index.html      # Arquivo HTML principal
├── styles.css      # Estilos CSS
├── script.js       # Funcionalidades JavaScript
└── README.md       # Este arquivo
```

## Seções Incluídas

1. **Header** - Navegação fixa com logo e CTA
2. **Hero** - Seção principal com título impactante
3. **Por Que Somos Apaixonantes** - Apresentação do conceito único
4. **Nossas Marcas** - Grid com as 6 marcas do grupo
5. **Depoimentos** - Relatos de franqueados de sucesso
6. **Diferenciais** - Receita de sucesso da franquia
7. **Investimento** - Valores e retorno do investimento
8. **Família Cesar** - Convite para fazer parte
9. **Jornada do Franqueado** - Processo em 3 passos
10. **FAQ** - Perguntas frequentes com accordion
11. **Formulário** - Captação de leads interessados
12. **Footer** - Informações legais e redes sociais
13. **CTA Fixo** - Barra inferior com chamada para ação
14. **WhatsApp Float** - Botão flutuante de contato

## Funcionalidades

- ✅ Design responsivo para todos os dispositivos
- ✅ Accordion interativo no FAQ
- ✅ Formulário completo de captação
- ✅ Scroll suave para âncoras
- ✅ Animações ao rolar a página
- ✅ CTA fixo na parte inferior
- ✅ Botão flutuante do WhatsApp
- ✅ Efeito parallax no hero
- ✅ Header com efeito ao rolar

## Como Usar

### Opção 1: Abrir diretamente no navegador

1. Descompacte o arquivo ZIP
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. O site funcionará completamente offline

### Opção 2: Servidor local

```bash
# Com Python 3
python3 -m http.server 8000

# Com Node.js (npx)
npx http-server

# Com PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

## Personalização

### Cores

As cores principais estão definidas no arquivo `styles.css` como variáveis CSS:

```css
:root {
    --color-primary: #E31E24;    /* Vermelho principal */
    --color-secondary: #FFB81C;  /* Amarelo/Dourado */
    --color-dark: #1a1a1a;       /* Preto */
    --color-light: #f5f5f5;      /* Cinza claro */
    --color-white: #ffffff;      /* Branco */
    --color-green: #2d5016;      /* Verde escuro */
}
```

### Fontes

O site utiliza as fontes do Google Fonts:
- **Playfair Display** - Para títulos e destaques
- **Montserrat** - Para corpo de texto e interface

### Imagens

As imagens estão representadas por placeholders SVG. Para adicionar imagens reais:

1. Crie uma pasta `images/` no diretório do projeto
2. Adicione suas imagens (hero, restaurante, marcas, etc.)
3. Substitua os `data:image/svg+xml` por caminhos reais

Exemplo no HTML:
```html
<!-- Antes -->
<img src="data:image/svg+xml,..." alt="Logo">

<!-- Depois -->
<img src="images/logo.png" alt="Logo">
```

Exemplo no CSS:
```css
/* Antes */
.hero {
    background: url('data:image/svg+xml,...');
}

/* Depois */
.hero {
    background: url('images/hero-background.jpg');
}
```

### Formulário

O formulário atualmente exibe um alerta ao ser enviado. Para integrar com um backend real:

1. Abra o arquivo `script.js`
2. Localize a seção "Form submission"
3. Substitua o código pelo envio para sua API

Exemplo:
```javascript
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    try {
        const response = await fetch('https://sua-api.com/franquia', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            alert('Formulário enviado com sucesso!');
            form.reset();
        }
    } catch (error) {
        alert('Erro ao enviar formulário. Tente novamente.');
    }
});
```

### WhatsApp

Para configurar o número do WhatsApp:

1. Abra o arquivo `index.html`
2. Localize a linha com `whatsapp-float`
3. Substitua `5511999999999` pelo número real no formato internacional

```html
<a href="https://wa.me/5511987654321" class="whatsapp-float" target="_blank">
```

## Melhorias Sugeridas

Para tornar o site ainda mais completo:

- 📸 Adicionar imagens reais de alta qualidade
- 🎥 Incluir vídeos institucionais
- 📊 Integrar com Google Analytics
- 📧 Conectar formulário com serviço de e-mail marketing
- 🗺️ Adicionar mapa com localização das unidades
- 💬 Integrar chat ao vivo
- 🔒 Adicionar página de política de privacidade completa
- 📱 Criar versão PWA (Progressive Web App)
- ♿ Melhorar acessibilidade (ARIA labels, contraste)
- 🌐 Adicionar suporte a múltiplos idiomas

## Compatibilidade

- ✅ Chrome/Edge (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Opera (últimas versões)
- ✅ Navegadores mobile (iOS/Android)

## Tecnologias Utilizadas

- HTML5 (Semântico)
- CSS3 (Grid, Flexbox, Animations, Variables)
- JavaScript ES6+ (Vanilla JS)
- Google Fonts (Playfair Display, Montserrat)

## SEO

Para melhorar o SEO do site:

1. Adicione meta tags no `<head>`:
```html
<meta name="description" content="Seja um franqueado Pizza Cesar...">
<meta name="keywords" content="franquia pizza, pizza cesar, delivery">
<meta property="og:title" content="Franquia Pizza Cesar">
<meta property="og:image" content="images/og-image.jpg">
```

2. Adicione structured data (JSON-LD)
3. Otimize imagens (WebP, lazy loading)
4. Adicione sitemap.xml e robots.txt

## Licença

Este é um projeto de demonstração educacional. Todos os direitos do design e marca original pertencem ao Grupo Pizza Cesar.

## Suporte

Para dúvidas sobre personalização ou implementação, consulte a documentação do HTML, CSS e JavaScript ou entre em contato.

---

**Desenvolvido como recriação educacional do site Grupo Pizza Cesar**

