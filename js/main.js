(() => {
  const config = window.SITE_CONFIG || {};
  const digits = (config.whatsappNumber || "").replace(/\D/g, "");

  // Prepara os links de WhatsApp com número e mensagem configuráveis.
  document.querySelectorAll("[data-whatsapp]").forEach(link => {
    if (digits) {
      link.href =
        `https://wa.me/${digits}?text=${encodeURIComponent(
          config.whatsappMessage || "Olá!"
        )}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "#contato";
      link.addEventListener("click", event => {
        event.preventDefault();
        document.querySelector("#contato")?.scrollIntoView({
          behavior: "smooth"
        });
      });
    }
  });

  // Usa o link configurado para o Instagram, se fornecido.
  document.querySelectorAll("[data-instagram]").forEach(link => {
    if (config.instagramUrl) {
      link.href = config.instagramUrl;
    } else if (link.target === "_blank") {
      link.href = "#instagram";
      link.addEventListener("click", event => event.preventDefault());
    }
  });

  // Menu mobile alinhado aos seletores presentes no HTML.
  const toggle = document.querySelector(".menu-btn");
  const nav = document.querySelector("#nav");

  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    toggle.setAttribute("aria-label", open ? "Abrir menu" : "Fechar menu");
    nav?.classList.toggle("open", !open);
  });

  nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
      toggle?.setAttribute("aria-label", "Abrir menu");
    });
  });

  // Tela de carregamento: desaparece quando os recursos da página terminam de carregar.
const loader = document.querySelector("#page-loader");

const hideLoader = () => {
  loader?.classList.add("is-hidden");
  document.body.classList.remove("is-loading");
};

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  setTimeout(hideLoader, 2000);
} else {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(hideLoader, 2000);
  }, { once: true });
}

setTimeout(hideLoader, 2600);


  // Atualiza o ano do rodapé.
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  // Carrega publicações somente se houver um endpoint configurado.
  const feed = document.querySelector("#instagram-feed");

  if (feed && config.instagramFeedEndpoint) {
    fetch(config.instagramFeedEndpoint, {
      headers: { Accept: "application/json" }
    })
      .then(response => {
        if (!response.ok) throw new Error("Falha ao carregar feed");
        return response.json();
      })
      .then(data => {
        const posts = Array.isArray(data.posts)
          ? data.posts.slice(0, 6)
          : [];

        if (!posts.length) throw new Error("Feed sem publicações");

        const cards = posts.map(post => {
          const link = document.createElement("a");
          link.className = "insta-post";
          link.href = post.permalink;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.setAttribute(
            "aria-label",
            "Ver publicação original no Instagram"
          );

          const image = document.createElement("img");
          image.src = post.thumbnail_url || post.media_url;
          image.alt = post.alt || "Publicação de Regina Ribeiro no Instagram";
          image.loading = "lazy";
          image.width = 400;
          image.height = 400;

          link.append(image);
          return link;
        });

        feed.replaceChildren(...cards);
      })
      .catch(() => {
        feed.innerHTML = `
          <div class="insta-loading">
            Não foi possível carregar as publicações agora.
            Acesse o perfil pelo link acima.
            <span>↗</span>
          </div>
        `;
      });
  }
})();