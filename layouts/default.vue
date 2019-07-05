<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  head: {
    // titleTemplate: `%s - ${this.layout._site.globalSeo.siteName}`,
    // title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      // ...this.getfaviconMetaTags()
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },

  apollo: {
    layout: gql`query LayoutQuery
{
  _site {
    globalSeo {
      siteName
      facebookPageUrl
      # fallbackSeo
      titleSuffix
      twitterAccount
    }
    faviconMetaTags {
      attributes
      content
      tag
    }
  }
  home {
    _seoMetaTags {
      attributes
      content
      tag
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
  },

  methods: {
    getfaviconMetaTags: function () {
      if (!this.layout) {
        return [];
      }

      return this.layout._site.faviconMetaTags.filter((meta) => {
        return { rel: meta.rel, type: meta.type, sizes: meta.sizes };
      });
    }
  }

};
</script>
