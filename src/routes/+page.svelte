<script lang="ts">
  import About from "#lib/components/About.svelte";
  import Divider from "#lib/components/Divider.svelte";
  import FAQ from "#lib/components/FAQ.svelte";
  import Footer from "#lib/components/Footer.svelte";
  import Hero from "#lib/components/Hero.svelte";
  import Marquee from "#lib/components/Marquee.svelte";
  import Sponsors from "#lib/components/Sponsors.svelte";
</script>

<Hero />
<Marquee items={["WildHacks", "2027"]} />
<About />
<Divider />
<Sponsors />
<Marquee items={["WildHacks", "2027"]} />
<FAQ />
<Divider />
<Footer />

<style>
</style>
