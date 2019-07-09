import gql from 'graphql-tag';

export const datoCmsAssetResolutions = gql`
  fragment DatoCmsResolutions on DatoCmsFixed {
    base64
    width
    height
    src
    srcSet
  }
`;

export const datoCmsAssetResolutionsTracedSVG = gql`
  fragment DatoCmsResolutions_tracedSVG on DatoCmsFixed {
    tracedSVG
    width
    height
    src
    srcSet
  }
`;

export const datoCmsAssetResolutionsNoBase64 = gql`
  fragment DatoCmsResolutions_noBase64 on DatoCmsFixed {
    width
    height
    src
    srcSet
  }
`;

export const datoCmsAssetSizes = gql`
  fragment DatoCmsSizes on DatoCmsFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`;

export const datoCmsAssetSizesTracedSVG = gql`
  fragment DatoCmsSizes_tracedSVG on DatoCmsFluid {
    tracedSVG
    aspectRatio
    src
    srcSet
    sizes
  }
`;

export const datoCmsAssetSizesNoBase64 = gql`
  fragment DatoCmsSizes_noBase64 on DatoCmsFluid {
    aspectRatio
    src
    srcSet
    sizes
  }
`;

export const datoCmsAssetFixed = gql`
  fragment DatoCmsFixed on DatoCmsFixed {
    base64
    width
    height
    aspectRatio
    src
    srcSet
  }
`;

export const datoCmsAssetFixedTracedSVG = gql`
  fragment DatoCmsFixed_tracedSVG on DatoCmsFixed {
    tracedSVG
    width
    height
    aspectRatio
    src
    srcSet
  }
`;

export const datoCmsAssetFixedNoBase64 = gql`
  fragment DatoCmsFixed_noBase64 on DatoCmsFixed {
    width
    height
    src
    srcSet
    aspectRatio
  }
`;

export const datoCmsAssetFluid = gql`
  fragment DatoCmsFluid on DatoCmsFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`;

export const datoCmsAssetFluidTracedSVG = gql`
  fragment DatoCmsFluid_tracedSVG on DatoCmsFluid {
    tracedSVG
    aspectRatio
    src
    srcSet
    sizes
  }
`;

export const datoCmsAssetFluidNoBase64 = gql`
  fragment DatoCmsFluid_noBase64 on DatoCmsFluid {
    aspectRatio
    src
    srcSet
    sizes
  }
`;
