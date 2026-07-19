type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-14">

      <p className="uppercase tracking-[6px] text-zinc-500 mb-3">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold">
        {title}
      </h2>

    </div>
  );
}