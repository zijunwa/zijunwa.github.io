(() => {
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const videos = [...document.querySelectorAll("video")];
  videos.forEach((video) => {
    video.addEventListener("play", () => {
      videos.forEach((other) => {
        if (other !== video) other.pause();
      });
    });
  });

  const tabs = [...document.querySelectorAll(".tab")];
  const panels = [...document.querySelectorAll(".video-panel")];
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.tab;
      tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", active ? "true" : "false");
      });
      panels.forEach((panel) => {
        const active = panel.dataset.panel === key;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
      videos.forEach((video) => video.pause());
    });
  });

  const revealItems = [...document.querySelectorAll(".figure-block.reveal")];
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const copyBtn = document.getElementById("copy-bib");
  const bibBlock = document.getElementById("bibtex-block");
  if (copyBtn && bibBlock) {
    copyBtn.addEventListener("click", async () => {
      const text = bibBlock.innerText.trim();
      try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = "Copied";
        copyBtn.classList.add("is-copied");
        window.setTimeout(() => {
          copyBtn.textContent = "Copy";
          copyBtn.classList.remove("is-copied");
        }, 1600);
      } catch (_) {
        copyBtn.textContent = "Select & copy";
      }
    });
  }

  // Optional overrides for the published paper link and future code release.
  // window.PROWORLD_LINKS = { paper: "https://arxiv.org/abs/2610.15294", code: "https://github.com/..." };
  const links = window.PROWORLD_LINKS || {};
  const applyLink = (id, href, label) => {
    const el = document.getElementById(id);
    if (!el || !href) return;
    el.href = href;
    el.removeAttribute("aria-disabled");
    if (label) {
      const meta = el.querySelector(".resource-meta");
      if (meta) meta.textContent = label;
      else el.textContent = label;
    }
  };
  applyLink("paper-link-header", links.paper);
  applyLink("paper-link-hero", links.paper, links.paper ? "Read the paper" : null);
  applyLink("paper-link-resources", links.paper, links.paperLabel || "arXiv PDF / abs");
  applyLink("code-link-hero", links.code, links.code ? "Code" : null);
  applyLink("code-link-resources", links.code, links.codeLabel || "Open repository");
})();
