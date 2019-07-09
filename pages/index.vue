<template>
  <masonry class="showcase"
           :cols="3"
           :gutter="30"
  >
    <div v-for="(item, index) in items" :key="index">Item: {{ index + 1 }}</div>
  </masonry>
</template>

<script>
import gql from 'graphql-tag';

export default {
  components: {
  },

  apollo: {
    allDatoCmsWork: gql`query IndexQuery {
  work(orderBy: position_ASC) {
    edges {
      node {
        id
        title
        slug
        excerpt
        coverImage {
          width
          height
          src
          #fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
          #  ...GatsbyDatoCmsSizes
          #}
        }
      }
    }
  }
}
   `
  }

};
</script>
