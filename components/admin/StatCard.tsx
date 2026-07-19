import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
}

export default function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6 transition hover:border-green-500">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-zinc-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-black">
            {value}
          </h2>

        </div>

        <div className="rounded-2xl bg-green-500/15 p-4 text-green-400">
          {icon}
        </div>

      </div>

    </div>
  );
}