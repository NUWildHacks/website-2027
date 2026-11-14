<script lang="ts">
  import { reveal, revealSplitText } from "#lib/actions/reveal.ts";
  import Desert from "./svg/Desert.svelte";
</script>

<section class="hero-section">
  <div class="wrapper">
    <div class="container">
      <header class="title">
        <div class="heading">
          <span class="aside" use:reveal>Introducing</span>
          <h1 class="text" use:revealSplitText={{ type: "lines", delay: 0.2 }}>
            WildHacks<br />2027
          </h1>
        </div>
        <div class="subtitle" use:reveal={{ delay: 0.4 }}>
          <span class="text">Jan 16, 2027</span>
          <span class="text -extra">&bull;</span>
          <span class="text -extra">Northwestern University</span>
          <span class="text">&bull;</span>
          <span class="text">Evanston, IL</span>
        </div>
      </header>

      <div class="sun" use:reveal={{ delay: 0.5, y: 125 }}></div>

      <div class="desert" use:reveal>
        <Desert fill="var(--clr-black)" />
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @use "../styles/breakpoints" as _;

  %container-mask {
    -webkit-mask:
      radial-gradient(circle 2rem at top left, #0000 98%, #000) top left,
      radial-gradient(circle 2rem at top right, #0000 98%, #000) top right;
    -webkit-mask-size: 51% 100%;
    -webkit-mask-repeat: no-repeat;

    mask:
      radial-gradient(circle 2rem at top left, #0000 98%, #000) top left,
      radial-gradient(circle 2rem at top right, #0000 98%, #000) top right;
    mask-size: 51% 100%;
    mask-repeat: no-repeat;
  }

  .hero-section {
    margin: 0 auto;
    padding-top: 5dvh;

    @include _.break("md") {
      padding-top: 0;
    }

    @include _.break("xl") {
      max-width: 85rem;
    }

    @include _.break("2xl") {
      max-width: 97.5rem;
    }

    > .wrapper {
      margin: 0 auto;
      width: 100%;
      max-width: 90vw;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      @include _.break("md") {
        max-width: 95vw;
      }

      > .container {
        position: relative;
        height: 78dvh;
        width: 100%;
        padding: 0 1.5rem;
        margin-top: 8dvh;
        overflow: hidden;

        display: grid;
        align-items: center;

        background-color: var(--clr-black);

        @include _.break("md") {
          padding: 0 2rem;
          height: 88dvh;
          margin-top: 2dvh;
        }

        @extend %container-mask;

        &::before {
          z-index: -1;
          content: "";
          position: absolute;
          inset: 0.1875rem;
          bottom: 0;
          background-color: var(--clr-background);

          @extend %container-mask;
        }

        > .title {
          width: fit-content;
          max-width: 75rem;
          height: 85dvh;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          font-family: var(--font-display);
          color: var(--clr-primary);
          justify-content: center;

          @include _.break("md") {
            gap: 2rem;
            height: 70vh;
          }

          > .heading {
            > .aside {
              font-family: var(--font-cursive);
              font-size: clamp(2.25rem, 1.2rem + 5.25vw, 7.5rem);
              display: block;

              @include _.break("md") {
                transform: rotate(-8deg);
              }
            }

            > .text {
              line-height: 0.9375;
              transform: translateY(0.1em);
              text-align: left;
              font-size: clamp(2.5rem, 1.3rem + 6vw, 8.5rem);
              @include _.break("md") {
                text-align: right;
              }
            }
          }

          > .subtitle {
            display: flex;
            width: fit-content;
            align-items: center;
            gap: 0.5rem;
            padding: 0.1875rem 0.75rem;

            background-color: var(--clr-primary);
            border-radius: 2rem;

            @include _.break("md") {
              gap: 0.75rem;
              padding: 0.1875rem 1.25rem;
            }

            > .text {
              transform: translateY(0.1em);
              font-size: clamp(0.875rem, 0.775rem + 0.5vw, 1.375rem);
              text-transform: uppercase;
              color: var(--clr-background);

              &.-extra {
                display: none;
                @include _.break("md") {
                  display: inline;
                }
              }
            }
          }
        }

        > .desert {
          z-index: -1;
          position: absolute;
          transform: translateX(-50%);
          left: 50%;
          width: 95%;
          bottom: 3dvh;
          pointer-events: none;
        }

        > .sun {
          z-index: -1;
          position: absolute;
          bottom: 20vw;
          right: 18vw;
          pointer-events: none;

          width: clamp(4rem, calc(0.842rem + 15.789vw), 16rem);
          aspect-ratio: 1 / 1;

          display: flex;
          justify-content: center;
          align-items: flex-end;

          background-color: var(--clr-accent);

          border-radius: 100%;
        }
      }
    }
  }
</style>
