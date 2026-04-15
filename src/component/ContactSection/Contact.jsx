import Contact from "./ContactMe";
import InputContact from "./InputContact";

export default function contact() {
  return (
    <section className="container mx-auto py-14 px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Get In </span>
            <span className="bg-linear-to-r from-purple-600 to-emerald-400 bg-clip-text text-transparent inline-block">
              Touch
            </span>
          </h2>
          <p className="text-slate-400 mt-3">
            Let’s connect and discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InputContact />

          <Contact />
        </div>
      </div>
    </section>
  );
}
