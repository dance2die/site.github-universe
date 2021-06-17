import ViewAllButton from '../ViewAllButton';
import DeveloperChannelPreviewList from './DeveloperChannelPreviewList';

export default function DeveloperChannel() {
  return (
    <section className="bg-surface text-on-surface p-4">
      <header>
        <h4
          className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-200
          inline-block
          "
        >
          Developer Channel
        </h4>
        <p className="pt-4">
          Sessions tailored toward open source contributors and maintainers
          running projects of all sizes, as well as developers looking to
          understand the latest software tools, techniques, and best practices.
        </p>
      </header>
      <div className="mt-4">
        <ViewAllButton gradient="267.91deg, #ffe57f 9.35%, #ff7170 96.48%" />
      </div>
      <DeveloperChannelPreviewList />
    </section>
  );
}
