<script lang="ts">
  import gsap from "gsap";
  import ContentSection from "./ContentSection.svelte";
  import { reveal } from "#lib/actions/reveal.ts";

  let open: boolean[] = $state([]);
  let panels: HTMLDivElement[] = $state([]);

  const faqs = [
    {
      question: "When does registration close?",
      answer:
        "Registration will close on January 3, 2027 at 11:59 p.m. CT. You will have until January 8, 2027 to confirm your spot, after which time it will be forfeited to the next person on the waitlist.",
    },
    {
      question: "What happens once we hit the registration cap?",
      answer:
        "After the first 150 registrants, newcomers will be placed on a waitlist. You will be notified via email if a slot opens up for you, so keep an eye out!",
    },
    {
      question: "Who is eligible to participate?",
      answer: "All college and university students 18 or older are welcome to register!",
    },
    {
      question: "Will WildHacks be in-person or virtual?",
      answer:
        "WildHacks is an exclusively in-person event hosted on Northwestern University's main campus in Evanston, IL, USA.",
    },
    {
      question: "What if I've never been to a hackathon before?",
      answer:
        "WildHacks is open to students of all experience levels. We will have plenty of resources available to guide you throughout the event, including an online channel to speak with organizers. Members of our team will also be present throughout the event.",
    },
    {
      question: "How many people can be on a team?",
      answer:
        "Hackers may form teams of up to 4 people. There are no restrictions for who they can be, so you can team up with hackers from any school, country, or experience level. Teams can be formed before or during the event at hackers' own discretion.",
    },
    {
      question: "Am I required to have a team to register?",
      answer:
        "No, you are not required to register with a team. Opportunities to find team members will be available before and during the event.",
    },
    {
      question: "I have a team already. Can my friend register for the entire team?",
      answer: "No. All members of your team must independently register.",
    },
    {
      question: "What can I build?",
      answer:
        "We'll reveal the theme and project guidelines at kickoff. You may not submit a project which you have worked on prior to the event; we will be checking your submission's commit history.",
    },
    {
      question: "Will transportation be reimbursed?",
      answer: "No, transportation will not be reimbursed.",
    },
    {
      question: "Do I have to stay for the full event?",
      answer:
        "No, hackers may leave early. However, you must be present at the closing ceremony in order to claim prizes.",
    },
  ];

  function toggle(i: number) {
    if (open[i]) {
      gsap.to(panels[i], { height: 0, duration: 0.3, ease: "power2.inOut" });
      gsap.to(panels[i].querySelector(".text"), {
        opacity: 0,
        y: -8,
        duration: 0.2,
      });
    } else {
      gsap.to(panels[i], { height: "auto", duration: 0.4, ease: "power2.out" });
      gsap.to(panels[i].querySelector(".text"), {
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: 0.1,
      });
    }
    open[i] = !open[i];
  }
</script>

