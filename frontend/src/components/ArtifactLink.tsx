import * as React from 'react';

/**
 * A component that renders an artifact URL as clickable link if URL is correct
 */
export const ArtifactLink: React.FC<{ artifactUri?: string }> = ({ artifactUri }) => {
  let clickableUrl: string | undefined;
  if (artifactUri) {
    if (artifactUri.startsWith('http:') || artifactUri.startsWith('https:')) {
      clickableUrl = artifactUri;
    }
  }

  if (clickableUrl) {
    // Opens in new window safely
    return (
      <a href={clickableUrl} target={'_blank'} rel='noreferrer noopener'>
        {artifactUri}
      </a>
    );
  } else {
    return <>{artifactUri}</>;
  }
};
