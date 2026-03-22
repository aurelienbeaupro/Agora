const sequence = [
  {
    html: "UNE EXPÉRIENCE<br />PREND FORME",
    hold: 3600,
    outro: true,
  },
  {
    html: "ELLE VA CHANGER<br />VOTRE REGARD",
    hold: 4000,
    outro: true,
  },
  { html: "AGORA ARRIVE.", hold: 0, outro: false },
];

const headline = document.querySelector("[data-headline]");

const delay = (ms) =>
  new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });

async function showHeadline(html) {
  headline.classList.remove("is-visible", "is-exiting");
  headline.innerHTML = html;
  void headline.offsetWidth;
  headline.classList.add("is-visible");
}

async function playSequence() {
  for (let index = 0; index < sequence.length; index += 1) {
    const item = sequence[index];

    await showHeadline(item.html);
    await delay(item.hold);

    if (item.outro) {
      headline.classList.remove("is-visible");
      headline.classList.add("is-exiting");
      await delay(1900);
    }
  }
}

playSequence();
