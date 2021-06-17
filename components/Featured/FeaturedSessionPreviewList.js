import SessionPreviewList from '../Preview/SessionPreviewList';

const previewData = [
  {
    title: 'Opening keynote',
    onDemandTag: 'on demand',
    speakers: ['Nat Friedman'],
    channel: 'Featured',
    url: 'https://githubuniverse.com/opening-keynote/'
  },
  {
    title: 'GitHub in the enterprise: Velocity and the developer experience',
    onDemandTag: 'on demand',
    speakers: ['Erica Brescia'],
    channel: 'Featured',
    url:
      'https://githubuniverse.com/GitHub-in-the-enterprise-Velocity-and-the-developer-experience/'
  },
  {
    title: 'Kelsey, Kubernetes, and GitOps',
    onDemandTag: 'on demand',
    speakers: ['Kelsey Hightower'],
    channel: 'Featured',
    url: 'https://githubuniverse.com/Kelsey-Kubernetes-and-GitOps/'
  },
  {
    title: 'Day1: GitHub Universe Highlights Show with Kyle Daigle',
    onDemandTag: 'on demand',
    speakers: ['Kyle Daigle'],
    channel: 'Featured',
    url:
      'https://githubuniverse.com/Day-1-GitHub-Universe-Highlights-Show-with-Kyle-Daigle/'
  },
  {
    title: 'Day 2: GitHub Universe Highlights Show with Kyle Daigle',
    onDemandTag: 'on demand',
    speakers: ['Kyle Daigle'],
    channel: 'Featured',
    url:
      'https://githubuniverse.com/Day-2-GitHub-Universe-Highlights-Show-with-Kyle-Daigle/'
  },
  {
    title: 'Day 3: GitHub Universe Highlights Show with Kyle Daigle',
    onDemandTag: 'on demand',
    speakers: ['Kyle Daigle'],
    channel: 'Featured',
    url:
      'https://githubuniverse.com/Day-3-GitHub-Universe-Highlights-Show-with-Kyle-Daigle/'
  }
];

function FeaturedSessionPreviewList() {
  return (
    <SessionPreviewList
      previewData={previewData}
      backgroundGradient={`269.16deg,
    #ffe580 -15.83%,
    #ff7571 -4.97%,
    #ff7270 15.69%,
    #ea5dad 32.43%,
    #c2a0fd 50.09%,
    #9867f0 67.47%,
    #3bf0e4 84.13%,
    #33ce43 105.13%,
    #b2f4b6 123.24%`}
    />
  );
}

export default FeaturedSessionPreviewList;
