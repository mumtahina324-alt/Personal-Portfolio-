import profile from "../../assets/konika.png";

export default function HeroImg() {
  return (
    <div className="relative w-70 h-70 xl:w-120 xl:h-120 flex items-center justify-center">
      {/* Image Circle Wrapper */}
      <div className="w-[75%] h-[75%] rounded-full overflow-hidden flex items-center justify-center relative z-10">
        <img
          src={profile}
          alt="profile"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Rotating dashed circle */}
      <svg
        className="absolute inset-0 w-full h-full animate-spin-slow glow"
        viewBox="0 0 500 500"
        fill="none"
      >
        <circle
          cx="250"
          cy="250"
          r="190"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="8 15"
        />
      </svg>
    </div>
  );
}
