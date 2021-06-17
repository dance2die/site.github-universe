import SessionPreviewList from '../Preview/SessionPreviewList';

const previewData = [
  {
    title: 'Security: Workshop 1 - DevSecOps automation with GHAS',
    onDemandTag: 'on demand',
    speakers: [''],
    channel: 'Workshops',
    url:
      'https://githubuniverse.com/security-workshop-1-devsecops-automation-with-ghas/'
  },
  {
    title:
      'Security: Workshop 2 - Finding security vulnerabilities in C/C++ with CodeQL',
    onDemandTag: 'on demand',
    speakers: [''],
    channel: 'Workshops',
    url:
      'https://githubuniverse.com/security-workshop-2-finding-security-vulnerabilities-in-c-c-with-codeql/'
  },
  {
    title:
      'Professional Services: Workshop 1 - Automate your workflow using GitHub Actions and GitHub Packages',
    onDemandTag: 'on demand',
    speakers: [''],
    channel: 'Workshops',
    url:
      'https://githubuniverse.com/professional-services-workshop-1-automate-your-workflow-using-github-actions-and-github-packages/'
  },
  {
    title:
      'EcoSystems: Workshop 1 - Connect machines and IoT using the OAuth device auth flow',
    onDemandTag: 'on demand',
    speakers: [''],
    channel: 'Workshops',
    url:
      'https://githubuniverse.com/ecosystems-workshop-1-connect-machines-and-iot-using-the-oauth-device-auth-flow/'
  },
  {
    title:
      'Professional Services: Workshop 2 - How to keep Git monorepos manageable',
    onDemandTag: 'on demand',
    speakers: [''],
    channel: 'Workshops',
    url:
      'https://githubuniverse.com/professional-services-workshop-2-how-to-keep-git-monorepos-manageable/'
  }
];

function WorkshopsPreviewList({ backgroundGradient }) {
  return (
    <SessionPreviewList
      previewData={previewData}
      backgroundGradient={backgroundGradient}
    />
  );
}

export default WorkshopsPreviewList;
