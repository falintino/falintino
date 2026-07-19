type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function Button({ href, children }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
      inline-flex
      items-center
      justify-center
      rounded-full
      bg-[#1DB954]
      px-8
      py-4
      font-semibold
      text-white
      transition-all
      duration-300
      hover:scale-105
      hover:bg-[#1ed760]
      hover:shadow-[0_0_30px_rgba(29,185,84,.45)]
      "
    >
      {children}
    </a>
  );
}