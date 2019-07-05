<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },


  apollo: {
    allPosts: gql`query LayoutQuery
{
  _site {
    globalSeo {
      siteName
    }
    faviconMetaTags {
      ...GatsbyDatoCmsFaviconMetaTags
    }
  }
  home {
    _seoMetaTags {
      ...GatsbyDatoCmsSeoMetaTags
    }
    introText(markdown: true)
    copyright
  }
  allSocialProfiles(locale: en, orderBy: position_ASC) {
    profileType
    url
  }
}
`
  }

};
</script>
