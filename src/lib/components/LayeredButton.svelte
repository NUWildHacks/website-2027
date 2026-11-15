<script lang="ts">
  let { children, ...rest } = $props();
</script>

<div class="layered-button">
  <div class="pattern"></div>
  <a {...rest} class="button">
    {@render children()}
  </a>
</div>

<style lang="scss">
  @use "../styles/breakpoints" as _;
  @use "../styles/mixins";

  .layered-button {
    position: relative;

    &:hover {
      > .button {
        transform: scale(115%);
      }
      > .pattern {
        transform: translate(0, 0);
      }
    }

    > .button {
      z-index: 10;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      text-transform: uppercase;
      background-color: var(--clr-primary);
      color: var(--clr-background);
      height: 2.5rem;
      border-radius: var(--rounding-max);
      padding: 0 1.5rem;
      text-decoration: none;
      font-size: 1rem;
      border: var(--border-medium);
      position: relative;
      transition: all 0.3s ease;

      @include _.break("md") {
        height: 3rem;
        padding: 0 2rem;
        font-size: 1.125rem;
      }

      &:focus {
        outline: none;
      }
    }

    > .pattern {
      position: absolute;
      inset: 0;
      transform: translate(0.5rem, 0.625rem);
      border: var(--border-medium);
      border-radius: var(--rounding-max);
      z-index: 0;
      transition: all 0.3s ease;

      @include mixins.pattern-dots(2);
    }
  }
</style>
