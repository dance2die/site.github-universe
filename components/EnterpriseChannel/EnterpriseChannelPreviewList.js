import SessionPreviewList from '../Preview/SessionPreviewList';

const previewData = [
  {
    title: 'Introducing the Enterprise channel',
    onDemandTag: 'on demand',
    speakers: ['Dana Lawson', 'Martin Woodward'],
    channel: 'Enterprise',
    url: 'https://githubuniverse.com/Introducing-the-Enterprise-channel/'
  },
  {
    title: 'Welcome to Codespaces',
    onDemandTag: 'on demand',
    speakers: ['Bailey Brooks', 'Matthew Isabel'],
    channel: 'Enterprise',
    url: 'https://githubuniverse.com/welcome-to-codespaces/'
  },
  {
    title: 'Youtube-dl: maintainers and their impact',
    onDemandTag: 'on demand',
    speakers: ['Abby Vollmer', 'Segrey M.', 'Remita Amine', 'Gabriela Ivens'],
    channel: 'Enterprise',
    url: 'https://githubuniverse.com/Youtube-dl-maintainers-and-their-impact/'
  },
  {
    title: 'Delivering code to car with Tekton and GitHub Advanced Security',
    onDemandTag: 'on demand',
    speakers: ['Dan Hebberd', 'Gwenn Etourneau'],
    channel: 'Enterprise',
    url:
      'https://githubuniverse.com/Delivering-code-to-car-with-Tekton-and-GitHub-Advanced-Security/'
  },
  {
    title: 'Security is a feature',
    onDemandTag: 'on demand',
    speakers: ['Keith Hoodlet'],
    channel: 'Enterprise',
    url: 'https://githubuniverse.com/Security-is-a-feature/'
  },
  {
    title: 'Accelerating software development safely with GitHub Enterprise',
    onDemandTag: 'on demand',
    speakers: ['Maya Ross'],
    channel: 'Enterprise',
    url: ''
  },
  {
    title: 'GitHub Advanced Security round-up',
    onDemandTag: 'on demand',
    speakers: ['Justin Hutchings'],
    channel: 'Enterprise',
    url: ''
  },
  {
    title:
      'From scientific poster sessions to GitHub global actions: Accelerating digital innovations at 3M',
    onDemandTag: 'on demand',
    speakers: ['Hung Brown Ton'],
    channel: 'Enterprise',
    url: ''
  },
  {
    title: 'Managing test environments with GitOps and Actions',
    onDemandTag: 'on demand',
    speakers: ['Andreas Prang', 'Daneil Fassbender'],
    channel: 'Enterprise',
    url: ''
  }
];

function EnterpriseChannelPreviewList({backgroundGradient}) {
  return (
    <SessionPreviewList
      previewData={previewData}
      backgroundGradient={backgroundGradient}
    />
  );
}

export default EnterpriseChannelPreviewList;
