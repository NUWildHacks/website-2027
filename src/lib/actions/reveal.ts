import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

type RevealOpts = {
  y?: number;
  delay?: number;
  start?: string;
};

export function reveal(
  node: HTMLElement,
  { y = 50, delay = 0, start = "top 90%" }: RevealOpts = {},
) {
  const ctx = gsap.context(() => {
    gsap.from(node, {
      y,
      opacity: 0,
      duration: 1,
      delay,
      ease: "power2.out",
      scrollTrigger: { trigger: node, start },
    });
  }, node);

  return { destroy: () => ctx.revert() };
}

type RevealSplitTextOpts = {
  type: "lines" | "words";
  delay?: number;
  start?: string;
};

export function revealSplitText(
  node: HTMLElement,
  { type, delay = 0, start = "top 70%" }: RevealSplitTextOpts,
) {
  const ctx = gsap.context(() => {
    SplitText.create(node, {
      type,
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          opacity: 0,
          yPercent: 40,
          duration: 1,
          delay,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: node, start, toggleActions: "play none none none" },
        }),
    });
  }, node);

  return { destroy: () => ctx.revert() };
}

export function spread(node: HTMLElement, { scrub = 1 }: { scrub?: number | boolean } = {}) {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      node,
      { "--spread": 0 },
      {
        "--spread": 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: node,
          start: "top 85%",
          end: "center 55%",
          scrub,
        },
      },
    );
  }, node);

  return { destroy: () => ctx.revert() };
}
