<script setup lang="ts">
/** Change this in one place if you'd rather route enquiries elsewhere. */
const CONTACT_EMAIL = 'ben@ive-ben.com'

const SUBJECT = "Let's talk about a project"
const BODY = `Hi Ben,

Here's what I'm working on:

`

const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  SUBJECT,
)}&body=${encodeURIComponent(BODY)}`

interface Service {
  title: string
  body: string
  proof: string
}

const SERVICES: Service[] = [
  {
    title: 'Enterprise architecture',
    body: "Come in cold, work out what you've actually got, and give you a north-star architecture with a real path to reach it — sized, sequenced, and honest about the constraints. Regulated environments, legacy sprawl, and hardware in the loop are the interesting cases, not the disqualifying ones.",
    proof: 'Mayo Clinic, Agilent, Becton Dickinson, Varian, Intermountain Health',
  },
  {
    title: 'Fractional CTO',
    body: "Technical leadership when you don't need — or can't yet justify — a full-time executive. Setting direction, making the calls that are expensive to get wrong, standing up how the team works, and telling you plainly what I think is going sideways.",
    proof: 'Intern to Partner over a decade; led a 47-person program to delivery',
  },
  {
    title: 'Accelerate the team you have',
    body: 'Developing, motivating, and unblocking engineers is the part of this job I have enjoyed most. Onboarding that actually works, mentorship with structure behind it, and the unglamorous business of turning capable individuals into a team that ships.',
    proof: '83 engineers onboarded; a report tree of 29 grown from associate to principal',
  },
  {
    title: 'Win the work',
    body: 'Solutioning, estimation, proposals, and standing in the room with your prospect. Technical buyers are easier to convince when the person across the table has built what is being proposed.',
    proof: '75+ pursuits in a year; best year sold over $15M',
  },
  {
    title: 'Just build it',
    body: 'Firmware, backend, frontend, mobile, infrastructure, and increasingly the AI layer on top. I have shipped in all of them, which is why my estimates hold up — and why I can pick up the tools and do the work myself when that is simply the fastest path.',
    proof: 'CAN-bus firmware through GraphQL platforms and document processing pipelines',
  },
  {
    title: 'A second opinion',
    body: "Sometimes you need someone with no stake in the outcome to read the plan and tell you what they'd worry about. Short engagements, straight answers, no attempt to turn it into something bigger.",
    proof: 'A decade of watching projects succeed and fail up close',
  },
]
</script>

<template>
  <div class="pitch">
    <section class="pitch__hero">
      <p class="pitch__eyebrow">Taking time off &mdash; still listening</p>
      <h2 class="pitch__headline">
        I&rsquo;ve spent a decade doing this inside one company.
        <span class="pitch__accent">Now I&rsquo;m doing it on my own.</span>
      </h2>
      <p class="pitch__lede">
        Intern to Partner. Firmware to enterprise architecture. Writing the
        code to selling eight-figure programs. Those are usually four
        different people.
      </p>
      <p class="pitch__lede">
        What I&rsquo;m after now is work that&rsquo;s genuinely interesting:
        meaningful problems, novel ones, the kind nobody has a template for.
        I don&rsquo;t much care how big it is or what industry it&rsquo;s in.
        I&rsquo;m taking some real time off through the rest of the year, but
        I&rsquo;m already helping a few people think through ideas &mdash; so
        if you&rsquo;ve got one, tell me about it.
      </p>
      <a class="pitch__cta" :href="mailto">
        Tell me what you&rsquo;re working on
        <span class="pitch__cta-arrow" aria-hidden="true">&rarr;</span>
      </a>
      <p class="pitch__note">
        No pitch deck required. If I&rsquo;m not the right person I&rsquo;ll
        tell you, and I probably know who is.
      </p>
    </section>

    <section class="pitch__services">
      <h3 class="pitch__services-title">Where I can help</h3>
      <ul class="services">
        <li v-for="s in SERVICES" :key="s.title" class="service">
          <h4 class="service__title">{{ s.title }}</h4>
          <p class="service__body">{{ s.body }}</p>
          <p class="service__proof">{{ s.proof }}</p>
        </li>
      </ul>
    </section>

    <section class="pitch__closer">
      <p>
        Not sure what you need yet? That&rsquo;s usually the most useful
        conversation to have.
      </p>
      <a class="pitch__cta pitch__cta--ghost" :href="mailto">
        Start a conversation
      </a>
    </section>
  </div>
</template>

<style scoped>
.pitch__hero {
  max-width: 46rem;
  margin-bottom: 4rem;
}

.pitch__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1rem;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-orange);
  font-weight: 600;
}

.pitch__eyebrow::before {
  content: '';
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: var(--color-orange);
  box-shadow: 0 0 0 3px rgba(224, 139, 74, 0.2);
}

.pitch__headline {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1.15;
  margin: 0 0 1.25rem;
  color: var(--color-text);
}

.pitch__accent {
  color: var(--color-orange);
  font-style: italic;
  display: block;
}

.pitch__lede {
  margin: 0 0 2rem;
  font-size: 1.1rem;
  line-height: 1.75;
  color: var(--color-text-muted);
}

.pitch__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--color-orange);
  color: var(--color-bg-deep);
  font-weight: 600;
  font-size: 1rem;
  padding: 0.85rem 1.5rem;
  border-radius: var(--radius-md);
  transition:
    background 0.18s ease,
    transform 0.18s ease;
}

.pitch__cta:hover {
  background: #efa76b;
  color: var(--color-bg-deep);
  transform: translateY(-1px);
}

.pitch__cta:focus-visible {
  outline: 2px solid var(--color-tan);
  outline-offset: 3px;
}

.pitch__cta-arrow {
  transition: transform 0.18s ease;
}

.pitch__cta:hover .pitch__cta-arrow {
  transform: translateX(3px);
}

.pitch__cta--ghost {
  background: transparent;
  border: 1px solid var(--color-orange);
  color: var(--color-orange);
}

.pitch__cta--ghost:hover {
  background: rgba(224, 139, 74, 0.1);
  color: var(--color-orange);
}

.pitch__note {
  margin: 1rem 0 0;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  font-style: italic;
}

.pitch__services-title {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.6vw, 2rem);
  margin: 0 0 1.5rem;
  color: var(--color-text);
}

.services {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
  gap: 1rem;
}

.service {
  background: var(--color-bg-elev);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s ease;
}

.service:hover {
  border-color: rgba(212, 184, 138, 0.35);
}

.service__title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  margin: 0 0 0.6rem;
  color: var(--color-text);
  line-height: 1.25;
}

.service__body {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--color-text-muted);
  flex: 1;
}

.service__proof {
  margin: 1rem 0 0;
  padding-top: 0.85rem;
  border-top: 1px solid var(--color-border);
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--color-tan);
}

.pitch__closer {
  margin-top: 4rem;
  padding: 2.5rem;
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-md);
  text-align: center;
}

.pitch__closer p {
  margin: 0 0 1.5rem;
  font-size: 1.1rem;
  color: var(--color-text);
  font-family: var(--font-display);
}
</style>
