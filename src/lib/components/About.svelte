<script lang="ts">
  import CurlyFrame from "./CurlyFrame.svelte";
  import ContentSection from "./ContentSection.svelte";
  import LayeredButton from "./LayeredButton.svelte";

  import image1 from "#lib/assets/about-opening-ceremony.webp";
  import image2 from "#lib/assets/about-cookies.webp";

  import { reveal, revealSplitText, spread } from "#lib/actions/reveal.ts";
</script>

<ContentSection id="about">
  <div class="about-content">
    <div class="frame -left">
      <CurlyFrame corner="left" />
    </div>
    <div class="frame -right">
      <CurlyFrame corner="right" />
    </div>
    <div class="region -title">
      <h2 class="text" use:revealSplitText={{ type: "lines" }}>
        Northwestern's biggest hackathon is back &mdash; get ready for an unforgettable experience
        this January!
      </h2>
      <div class="button" use:reveal={{ delay: 0.3 }}>
        <LayeredButton href="https://dashboard.wildhacks.net" target="_blank"
          >Register now</LayeredButton
        >
      </div>
    </div>
    <div class="region -two">
      <div class="image-card" use:spread>
        <div class="container">
          <img
            class="image"
            src={image1}
            alt="Students chatting at the WildHacks opening ceremony"
          />
        </div>
      </div>
      <div class="text">
        <h3 class="heading" use:reveal>What's new in 2027?</h3>
        <div class="copy" use:reveal>
          <p>
            Every spring, hundreds of hackers from across the country take over campus for a weekend
            to build and ship incredible projects. This year, we're doing something a little
            different:
            <strong>one day, 150 spots</strong>.
          </p>
          <p>
            Expect all of the connections, opportunities, and experiences that you know and love
            from WildHacks. We'll reveal more about what's in store when it's time for kickoff
            &mdash; come ready for anything. Registration is first come, first served. Our
            full-sized hackathon returns Fall 2027.
          </p>
        </div>
      </div>
    </div>

    <div class="region -two">
      <div class="text">
        <h3 class="heading" use:reveal>Tech is for everyone</h3>
        <p class="copy" use:reveal>
          Never been to a hackathon before? We've got you covered. Whether you're a seasoned pro or
          learning to code for the first time, WildHacks is committed to supporting your journey in
          tech. We'll help you find a team, connect with other hackers, and ship something you're
          proud of.
        </p>
      </div>
      <div class="image-card -flipped" use:spread>
        <div class="container">
          <img
            class="image"
            src={image2}
            alt="Students getting free cookies at the help desk"
            style="object-position: right center;"
          />
        </div>
      </div>
    </div>
  </div>
</ContentSection>

<style lang="scss">
  @use "../styles/breakpoints" as _;
  @use "../styles/mixins";

  .about-content {
    color: var(--clr-primary);
    display: contents;

    .frame {
      position: absolute;
      top: 0;

      &.-left {
        left: 0;
      }

      &.-right {
        right: 0;
      }
    }

    > .region {
      width: 100%;
      display: grid;
      justify-items: space-between;
      align-items: center;

      @include _.break("md") {
        padding-top: 6rem;
      }

      &.-title {
        padding: 9rem 0;
        display: grid;
        place-items: center;
        gap: 1.5rem;

        > .text {
          text-align: center;
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 0.975rem + 3.875vw, 5.625rem);
        }
      }

      &.-two {
        grid-template-columns: 1fr;
        gap: 2.5rem;
        place-items: center;

        @include _.break("md") {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 5rem;
        }

        > .text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          max-width: var(--max-w-copy);
          order: 1;
          color: var(--clr-primary);

          @include _.break("md") {
            order: initial;
            align-items: start;
            gap: 2rem;
          }

          > .heading {
            font-family: var(--font-display);
            font-size: clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem);
          }
          > .copy {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            font-size: var(--text-copy);
            line-height: 1.5;
          }
        }
      }
    }
  }

  .image-card {
    position: relative;
    scale: 75% 75%;
    order: 2;
    aspect-ratio: 4 / 5;
    transform: rotateZ(calc(6deg * var(--direction) * var(--spread)));

    --spread: 1;
    --direction: 1;

    &.-flipped {
      --direction: -1;
    }

    &::before {
      content: "";
      z-index: -1;
      position: absolute;
      inset: 0;
      background: var(--clr-primary);
      transform: translate(
          calc(-1.5rem * var(--direction) * var(--spread)),
          calc(-2rem * var(--spread))
        )
        rotateZ(calc(-4deg * var(--direction) * var(--spread)));
      border-radius: 2rem;
      border: var(--border-medium);
    }

    &::after {
      content: "";
      z-index: -2;
      position: absolute;
      inset: 0;
      transform: translate(
          calc(-1.5rem * var(--direction) * var(--spread)),
          calc(2rem * var(--spread))
        )
        rotateZ(calc(-12deg * var(--direction) * var(--spread)));
      border-radius: 2rem;
      border: var(--border-medium);

      @include mixins.pattern-dots;
    }

    @include _.break("md") {
      order: initial;
      scale: 100% 100%;
      width: 100%;
      height: 100%;
      min-height: 22rem;
    }

    > .container {
      border: var(--border-medium);
      border-radius: 2rem;
      width: 100%;
      height: 100%;
      overflow: hidden;

      > .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
