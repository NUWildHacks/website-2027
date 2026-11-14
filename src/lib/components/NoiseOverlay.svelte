<script lang="ts">
  import video from "#lib/assets/speckles.mp4";
  import paper from "#lib/assets/paper-1.webp";
  import gsap from "gsap";
  import { onMount } from "svelte";

  let overlay: HTMLDivElement | null = $state(null);

  onMount(() => {
    const ctx = gsap.context(() => {
      gsap.to(overlay, {
        duration: 0.2,
        repeat: -1,
        repeatRefresh: true,
        ease: "steps(1)",
        "--before-x": () => gsap.utils.random(-30, 30),
        "--before-y": () => gsap.utils.random(-30, 30),
      });
    });
    return () => ctx.revert();
  });
</script>

<div class="noise-container" style={`--src: url(${paper})`} bind:this={overlay}>
  <video autoplay loop muted class="video">
    <source src={video} type="video/mp4" />
  </video>
</div>

<style lang="scss">
  .noise-container {
    --before-x: 0;
    --before-y: 0;

    position: fixed;
    inset: 0;
    width: 100%;
    min-height: 100dvh;
    overflow: hidden;
    z-index: 999;
    pointer-events: none;
    mix-blend-mode: multiply;

    &::after {
      content: "";
      position: absolute;
      inset: -100%;
      background-image: var(--src);

      transform: translate(calc(var(--before-x) * 1%), calc(var(--before-y) * 1%));
      opacity: 0.5;
    }

    > .video {
      filter: invert(1);
      position: absolute;
      inset: 0;
      object-fit: cover;
      opacity: 0.2;
    }
  }
</style>
