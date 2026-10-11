# ProWorld project page

Project page for **ProWorld: Multi-View World Model with Proprioceptive Feedback for Closed-Loop Policy Evaluation**.

Live URL after deploy: https://zijunwa.github.io/proworld/

## Contents

- `index.html` — page structure
- `style.css` / `app.js` — layout and interactions
- `figures/` — paper figures
- `media/` — open-loop, closed-loop, and GenieSim video clips

## Local preview

From this directory:

```bash
python3 -m http.server 8766
```

Then open http://127.0.0.1:8766

## Paper / code links

After arXiv and GitHub are ready, inject links before `app.js` in `index.html`:

```html
<script>
  window.PROWORLD_LINKS = {
    paper: "https://arxiv.org/abs/XXXX.XXXXX",
    code: "https://github.com/ORG/REPO"
  };
</script>
<script src="app.js"></script>
```
