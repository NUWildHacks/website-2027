<script lang="ts">
  import "#lib/styles/app.scss";

  import favicon from "#lib/assets/favicon.svg";
  import type { LayoutProps } from "./$types";
  import Navigation from "#lib/components/Navigation.svelte";
  import NoiseOverlay from "#lib/components/NoiseOverlay.svelte";
  import { SplitText } from "gsap/SplitText";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { ScrollSmoother } from "gsap/ScrollSmoother";
  import gsap from "gsap";
  import Fire from "#lib/components/Fire.svelte";
  import { onMount } from "svelte";

  let { children }: LayoutProps = $props();

  gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

  onMount(() => {
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        smooth: 1,
        effects: true,
      });
    });

    return () => ctx.revert();
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>WildHacks</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width" />
  <meta
    name="description"
    content="Join us for WildHacks, Chicagoland's biggest collegiate hackathon, on January 16, 2027!"
  />
</svelte:head>

<Fire />
<NoiseOverlay />
<Navigation />

<div id="smooth-wrapper">
  <div id="smooth-content">
    {@render children()}
  </div>
</div>
