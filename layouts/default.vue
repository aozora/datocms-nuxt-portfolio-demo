<template>
  <div class="container">
    <div v-if="query" class="container__sidebar">
      <div class="sidebar">
        <h6 class="sidebar__title">
          <nuxt-link to="/">{{ query.site.globalSeo.siteName }}</nuxt-link>
        </h6>
        <div class="sidebar__intro" v-html="query.home.introText"></div>

        <ul class="sidebar__menu">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
        </ul>

        <p class="sidebar__social">
          <a v-for="profile in query.allSocialProfiles"
            :key="profile.profileType"
            :href="profile.url"
            target="blank"
            :class="`social social--${profile.profileType.toLowerCase()}`"
          >
          </a>
        </p>

        <div class="sidebar__copyright" v-text="query.home.copyright"></div>
      </div>
    </div>

    <div class="container__body">
      <div class="container__mobile-header">
        <div class="mobile-header">
          <div class="mobile-header__menu">
            <nuxt-link to="#" data-js="toggleSidebar"/>
          </div>
          <div class="mobile-header__logo">
            <nuxt-link to="/">Home</nuxt-link>
          </div>
        </div>
      </div>

      <nuxt/>

    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { DatoCmsSeoMetaTags } from '../apollo/fragments/seo';
import { query } from '../apollo/queries/defaultQuery';

export default {
  head () {
    return {
      // titleTemplate: `%s - ${this.layout._site.globalSeo.siteName}`,
      // title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        ...this.getfaviconMetaTags()
        // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
      ]
    };
  },

  data () {
    return {
      loading: false,
      query: undefined
    };
  },

  apollo: {
    site: gql`query DefaultResults
{
  site: _site {
    globalSeo {
      siteName
      facebookPageUrl
      # fallbackSeo
      titleSuffix
      twitterAccount
    }
    faviconMetaTags {
      ...DatoCmsSeoMetaTags
    }
  }
}
${DatoCmsSeoMetaTags}
`,
    home: gql`
 {
   home {
    seoMetaTags: _seoMetaTags {
      ...DatoCmsSeoMetaTags
    }
    introText(markdown: true)
    copyright
  }
 }
${DatoCmsSeoMetaTags}
`,
    allSocialProfiles: gql`
{
  allSocialProfiles(locale: en, orderBy: position_ASC) {
    profileType
    url
  }
}`
  },

  async mounted () {
    this.loading = true;
    const data = await this.$apollo.query({ query });
    this.query = data.data;
    this.loading = false;
  },

  methods: {
    // eslint-disable-next-line object-shorthand
    getfaviconMetaTags: function () {
      if (!this.query) {
        return [];
      }

      return this.query.site.faviconMetaTags.map((meta) => {
        return { rel: meta.attributes.rel, type: meta.attributes.type, sizes: meta.attributes.sizes, href: meta.attributes.href };
      });
    }
  }

};
</script>
