<script setup lang="ts">
import photoUrl from '@/assets/profile.png'
</script>

<template>
  <section class="about">
    <div class="about__inner">
      <div class="about__photo">
        <img :src="photoUrl" alt="Portrait of Ben Moore" class="about__photo-img" />
      </div>
      <div class="about__text">
        <h2 class="about__heading">A little about me</h2>
        <p>
          I constantly enjoy learning, exploring, and doing all kinds of
          different things &mdash; from building software to climbing mountains
          to making delicious cocktails I&rsquo;ve never tried before. 
        </p>
        <p>
          This site is where I share my knowledge, experiences, and life with
          anyone who&rsquo;s interested in following along. Come join me on this journey!
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 5rem 1.5rem;
  display: flex;
  justify-content: center;
}

.about__inner {
  max-width: var(--max-width);
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}

.about__photo {
  width: clamp(15rem, 26vw, 22rem);
  height: clamp(15rem, 26vw, 22rem);
  border-radius: 50%;
  overflow: hidden;
  display: block;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
}

.about__photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.45) translate(0, 15%);
  transform-origin: center;
}

.about__heading {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  margin: 0 0 1rem;
  color: var(--color-text);
}

.about__text p {
  margin: 0 0 1rem;
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  line-height: 1.7;
  color: var(--color-text-muted);
  max-width: 36rem;
}

.about__text p:last-child {
  margin-bottom: 0;
}

@media (max-width: 720px) {
  .about__inner {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }

  .about__text p {
    text-align: left;
  }
}
</style>
