const blobs = [
  {
    size: 560,
    color: "#1DB954",
    top: "-8%",
    left: "-8%",
  },
  {
    size: 420,
    color: "#00E5A8",
    top: "58%",
    right: "-5%",
  },
  {
    size: 360,
    color: "#0EA5E9",
    bottom: "-6%",
    left: "34%",
  },
];

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black"
    >
      {blobs.map((blob, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.color,
            opacity: 0.12,
            filter: "blur(140px)",
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
          }}
        />
      ))}

      {/* GRID */}
      <div
        className="
          absolute inset-0
          opacity-[0.025]
          bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
          bg-[size:72px_72px]
        "
      />

      {/* NOISE */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
    </div>
  );
}