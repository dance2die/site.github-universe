export default function Hero() {
  return (
    <section className="bg-black text-on-surface px-4">
      <h1
        className="text-5xl tracking-tight
      bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-300
      pt-14 inline-block
      "
      >
        That's a wrap!
      </h1>
      <p className="text-lg pt-6">
        Thank you to all that participated in GitHub Universe 2020, from
        speakers and hosts, to attendees, students, and sponsors. Now kick back
        and enjoy watching all Universe talks{' '}
        <a
          className="underline hover:text-gray-400 transition-colors duration-500 ease-in-out"
          href="https://githubuniverse.com/on-demand/"
        >
          on-demand
        </a>
        .
      </p>
      <div className="pt-6">
        {/* 56.25% is Aspect ratio padding bottom trick - https://css-tricks.com/aspect-ratio-boxes/ */}
        <div className="w-full relative h-0 overflow-hidden z-[1] pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full block"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2m9nUP-e8Co"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          />
        </div>
      </div>
    </section>
  );
}
