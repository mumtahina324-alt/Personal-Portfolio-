import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function ContactMe() {
  const contacts = [
    {
      icon: <Mail size={20} className="text-emerald-400" />,
      title: "Email",
      value: "mumtahina324@gmail.com",
      link: "mailto:mumtahina324@gmail.com",
    },
    {
      icon: <Linkedin size={20} className="text-emerald-400" />,
      title: "LinkedIn",
      value: "Mumtahina Akter Konika",
      link: "https://www.linkedin.com/in/mumtahina-akter-konika-71048435a/",
    },
    {
      icon: <Github size={20} className="text-emerald-400" />,
      title: "Github",
      value: "mumtahina324-alt",
      link: "https://github.com/mumtahina324-alt",
    },
    {
      icon: <MapPin size={20} className="text-emerald-400" />,
      title: "Location",
      value: "Rajshahi, Bangladesh",
    },
  ];

  return (
    <div className="mt-10 lg:mt-16">
      <div className="space-y-4">
        {contacts.map((item, index) => (
          <a
            key={index}
            href={item.link || "#"}
            target="_blank"
            className="flex items-center gap-4 bg-emerald-400/10 backdrop-blur rounded-xl p-6 border border-emerald-700/50 hover:border-emerald-400/40 transition"
          >
            <div className="w-10 h-10 flex items-center justify-center border border-emerald-400 rounded-lg bg-emerald-900/10">
              {item.icon}
            </div>

            <div>
              <p className="text-sm text-emerald-400">{item.title}</p>
              <p className="text-slate-200 font-medium">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
