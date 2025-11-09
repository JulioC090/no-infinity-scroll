let listeners = []; 
let scrollBlocked = false;

function blockScroll() {
  if (scrollBlocked) return;
  scrollBlocked = true;

  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";

  const handlers = [
    { target: globalThis, type: "wheel", fn: e => e.preventDefault(), options: { passive: false } },
    { target: globalThis, type: "touchmove", fn: e => e.preventDefault(), options: { passive: false } },
    { target: globalThis, type: "scroll", fn: () => globalThis.scrollTo(0, 0), options: { passive: false } },
    {
      target: globalThis,
      type: "keydown",
      fn: e => {
        const blocked = [
          "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight",
          "Space", "PageUp", "PageDown", "Home", "End"
        ];
        if (blocked.includes(e.code)) {
          e.stopImmediatePropagation();
          e.preventDefault();
        }
      },
      options: true
    }
  ];

  for (const h of handlers) {
    h.target.addEventListener(h.type, h.fn, h.options);
    listeners.push(h);
  }
}

function unblockScroll() {
  if (!scrollBlocked) return;
  scrollBlocked = false;

  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";

  for (const h of listeners) {
    h.target.removeEventListener(h.type, h.fn, h.options);
  }
  listeners = [];
}