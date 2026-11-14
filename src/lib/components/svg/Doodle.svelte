<script lang="ts">
  import starDoodle1 from "#lib/assets/star-doodle-1.svg";
  import xDoodle from "#lib/assets/x-doodle.svg";

  const doodles = [
    { id: "star1", src: starDoodle1 },
    { id: "x", src: xDoodle },
  ];

  type DoodleProps = {
    id: string;
    style?: string;
  };

  let { id, style = "" }: DoodleProps = $props();
</script>

<img class="doodle-img" src={doodles.find((d) => d.id === id)?.src} alt="Doodle" {style} />

<style lang="scss">
</style>
