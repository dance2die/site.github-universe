import ViewAllButton from '../ViewAllButton';
import EnterpriseChannelPreviewList from './EnterpriseChannelPreviewList';

const gradient = '92.05deg, #BCA1F7 12.09%, #E577B4 42.58%, #FF7170 84.96%';

export default function EnterpriseChannel() {
  return (
    <section className="bg-surface text-on-surface p-4">
      <header>
        <h4
          className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-red-400
          inline-block
          "
        >
          Enterprise Channel
        </h4>
        <p className="pt-4">
          Hear from industry experts on transformation, security, scalability,
          and productivity and learn how to build like the best.
        </p>
      </header>
      <div className="mt-4">
        <ViewAllButton gradient={gradient} />
      </div>
      <EnterpriseChannelPreviewList backgroundGradient={gradient} />
    </section>
  );
}
