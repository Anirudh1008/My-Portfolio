import { useEffect } from "react";
import {
  Linkedin,
  Github,
  ExternalLink,
  Mail,
  Phone,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/anirudh-chadaram-40570929a/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },

  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "@Anirudhch",
    icon: Github,
    url: "https://github.com/Anirudh1008",
    color: "#FFFFFF",
    gradient: "from-[#333] to-[#24292e]",
  },

  {
    name: "Email",
    displayName: "Email",
    subText: "anirudhchadaram078",
    icon: Mail,
    url: "mailto:anirudhchadaram078@gmail.com",
    color: "#8B5CF6",
    gradient: "from-[#8B5CF6] to-[#A78BFA]",
  },

  {
    name: "Phone",
    displayName: "Phone",
    subText: "+91 9963532405",
    icon: Phone,
    url: "tel:+919963532405",
    color: "#06B6D4",
    gradient: "from-[#06B6D4] to-[#22D3EE]",
    isPrimary: true,
  },
];

const SocialLinks = () => {
  const primaryLinks = socialLinks.filter(l => l.isPrimary);
  const otherLinks   = socialLinks.filter(l => !l.isPrimary);

  useEffect(() => {
    AOS.init({ offset: 10 });
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6">
        Connect With Me
      </h3>

      {/* 1️⃣ LinkedIn BIG on top */}
      {primaryLinks
        .filter(l => l.name === "LinkedIn")
        .map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all mb-4"
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-r ${link.gradient}`} />

            <div className="relative flex items-center gap-4">
              <link.icon className="w-6 h-6" style={{ color: link.color }} />
              <div>
                <p className="text-lg font-bold text-white">
                  {link.displayName}
                </p>
                <p className="text-sm text-gray-400">
                  {link.subText}
                </p>
              </div>
            </div>

            <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white" />
          </a>
        ))}

      {/* 2️⃣ Small cards in the middle */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 mb-4">
        {otherLinks.map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-r ${link.gradient}`} />

            <div className="relative p-2 rounded-lg">
              <link.icon className="w-5 h-5" style={{ color: link.color }} />
            </div>

            <div>
              <p className="font-bold text-white">{link.displayName}</p>
              <p className="text-sm text-gray-400">{link.subText}</p>
            </div>

            <ExternalLink className="ml-auto text-gray-500 group-hover:text-white" />
          </a>
        ))}
      </div>

      {/* 3️⃣ Phone BIG at bottom */}
      {primaryLinks
        .filter(l => l.name === "Phone")
        .map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all"
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-r ${link.gradient}`} />

            <div className="relative flex items-center gap-4">
              <link.icon className="w-6 h-6" style={{ color: link.color }} />
              <div>
                <p className="text-lg font-bold text-white">
                  {link.displayName}
                </p>
                <p className="text-sm text-gray-400">
                  {link.subText}
                </p>
              </div>
            </div>

            <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white" />
          </a>
        ))}
    </div>
  );
};

export default SocialLinks;
