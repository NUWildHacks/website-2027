<script lang="ts">
  import { reveal } from "#lib/actions/reveal.ts";
  import ContentSection from "./ContentSection.svelte";
  import LayeredButton from "./LayeredButton.svelte";
</script>

<ContentSection id="sponsors">
  <div class="sponsors-content">
    <h2 class="heading" use:reveal>Sponsors</h2>
    <div class="copy" use:reveal>
      <p class="text">
        Thank you to the organizations backing WildHacks. Our sponsors keep this event free and fun
        for all of our participants. We're still finalizing this year's lineup, so stay tuned.
      </p>
      <p class="text">
        <strong>Interested in sponsoring our hackathon?</strong>
        Support a day of student innovation and meet emerging talent face to face. Reach out at
        <a
          href="mailto:wildhacks@northwestern.edu?subject=[SPONSORSHIP INQUIRY] Website"
          title="Email"
          class="link">wildhacks@northwestern.edu</a
        >.
      </p>
    </div>
    <div class="button" use:reveal>
      <LayeredButton href="mailto:wildhacks@northwestern.edu?subject=[SPONSORSHIP INQUIRY] Website">
        Become a sponsor
      </LayeredButton>
    </div>
  </div></ContentSection
>

<style lang="scss">
  @use "../styles/breakpoints" as _;

  .sponsors-content {
    color: var(--clr-primary);
    display: contents;

    > .heading {
      font-family: var(--font-cursive);
      transform: rotate(-12deg);
      font-size: clamp(2.25rem, 1.5rem + 3.75vw, 6rem);

      @include _.break("md") {
        padding: 1rem 3rem;
        transform: rotate(-8deg);
      }
    }

    > .copy {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      text-align: center;
      line-height: 1.5;
      font-size: var(--text-copy);
      max-width: var(--max-w-copy);

      > .text > .link {
        color: var(--clr-primary);
      }
    }
  }
</style>
