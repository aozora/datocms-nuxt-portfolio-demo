import gql from 'graphql-tag';
import { DatoCmsSeoMetaTags } from '../fragments/seo';

export const query = gql`query DefaultResults
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
`;
