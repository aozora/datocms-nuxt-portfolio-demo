<template>
  <masonry class="showcase"
           :cols="3"
           :gutter="30"
  >
    <div v-for="(item, index) in items" :key="index">Item: {{index + 1}}</div>
  </masonry>
</template>

<script>
import gql from 'graphql-tag';

export default {
  components: {
  },

  apollo: {
    allDatoCmsWork: gql`query IndexQuery {
  work(sort: { fields: [position], order: ASC }) {
    edges {
      node {
        id
        title
        slug
        excerpt
        coverImage {
          fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsSizes
          }
        }
      }
    }
  }
}
   `
  }

}
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
