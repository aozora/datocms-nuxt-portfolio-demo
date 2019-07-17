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

      <div class="actions">
        <button v-if="showMoreEnabled" @click="showMore">Show more</button>
      </div>
    </no-ssr>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const pageSize = 20;

export default {
  name: 'Home',

  data: () => ({
    page: 0,
    showMoreEnabled: true
  }),

  apollo: {
    allWorks: {
      query: gql`query WorkQuery ($page: Int, $pageSize: Int){
    allWorks (skip: $page, first: $pageSize){
        id
        title
        slug
        coverImage {
          alt
          url
        }
        excerpt(markdown: true)
      }
    }`,
      // Initial variables
      variables: {
        page: 0,
        pageSize
      }
    }
  },

  methods: {
    showMore () {
      this.page++;
      // Fetch more data and transform the original result
      this.$apollo.queries.allWorks.fetchMore({
        // New variables
        variables: {
          page: this.page,
          pageSize
        },
        // Transform the previous result with new data
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            this.showMoreEnabled = false;
            return previousResult;
          }

          const newWorks = fetchMoreResult.allWorks;
          // const hasMore = fetchMoreResult.allWorks.hasMore;
          this.showMoreEnabled = true;

          return {
            allWorks: [
              // __typename: previousResult.allWorks.__typename,
              // Merging the tag list
              ...previousResult.allWorks,
              ...newWorks
            ]
          };
        }
      });
    }
  }

};
</script>
