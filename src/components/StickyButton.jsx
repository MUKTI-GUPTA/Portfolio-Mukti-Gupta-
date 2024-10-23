import { FaFileDownload } from "react-icons/fa";
// import resume from "../assets/Mukti_Gupta_ Resume.pdf";


const StickyButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href={resume}
        download="MuktiGupta.pdf"
        className="bg-slateblue hover:bg-blue-600 text-white font-medium py-3
         px-5 rounded-full shadow-lg flex items-center space-x-2 transition duration-300
          ease-in-out transform hover:scale-105"
      >
        <FaFileDownload className="w-5 h-4" />
        <span>Resume</span>
      </a>
    </div>
  );
};

export default StickyButton;
