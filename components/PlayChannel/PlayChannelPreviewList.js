import SessionPreviewList from '../Preview/SessionPreviewList';

const previewData = [
  {
    title: 'Opening Performance',
    onDemandTag: 'on demand',
    speakers: ['Jay Weeks', 'Andrew Coppola', 'DJ Dave (aka Sarah Davis)'],
    channel: 'Play',
    url: 'https://githubuniverse.com/Opening-Performance/'
  },
  {
    title: 'Create kinetic simulations with Microbium',
    onDemandTag: 'on demand',
    speakers: ['Jay Weeks', 'Andrew Coppola'],
    channel: 'Play',
    url: 'https://githubuniverse.com/Create-kinetic-simulations-with-Microbium/'
  },
  {
    title:
      'Express yourself with code: Learn to live code beats and riffs with Sonic Pi',
    onDemandTag: 'on demand',
    speakers: ['Sam Aaron'],
    channel: 'Play',
    url:
      'https://githubuniverse.com/Express-yourself-with-code-Learn%20to%20live%20code%20beats%20and%20riffs%20with%20Sonic%20Pi/'
  },
  {
    title: 'Exploring generative spaces: a quickstart to generative art',
    onDemandTag: 'on demand',
    speakers: ['Sabine Wileuch'],
    channel: 'Play',
    url:
      'https://githubuniverse.com/Exploring-generative-spaces-a-quickstart-to-generative-art/'
  },
  {
    title: 'Nannou: creative coding with Rust',
    onDemandTag: 'on demand',
    speakers: ['Alexis André'],
    channel: 'Play',
    url: 'https://githubuniverse.com/Nannou-creative-coding-with-Rust/'
  }
];

function EnterpriseChannelPreviewList({ backgroundGradient }) {
  return (
    <SessionPreviewList
      previewData={previewData}
      backgroundGradient={backgroundGradient}
    />
  );
}

export default EnterpriseChannelPreviewList;
