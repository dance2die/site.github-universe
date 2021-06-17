import SessionPreviewList from '../Preview/SessionPreviewList';

const previewData = [
  {
    title: 'Introducing the Developer channel',
    onDemandTag: 'on demand',
    speakers: ['Brian Dougals', 'Kath Korevec'],
    channel: 'Developer',
    url: 'https://githubuniverse.com/Introducing-the-Developer-channel/'
  },
  {
    title: 'Catching vulnerabilities early with GitHub',
    onDemandTag: 'on demand',
    speakers: ['Maya Kaczorowski', 'William Bartholomew'],
    channel: 'Developer',
    url:
      'https://githubuniverse.com/Catching-vulnerabilities-early-with-GitHub/'
  },
  {
    title: 'GitHub Codespaces: beyond the basics',
    onDemandTag: 'on demand',
    speakers: ['Allison Weins'],
    channel: 'Developer',
    url: 'https://githubuniverse.com/GitHub-Codespaces-beyond-the-basics/'
  },
  {
    title: 'The Metasploit Framework',
    onDemandTag: 'on demand',
    speakers: ['Spencer McIntyre'],
    channel: 'Developer',
    url: 'https://githubuniverse.com/The-Metasploit-Framework/'
  },
  {
    title: 'So you committed a secret...',
    onDemandTag: 'on demand',
    speakers: ['Sasha Rosenbaum'],
    channel: 'Developer',
    url: 'https://githubuniverse.com/So-you-committed-a-secret/'
  },
  {
    title: 'Expanding GitHub’s security capabilities through integrations',
    onDemandTag: 'on demand',
    speakers: ['Jose Palafox', 'Alfredo Deza', 'Sara Joshi', 'Jaap Karan Sigh'],
    channel: 'Developer',
    url:
      'https://githubuniverse.com/Expanding-GitHubs-security-capabilities-through-integrations/'
  },
  {
    title: 'Community-powered security analysis with CodeQL',
    onDemandTag: 'on demand',
    speakers: ['Bas Van Schaik', 'Xavier René-Corail'],
    channel: 'Developer',
    url:
      'https://githubuniverse.com/Community-powered-security-analysis-with-CodeQL/'
  }
];

function DeveloperChannelPreviewList() {
  return (
    <SessionPreviewList
      previewData={previewData}
      backgroundGradient={`267.91deg, #FFE57F 9.35%, #FF7170 96.48%`}
    />
  );
}

export default DeveloperChannelPreviewList;
