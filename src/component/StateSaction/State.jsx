import { stateData } from "../../data/stateData";

export default function State() {
  return (
    <section className="container mx-auto px-6 py-8 border-y border-emerald-400/30">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stateData.map((item, index) => (
          <div key={index} className="flex items-center gap-3 justify-center">
            <h2 className="text-4xl font-bold text-emerald-400">
              {item.value}
            </h2>

            <div className="h-10 w-px bg-emerald-400/70"></div>

            <p className="text-sm text-white max-w-22.5 leading-tight">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
