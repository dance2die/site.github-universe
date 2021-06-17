import ViewAllButton from '../ViewAllButton';
import PlayChannelPreviewList from './PlayChannelPreviewList';

const gradient = '92.7deg, #A2FACF -1.37%, #64ACFF 78.71%';

export default function PlayChannel() {
  return (
    <section className="bg-surface text-on-surface p-4">
      <header>
        <h4
          className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-blue-400
          inline-block
          "
        >
          Play Channel
        </h4>
        <p className="pt-4">
          Entertaining performances, tutorials, and unexpected stories, all
          driven by code.
        </p>
      </header>
      <div className="mt-4">
        <ViewAllButton gradient={gradient} />
      </div>
      <PlayChannelPreviewList backgroundGradient={gradient} />
    </section>
  );
}
