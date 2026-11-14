<script lang="ts">
  import wordmark from "#lib/assets/wh-wordmark-card.svg";
  import SocialMediaIcon from "./svg/SocialMediaIcon.svelte";
  import Heart from "./svg/Heart.svelte";

  const socials = [
    { title: "Instagram", href: "https://instagram.com/wildhacks" },
    { title: "LinkedIn", href: "https://www.linkedin.com/company/wildhacks" },
    {
      title: "Email",
      href: "mailto:wildhacks@northwestern.edu?subject=[GENERAL INQUIRY] Website",
    },
  ];
</script>

<footer class="footer-section" id="footer">
  <div class="wrapper">
    <div class="container">
      <div class="cell -two">
        <img class="wordmark" src={wordmark} alt="WildHacks wordmark" />
      </div>
      <div class="cell -meta">
        <ul class="socials">
          {#each socials as { title, href }}
            <li class="li">
              <a class="link" {href} {title} target="_blank">
                <SocialMediaIcon icon={title.toLowerCase()} size="2rem" />
              </a>
            </li>
          {/each}
        </ul>
        <div class="text">
          <span class="node">Made with</span><span class="heart"><Heart /></span><span class="node"
            >by the WildHacks team.</span
          >
        </div>
      </div>
    </div>
    <div class="license">
      <span class="text"
        >MIT License &copy; 2026 WildHacks. <a
          class="link"
          href="https://github.com/NUWildHacks/website-2027"
          target="_blank">View source.</a
        ></span
      >
    </div>
  </div>
</footer>

<style lang="scss">
  @use "../styles/breakpoints" as _;

  .footer-section {
    width: 100%;
    background-color: var(--clr-background);

    // @include _.break("md") {
    //   height: 80dvh;
    // }

    > .wrapper {
      height: 100%;
      width: 95vw;
      max-width: 67.5rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      padding: 7.5rem 1rem 4rem 1rem;

      @include _.break("md") {
        padding: 7.5rem 1.5rem 4rem 1.5rem;
        gap: 1.5rem;
      }

      @include _.break("xl") {
        max-width: 85rem;
      }

      @include _.break("2xl") {
        max-width: 97.5rem;
      }

      > .license {
        text-align: center;
        width: 100%;
        background-color: var(--clr-primary);
        color: var(--clr-background);
        padding: 0.75rem 1.5rem;
        border-radius: 1rem;

        > .text > .link {
          color: inherit;
        }
      }

      > .container {
        width: 100%;
        border-radius: 1.5rem;
        border: 0.125rem solid var(--clr-primary);
        background-color: var(--clr-primary);
        gap: 0.125rem;
        // display: flex;
        // align-items: flex-end;
        display: grid;
        overflow: hidden;
        grid-template-columns: 1fr;

        @include _.break("md") {
          border-radius: 2rem;
          grid-template-columns: 1fr 1fr 1fr;
        }

        > .cell {
          padding: 1.5rem;
          background-color: var(--clr-background);
          color: var(--clr-primary);

          @include _.break("md") {
            padding: 2rem;
          }

          &.-meta {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            justify-content: flex-end;
            align-items: flex-end;
          }

          &.-two {
            @include _.break("md") {
              grid-column: span 2;
            }
          }

          > .wordmark {
            @include _.break("md") {
              height: 8rem;
            }
          }

          > .text {
            font-size: var(--text-copy);
            text-align: right;

            > .node {
              display: inline;
              vertical-align: middle;
            }

            > .heart {
              margin: 0 0.375rem;
              display: inline-block;
              vertical-align: middle;
              width: var(--text-copy);
            }
          }

          > .socials {
            display: flex;
            gap: 0.25rem;

            > .li > .link {
              color: var(--clr-primary);
            }
          }
        }
      }
    }
  }
</style>
