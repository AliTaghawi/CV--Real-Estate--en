import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full p-4.5 xl:px-0 bg-zinc-50/50 dark:bg-zinc-800/50 border-t border-zinc-300 dark:border-zinc-600">
      <div className="max-w-7xl mx-auto flex gap-4">
        <div className="w-full text-end">
          <p>FullStack Real State webapp created for CV &copy;</p>
          <div className="mt-4">
            <span>created with: </span>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-700 visited:text-cyan-900"
            >
              Next.js
            </a>
            {", "}
            <a
              href="http://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-700 visited:text-cyan-900"
            >
              TailwindCSS
            </a>
            {" and ... "}
          </div>
        </div>
        <span className="w-0.5 bg-zinc-300 "></span>
        <div className="w-full">
          <p>Sayed Ali Taghawi</p>
          <div className="flex items-center gap-4 mt-4 text-xl text-cyan-700">
            <a
              href="https://github.com/AliTaghawi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="http://www.linkedin.com/in/ali-taghawi-29360b338"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:marshaltaghawi@gmail.com" className="text-2xl">
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
