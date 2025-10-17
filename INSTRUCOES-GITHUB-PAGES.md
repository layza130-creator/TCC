# Instruções para GitHub Pages

## ⚠️ IMPORTANTE: Configuração da Tag `<base>`

Este projeto foi configurado para funcionar no GitHub Pages com o nome de repositório **`TCC`**.

A tag `<base href="/TCC/">` foi adicionada em todos os arquivos HTML para garantir que os caminhos funcionem corretamente quando o site estiver hospedado em `https://SEU_USUARIO.github.io/TCC/`.

## Se você mudar o nome do repositório

Se você decidir usar um nome de repositório diferente de `TCC`, você precisará atualizar a tag `<base>` em **3 arquivos**:

### 1. `/index.html`
Localize a linha:
```html
<base href="/TCC/">
```

E substitua `TCC` pelo nome do seu repositório:
```html
<base href="/NOME_DO_SEU_REPOSITORIO/">
```

### 2. `/plataforma/login.html`
Localize a linha:
```html
<base href="/TCC/plataforma/">
```

E substitua `TCC` pelo nome do seu repositório:
```html
<base href="/NOME_DO_SEU_REPOSITORIO/plataforma/">
```

### 3. `/plataforma/dashboard.html`
Localize a linha:
```html
<base href="/TCC/plataforma/">
```

E substitua `TCC` pelo nome do seu repositório:
```html
<base href="/NOME_DO_SEU_REPOSITORIO/plataforma/">
```

## Se você hospedar em um domínio próprio

Se você configurar um domínio personalizado (ex: `www.pizzacesar.com.br`), você pode **remover completamente** as tags `<base>` de todos os arquivos HTML, pois o site estará na raiz do domínio.

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

Para testar o site localmente antes de fazer o push para o GitHub:

1. **Remova temporariamente** as tags `<base>` de todos os arquivos HTML
2. Abra o `index.html` no navegador
3. Teste todas as funcionalidades
4. **Adicione novamente** as tags `<base>` antes de fazer o push

OU

Use um servidor local:
```bash
# Com Python 3
python3 -m http.server 8000

# Com Node.js
npx http-server
```

E acesse `http://localhost:8000`

## Suporte

Se encontrar problemas, verifique:
1. O nome do repositório está correto na tag `<base>`?
2. O GitHub Pages está ativado nas configurações do repositório?
3. O branch selecionado é o `main`?
4. Aguardou alguns minutos após o push para o site atualizar?

---

**Desenvolvido para o Grupo Pizza Cesar**

