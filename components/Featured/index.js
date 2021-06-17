import FeaturedSessionPreviewList from './FeaturedSessionPreviewList';

export default function Featured() {
  return (
    <section className="bg-surface text-on-surface p-4">
      <header>
        <h4
          className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purcple-300 to-red-400 pt-14
          inline-block
          "
        >
          Featured
        </h4>
        <p className="pt-4">
          Watch the opening day keynote, featured sessions and daily highlights
          for a snapshot of Universe's biggest moments
        </p>
      </header>
      <FeaturedSessionPreviewList />
    </section>
  );
}
