<script lang="ts">
  import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";
  import gsap from "gsap";

  let fire: HTMLDivElement | null = $state(null);
  let mask: HTMLDivElement | null = $state(null);

  let activeMask = $state(false);

  let fireX: gsap.QuickToFunc, fireY: gsap.QuickToFunc;
  let maskX: gsap.QuickToFunc, maskY: gsap.QuickToFunc;

  let lastX = 0,
    lastY = 0;

  $effect(() => {
    if (!fire || !mask) return;

    const ctx = gsap.context(() => {
      fireX = gsap.quickTo(fire, "x", { duration: 0.7, ease: "power3" });
      fireY = gsap.quickTo(fire, "y", { duration: 0.7, ease: "power3" });

      maskX = gsap.quickTo(mask, "--mouse-x", {
        duration: 0.7,
        ease: "power3",
      });
      maskY = gsap.quickTo(mask, "--mouse-y", {
        duration: 0.7,
        ease: "power3",
      });
    });
    return () => ctx.revert();
  });

  function handleMove(e: MouseEvent) {
    lastX = e.clientX;
    lastY = e.clientY;

    fireX?.(lastX);
    fireY?.(lastY);

    maskX?.(lastX);
    maskY?.(lastY);

    updateActive(lastX, lastY);
  }

  function updateActive(x: number, y: number) {
    const el = document.elementFromPoint(x, y);
    activeMask = !!el?.closest("[data-spotlight]");
  }
</script>

<svelte:window onmousemove={handleMove} onscroll={() => updateActive(lastX, lastY)} />
<svelte:document onmouseleave={() => (activeMask = false)} />

<div class="fire-container" bind:this={fire}>
  <div class="lottie">
    <DotLottieSvelte
      src="https://lottie.host/2fcadb96-a4aa-4677-bf25-ed3277a36dea/Iq3QXSVAsY.lottie"
      autoplay
      loop
    />
  </div>
  <div class="glow"></div>
</div>

<div class={["spotlight-mask", activeMask && "-active"]} bind:this={mask}></div>

<style lang="scss">
  @use "../styles/breakpoints" as _;

  .fire-container {
    display: none;
    @include _.break("xl") {
      display: block;
    }

    z-index: 200;
    position: fixed;
    top: 0;
    left: 0;
    width: 10rem;
    height: 10rem;
    pointer-events: none;
    transform: translate(-50%, -50%);

    > .lottie {
      width: 100%;
      height: 100%;
      transform: scale(1.25);
    }

    > .glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 100%;

      width: 80%;
      height: 100%;
      background: radial-gradient(
        circle,
        rgba(255, 0, 72, 0.85) 0%,
        rgba(255, 145, 0, 0.7) 30%,
        rgba(255, 242, 140, 0.35) 50%
      );
      filter: blur(1.25rem);
      opacity: 0.25;
      animation: firePulse 800ms ease-in infinite;
      pointer-events: none;
      z-index: -1;
    }
  }

  .spotlight-mask {
    --mouse-x: 0px;
    --mouse-y: 0px;

    display: none;
    @include _.break("xl") {
      display: block;
    }

    position: fixed;
    inset: 0;

    z-index: 100;
    pointer-events: none;
    background: var(--clr-black);
    -webkit-mask: radial-gradient(
      circle 16rem at var(--mouse-x) var(--mouse-y),
      transparent 0,
      transparent 40%,
      var(--clr-black) 80%,
      var(--clr-black) 100%
    );
    mask: radial-gradient(
      circle 16rem at var(--mouse-x) var(--mouse-y),
      transparent 0,
      transparent 40%,
      var(--clr-black) 80%,
      var(--clr-black) 100%
    );

    transition: opacity 0.8s ease;
    opacity: 0;

    &.-active {
      opacity: 0.4;
    }
  }

  @keyframes firePulse {
    0%,
    100% {
      transform: translate(-50%, -50%) scaleY(1);
      opacity: 0.5;
    }
    25% {
      transform: translate(-50%, -50%) scaleY(1.2);
      opacity: 0.4;
    }
    50% {
      transform: translate(-50%, -50%) scaleY(0.9);
      opacity: 0.35;
    }
    75% {
      transform: translate(-50%, -50%) scaleY(1.1);
      opacity: 0.5;
    }
  }
</style>
