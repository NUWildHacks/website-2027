<script lang="ts">
  import gsap from "gsap";
  import Star from "./svg/Star.svelte";
  import { onMount } from "svelte";

  type MarqueeProps = {
    items?: string[];
  };

  let { items = [] }: MarqueeProps = $props();

  let track: HTMLDivElement | null = $state(null);

  onMount(() => {
    const ctx = gsap.context(() => {
      gsap.to(track, {
        translateX: "-50%",
        duration: items.length * 10,
        ease: "linear",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  });
</script>

<div class="marquee-container" style={`--duration: ${items.length * 10}s`}>
  <div class="track" bind:this={track}>
    {#each { length: 10 } as _}
      {#each items as item, i}
        <span class="text">{item}</span>
        <Star star={i % 6} size="3rem" />
      {/each}
    {/each}
  </div>
</div>

<style lang="scss">
  @use "../styles/breakpoints" as _;

  .marquee-container {
    position: relative;
    overflow: hidden;
    height: 3.25rem;
    display: flex;
    align-items: center;

    border-top: var(--border-thick);
    border-bottom: var(--border-thick);
    background-color: var(--clr-accent);

    @include _.break("md") {
      height: 4rem;
    }

    @include _.break("2xl") {
      height: 5rem;
    }

    > .track {
      display: flex;
      align-items: center;
      width: max-content;
      gap: 2rem;
      transform: translateX(0%);

      color: var(--clr-primary);

      > .text {
        transform: translateY(0.1em);
        font-family: "TAYBilly";
        // font-size: 3rem;
        font-size: 2rem;
        text-transform: uppercase;
        line-height: 1;

        @include _.break("md") {
          font-size: 2.5rem;
        }

        @include _.break("2xl") {
          font-size: 3rem;
        }
      }
    }
  }
</style>
