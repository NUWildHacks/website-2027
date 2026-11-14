<script lang="ts">
</script>

<div class="section-divider"></div>

<style lang="scss">
  @use "../styles/mixins";

  .section-divider {
    position: relative;
    overflow: hidden;

    height: 5rem;

    display: flex;
    align-items: center;

    border-top: var(--border-thick);
    border-bottom: var(--border-thick);

    @include mixins.pattern-dots;
  }
</style>
