<template>
  <div class="container">
    <div class="container__sidebar">
      <div class="sidebar">
        <h6 class="sidebar__title">
          <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
        </h6>
        <div class="sidebar__intro" v-html="home.introText.childMarkdownRemark.html"/>

        <ul class="sidebar__menu">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
        </ul>

        <!--        <p class="sidebar__social">-->
        <!--          {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (-->
        <!--          <a-->
        <!--            key={profile.profileType}-->
        <!--            href={profile.url}-->
        <!--            target="blank"-->
        <!--            class={`social social&#45;&#45;${profile.profileType.toLowerCase()}`}-->
        <!--          > </a>-->
        <!--          ))}-->
        <!--        </p>-->

        <div class="sidebar__copyright" v-text="home.copyright"></div>
      </div>
    </div>

    <div class="container__body">
      <div class="container__mobile-header">
        <div class="mobile-header">
          <div class="mobile-header__menu">
            <nuxt-link to="#" data-js="toggleSidebar"/>
          </div>
          <div class="mobile-header__logo">
            <nuxt-link to="/">{{ _site.globalSeo.siteName }}</nuxt-link>
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
    site: gql`query LayoutQuery
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
  home {
    seoMetaTags: _seoMetaTags {
      ...DatoCmsSeoMetaTags
    }
    introText(markdown: true)
    copyright
  }
  allSocialProfiles(locale: en, orderBy: position_ASC) {
    profileType
    url
  }
}
${DatoCmsSeoMetaTags}
`
  },

  methods: {
    getfaviconMetaTags: function () {
      if (!this.site) {
        return [];
      }

      return this.site.faviconMetaTags.filter((meta) => {
        return { rel: meta.attributes.rel, type: meta.attributes.type, sizes: meta.attributes.sizes, href: meta.attributes.href };
      });
    }
  }

};
</script>
