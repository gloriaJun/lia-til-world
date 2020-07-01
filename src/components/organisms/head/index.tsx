import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface IHeadProps {
  lang?: string;
  title?: string;
  description?: string;
}

const siteMetadataQuery = graphql`
  query siteMetadataQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

export default function Head({
  lang = 'en',
  title,
  description,
}: IHeadProps): JSX.Element {
  const {
    site: { siteMetadata },
  } = useStaticQuery(siteMetadataQuery);

  return (
    <Helmet>
      <html lang={lang} />
      <meta charSet="utf-8" />
      <title>{title || siteMetadata.title}</title>
      <meta
        name="description"
        content={description || siteMetadata.description}
      />
    </Helmet>
  );
}
