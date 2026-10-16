# Checklist de publicação — Site Regina Ribeiro

## 1. Antes de publicar

- [ ] Preencher o número real do WhatsApp em `js/config.js`
- [ ] Preencher o link real do Instagram em `js/config.js`
- [ ] Conferir se todas as imagens estão na pasta `assets/img/`
- [ ] Conferir se a logo do header e do rodapé estão corretas
- [ ] Revisar textos, ortografia e informações profissionais
- [ ] Conferir se os artigos abrem corretamente
- [ ] Testar o site no computador e no celular
- [ ] Testar o menu mobile
- [ ] Testar o carrossel de palavras
- [ ] Testar os botões de WhatsApp e Instagram
- [ ] Verificar se não há erros no console do navegador (`F12`)

## 2. Configuração do WhatsApp

Em `js/config.js`, use somente números, com código do país e DDD:

```js
window.SITE_CONFIG = {
  whatsappNumber: "5511999999999",
  whatsappMessage:
    "Olá, Regina! Gostaria de conversar sobre uma consulta nutricional.",
  instagramUrl: "[https://www.instagram.com/seuperfil/](https://www.instagram.com/seuperfil/)",
  instagramFeedEndpoint: ""
};
```

## 3. Hospedagem e HTTPS

- [ ] Publicar o site em GitHub Pages, Netlify, Vercel ou outro serviço
- [ ] Garantir que o endereço final use `https://`
- [ ] Conferir se o domínio personalizado está funcionando
- [ ] Testar o site em uma aba anônima
- [ ] Testar o site após limpar o cache

## 4. Arquivo robots.txt

Crie um arquivo chamado `robots.txt` na raiz do site:

```txt
User-agent: *
Allow: /

Sitemap: [https://www.seusite.com.br/sitemap.xml](https://www.seusite.com.br/sitemap.xml)
```

Substitua `https://www.seusite.com.br/sitemap.xml` pelo endereço real do site.

## 5. Arquivo sitemap.xml

Crie um arquivo chamado `sitemap.xml` na raiz do site:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>[https://www.seusite.com.br/](https://www.seusite.com.br/)</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>[https://www.seusite.com.br/articles/massa-muscular-40.html](https://www.seusite.com.br/articles/massa-muscular-40.html)</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>[https://www.seusite.com.br/articles/proteina-maturidade.html](https://www.seusite.com.br/articles/proteina-maturidade.html)</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>[https://www.seusite.com.br/articles/perimenopausa-movimento.html](https://www.seusite.com.br/articles/perimenopausa-movimento.html)</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>[https://www.seusite.com.br/privacidade.html](https://www.seusite.com.br/privacidade.html)</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

## 6. Google Search Console

- [ ] Acessar o Google Search Console
- [ ] Criar uma propriedade para o domínio
- [ ] Validar a propriedade por DNS, arquivo HTML ou tag meta
- [ ] Enviar o `sitemap.xml`
- [ ] Usar a ferramenta de inspeção de URL na página inicial
- [ ] Solicitar indexação da página inicial
- [ ] Acompanhar relatórios de desempenho e indexação

## 7. Google Analytics 4

- [ ] Criar uma conta no Google Analytics
- [ ] Criar uma propriedade GA4
- [ ] Criar um fluxo de dados para Web
- [ ] Copiar o ID de medição, no formato `G-XXXXXXXXXX`
- [ ] Instalar a tag do GA4 no `<head>` de todas as páginas
- [ ] Testar se o acesso aparece em tempo real
- [ ] Configurar eventos importantes, como clique no WhatsApp

Exemplo de instalação:

```html
<!-- Google tag (gtag.js) -->
<script async src="[https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX](https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX)"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Substitua `G-XXXXXXXXXX` pelo ID real do GA4.

## 8. Google Business Profile

- [ ] Criar ou reivindicar o perfil da Regina Ribeiro
- [ ] Usar o mesmo nome profissional do site
- [ ] Adicionar especialidade: Nutricionista
- [ ] Adicionar cidade, região de atendimento e horários
- [ ] Adicionar o link do site
- [ ] Adicionar o link do WhatsApp, se disponível
- [ ] Adicionar fotos profissionais
- [ ] Solicitar avaliações de pacientes após as consultas

## 9. Instagram

- [ ] Converter o perfil para Creator ou Business, se for usar feed automático
- [ ] Preencher o link real do Instagram em `js/config.js`
- [ ] Testar o botão “Acompanhe no Instagram”
- [ ] Definir se o feed será automático ou apenas com link para o perfil

### Opção recomendada no lançamento

Não conectar a API ainda. Deixar apenas o botão para o perfil do Instagram.

A API antiga do Instagram, chamada Basic Display API, foi descontinuada. Para feed automático, é necessário usar conta profissional e a API atual da Meta, preferencialmente por meio de um backend seguro.

### Se quiser feed automático depois

- [ ] Converter o perfil para Creator ou Business
- [ ] Criar um aplicativo no Meta for Developers
- [ ] Gerar token de acesso
- [ ] Criar um backend ou serviço seguro para buscar as publicações
- [ ] Configurar o `instagramFeedEndpoint`
- [ ] Nunca colocar token ou senha no JavaScript do site

## 10. Segurança

- [ ] Não colocar senhas, tokens ou chaves de API no HTML, CSS ou JavaScript
- [ ] Manter o `config.js` apenas com informações públicas
- [ ] Usar HTTPS em todas as páginas
- [ ] Manter backups do projeto
- [ ] Usar senha forte na conta da hospedagem
- [ ] Ativar autenticação em dois fatores na hospedagem, Google e Meta
- [ ] Não publicar dados pessoais sensíveis de pacientes

## 11. Desempenho

- [ ] Rodar o site no PageSpeed Insights
- [ ] Verificar a nota para celular
- [ ] Comprimir imagens grandes
- [ ] Usar imagens nos formatos WebP ou AVIF, se possível
- [ ] Evitar imagens muito pesadas
- [ ] Conferir se o site abre rapidamente em 4G

## 12. Revisão final

- [ ] Testar todos os links
- [ ] Testar o WhatsApp
- [ ] Testar o Instagram
- [ ] Testar o formulário ou botão de contato
- [ ] Revisar a página de privacidade
- [ ] Conferir o rodapé e o ano automático
- [ ] Publicar a versão final
- [ ] Compartilhar o link com pessoas de confiança para revisão
