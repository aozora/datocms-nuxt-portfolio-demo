import gql from 'graphql-tag';

export const datoCmsFaviconMetaTags = gql`
  fragment GatsbyDatoCmsFaviconMetaTags on DatoCmsFaviconMetaTags {
    tags
  }
`;
