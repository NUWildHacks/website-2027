<script lang="ts">
  let { backgroundColor = "var(--clr-background)", children, ...rest } = $props();
</script>

<section class="content-section" {...rest}>
  <div class="wrapper" style={`background-color: ${backgroundColor}`}>
    <div class="container">
      {@render children()}
    </div>
  </div>
</section>

<style lang="scss">
  @use "../styles/breakpoints" as _;

  .content-section {
    margin: 0 auto;

    @include _.break("xl") {
      max-width: 85rem;
    }

    @include _.break("xl") {
      max-width: 97.5rem;
    }

    > .wrapper {
      width: 100%;
      display: flex;
      position: relative;
      padding: 3rem 0 6rem 0;
      max-width: 90vw;
      margin: 0 auto;

      border-left: var(--border-thick);
      border-right: var(--border-thick);

      @include _.break("md") {
        max-width: 95vw;
      }

      > .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2.5rem;
        max-width: 67.5rem;
        padding: 1rem;
        margin: 0 auto;

        @include _.break("2xl") {
          max-width: 75rem;
        }
      }
    }
  }
</style>
