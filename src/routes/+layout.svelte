<script lang="ts">
  import favicon from "#lib/assets/favicon.svg";
  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>WildHacks</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width" />
  <meta
    name="description"
    content="Join us at WildHacks, Chicagoland's biggest collegiate hackathon, on January XX, 2027!"
  />
</svelte:head>

{@render children()}
