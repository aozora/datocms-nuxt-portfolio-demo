<template>
  <div>
    <no-ssr>
      <masonry class="showcase"
               :cols="3"
               :gutter="30"
      >
        <div v-for="work in allWorks" :key="work.id">
          <figure class="card">
            <nuxt-link :to="`/works/${work.slug}`" class="card__image">
              <img :src="work.coverImage.url" :alt="work.coverImage.alt">
            </nuxt-link>
            <figcaption class="card__caption">
              <h6 class="card__title">
                <nuxt-link :to="`/works/${work.slug}`">{{ work.title }}</nuxt-link>
              </h6>
              <div class="card__description">
                <p v-html="work.excerpt"></p>
              </div>
            </figcaption>
          </figure>
        </div>
      </masonry>
    </no-ssr>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  components: {},

  apollo: {
    allWorks: gql`query WorkQuery {
    allWorks {
        id
        title
        slug
        coverImage {
          alt
          url
        }
        excerpt(markdown: true)
      }
    }
   `
  }

};
</script>
