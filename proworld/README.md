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

The paper is available at https://arxiv.org/abs/2610.15294. All three paper links are set directly in `index.html` so they also work without JavaScript.

To override links or add the GitHub repository when it is ready, inject links before `app.js` in `index.html`:

```html
<script>
  window.PROWORLD_LINKS = {
    paper: "https://arxiv.org/abs/2610.15294",
    code: "https://github.com/ORG/REPO"
  };
</script>
<script src="app.js"></script>
```
