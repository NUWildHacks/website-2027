<script lang="ts">
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import SocialMediaIcon from "./svg/SocialMediaIcon.svelte";
  import gsap from "gsap";
  import { onMount } from "svelte";
  import lettermark from "#lib/assets/wh-lettermark-card.svg";
  import { ScrollSmoother } from "gsap/ScrollSmoother";

  let nav: HTMLElement | null = $state(null);

  const links = [
    { title: "About", href: "#about" },
    { title: "Sponsors", href: "#sponsors" },
    { title: "FAQ", href: "#faq" },
  ];
  const socials = [
    { title: "Instagram", href: "https://instagram.com/wildhacks" },
    { title: "LinkedIn", href: "https://www.linkedin.com/company/wildhacks" },
    {
      title: "Email",
      href: "mailto:wildhacks@northwestern.edu?subject=[GENERAL INQUIRY] Website",
    },
  ];

  function handleScroll(target: gsap.DOMTarget | number) {
    const smoother = ScrollSmoother.get();
    if (smoother) smoother.scrollTo(target, true);
  }

  onMount(() => {
    const ctx = gsap.context(() => {
      const showNav = gsap
        .from(nav, {
          yPercent: -180,
          ease: "power3.inOut",
          paused: true,
          duration: 0.3,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          self.direction === -1 ? showNav.play() : showNav.reverse();
        },
      });
    });

    return () => ctx.revert();
  });
</script>

<nav class="nav-bar" bind:this={nav}>
  <ul class="links -sections">
    {#each links as { title, href }}
      <li class="li">
        <button class="link" onclick={() => handleScroll(href)}>
          <span class="text">{title}</span>
        </button>
      </li>
    {/each}
  </ul>
  <button onclick={() => handleScroll(0)} class="logo">
    <img class="image" src={lettermark} alt="WildHacks lettermark logo" />
  </button>
  <ul class="links">
    {#each socials as { title, href }}
      <li class="li">
        <a class="link -icon" {href} target="_blank" {title}>
          <SocialMediaIcon icon={title.toLowerCase()} size="1em" />
        </a>
      </li>
    {/each}
    <li class="li">
      <a class="link -button" href="https://dashboard.wildhacks.net" target="_blank">
        <span class="text">Register</span>
      </a>
    </li>
  </ul>
</nav>

<style lang="scss">
  @use "../styles/breakpoints" as _;

  %list-mask {
    -webkit-mask:
      radial-gradient(circle 0.5rem at center left, #0000 98%, #000) center left -0.1875rem,
      radial-gradient(circle 0.5rem at center right, #0000 98%, #000) center right -0.1875rem;
    -webkit-mask-size: 52% 100%;
    -webkit-mask-repeat: no-repeat;

    mask:
      radial-gradient(circle 0.5rem at center left, #0000 98%, #000) center left -0.1875rem,
      radial-gradient(circle 0.5rem at center right, #0000 98%, #000) center right -0.1875rem;
    mask-size: 52% 100%;
    mask-repeat: no-repeat;
  }

  .nav-bar {
    z-index: 998;
    position: fixed;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 93vw;
    height: min-content;
    gap: 1.25rem;
    display: flex;

    justify-content: space-between;
    align-items: center;

    @include _.break("lg") {
      top: 2.5rem;
      max-width: 80rem;
    }

    @include _.break("2xl") {
      max-width: 88rem;
      top: 3rem;
      gap: 1.5rem;
    }

    > .logo {
      background: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      @include _.break("lg") {
        width: 100%;
      }

      // @include _.break("lg") {
      //   position: absolute;
      //   top: 50%;
      //   left: 50%;
      //   transform: translate(-50%, -50%);
      // }

      &:focus,
      &:active {
        outline: none;
      }

      > .image {
        height: 8vh;
        transition: all 0.5s ease;

        @include _.break("lg") {
          height: 11vh;
        }

        @include _.break("2xl") {
          height: 7vh;
        }

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    > .links {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--clr-black);
      padding: 0.625rem 1rem;
      @extend %list-mask;

      @include _.break("md") {
        gap: 0.375rem;
      }

      @include _.break("lg") {
        width: 100%;
      }

      @include _.break("xl") {
        gap: 0.625rem;
      }

      @include _.break("2xl") {
        gap: 0.75rem;
        padding: 0.75rem 1.25rem;
      }

      &.-sections {
        display: none;

        @include _.break("lg") {
          display: flex;
          gap: 0.75rem;
          padding: 0.75rem 1.25rem;
        }
      }

      &::before {
        content: "";
        position: absolute;
        inset: 0.125rem;
        z-index: -1;
        background-color: var(--clr-primary);

        @extend %list-mask;
      }

      > .li {
        display: flex;

        > .link {
          background: none;
          cursor: pointer;
          text-decoration: none;
          border-radius: 50rem;
          padding: 0.625rem 1.25rem;
          border: 0.125rem solid var(--clr-background);
          color: var(--clr-background);
          font-size: 1.375rem;
          transition: all 0.3s ease;

          &:hover {
            border: 0.125rem solid var(--clr-black);
            background-color: var(--clr-accent);
            color: var(--clr-primary);
          }

          &.-icon {
            padding: 0.625rem;
            display: flex;
            align-items: center;
            justify-content: center;
            display: none;

            @include _.break("md") {
              display: block;
            }
          }

          > .text {
            display: block;
            font-family: var(--font-display);
            transform: translateY(0.1em);
          }
        }
      }
    }
  }
</style>
