export default function Appbar() {
  return (
    <article className="flex justify-between items-center p-4 bg-surface text-on-surface border-b-2 border-gray-700">
      <section className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="font-bold tracking-tighter">Universe</span>
        <span className="tracking-tighter">2020</span>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#9a9c9f]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </article>
  );
}