{#snippet dropdown(question: string, answer: string, i: number)}
  <div class="faq-dropdown">
    <button class="title" aria-controls="faq-panel-{i}" onclick={() => toggle(i)}>
      <h3 class="text">{question}</h3>
      <svg
        class={["arrow", open[i] && "-active"]}
        viewBox="0 0 132 132"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Arrow"
        role="img"
        ><g clip-path="url(#clip0_105_59)"
          ><path
            d="M58.1322 121.844C27.0391 117.757 5.14543 89.2344 9.23212 58.1212C13.3193 27.018 41.8414 5.12443 72.9346 9.21201C104.028 13.2996 125.922 41.8317 121.835 72.9349C117.748 104.038 89.2259 125.942 58.1327 121.854L58.1322 121.844ZM95.1477 36.819L88.6462 86.2681L86.0458 84.5223L43.1863 28.5277C38.3221 24.7309 33.8816 29.3034 36.1571 34.7574L79.0336 91.582L77.8593 93.3061L30.7362 87.1112C27.3932 86.6698 24.9351 94.6173 31.4373 96.5393C49.9876 97.2528 72.4908 104.447 90.5476 104.421C94.1611 104.42 95.5449 102.457 96.3941 99.0553C100.899 81.1166 100.174 58.3863 104.055 39.9149C105.217 35.0081 96.644 33.3388 95.1472 36.809L95.1477 36.819Z"
            style="fill:var(--clr-accent)"
          ></path><path
            d="M57.3568 127.825C22.9714 123.313 -1.23958 91.7616 3.28161 57.3758C7.80235 22.98 39.3437 -1.24059 73.7295 3.2806C108.115 7.80178 132.316 39.344 127.795 73.7398C123.274 108.136 91.7326 132.346 57.3568 127.825ZM58.1309 121.844C89.2241 125.932 117.746 104.028 121.833 72.9249C125.92 41.8217 104.026 13.2896 72.9328 9.20201C41.84 5.12443 13.3179 27.018 9.23077 58.1212C5.14364 89.2244 27.0377 117.757 58.1309 121.844Z"
            style="fill:var(--clr-black)"
          ></path><path
            d="M95.1462 36.8189C96.6329 33.3492 105.215 35.0081 104.054 39.9248C100.163 58.3867 100.888 81.127 96.393 99.0653C95.5439 102.467 94.1501 104.431 90.5465 104.431C72.4897 104.457 49.9865 97.2628 31.4362 96.5493C24.9336 94.6173 27.3921 86.6798 30.7351 87.1212L77.8582 93.316L79.0325 91.592L36.1556 34.7574C33.8801 29.3034 38.3206 24.7309 43.1848 28.5277L86.0542 84.5218L88.6547 86.2676L95.1561 36.8185L95.1462 36.8189Z"
            style="fill:var(--clr-primary)"
          ></path></g
        ><defs
          ><clipPath id="clip0_105_59"
            ><rect
              width="125.6"
              height="125.64"
              fill="white"
              transform="translate(0 5.60065) rotate(-2.55574)"
            ></rect></clipPath
          ></defs
        ></svg
      >
    </button>
    <div class="body" bind:this={panels[i]}>
      <p class="text">{answer}</p>
    </div>
  </div>
{/snippet}

<ContentSection id="faq" backgroundColor="var(--clr-primary)" data-spotlight>
  <div class="faq-content">
    <h2 class="heading" use:reveal>Frequently Asked Questions</h2>
    <p class="copy" use:reveal>
      If you don't see your question here, <a
        href="mailto:wildhacks@northwestern.edu?subject=[GENERAL INQUIRY] Website"
        class="link">shoot us an email</a
      >.
    </p>
    <div class="faqs">
      {#each faqs as { question, answer }, i}
        {@render dropdown(question, answer, i)}
      {/each}
    </div>
  </div>
</ContentSection>

<style lang="scss">
  @use "../styles/breakpoints.scss" as _;

  .faq-content {
    color: var(--clr-background);
    display: contents;

    > .heading {
      line-height: 1.4;
      text-align: center;
      font-family: var(--font-cursive);
      transform: rotate(-12deg);
      font-size: clamp(2.25rem, 1.5rem + 3.75vw, 6rem);

      @include _.break("md") {
        padding: 1rem 3rem;
        transform: rotate(-8deg);
      }
    }

    > .copy {
      text-align: center;
      max-width: var(--max-w-copy);

      font-size: clamp(1rem, 0.925rem + 0.375vw, 1.375rem);
      line-height: 1.5;

      > .link {
        color: var(--clr-background);
      }
    }
  }

  .faq-dropdown {
    display: flex;
    flex-direction: column;
    border-bottom: 0.125rem dashed var(--clr-background);

    > .title {
      line-height: 1.2;
      text-align: left;
      color: inherit;
      background: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      cursor: pointer;
      padding: 1rem 0;

      &:active,
      &:focus {
        outline: none;
      }

      > .text {
        font-family: var(--font-display);
        // font-size: clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem);
        font-size: clamp(1.25rem, 1.05rem + 1vw, 2.25rem);
        transform: translateY(0.1em);
      }

      > .arrow {
        flex-shrink: 0;
        width: 3rem;
        height: 3rem;
        transition: all 0.2s ease;
        transform: rotate(35deg);

        &.-active {
          transform: rotate(-145deg);
        }
      }
    }

    > .body {
      display: flex;
      height: 0;
      overflow: hidden;

      @include _.break("md") {
        justify-content: flex-end;
      }

      > .text {
        padding: 2rem 0;
        padding-top: 1.25rem;

        max-width: var(--max-w-copy);
        font-size: var(--text-copy);
        line-height: 1.5;

        @include _.break("md") {
          padding: 2rem;
        }
      }
    }
  }
</style>
