import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { PROFILE } from '../constants';

const Home: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";     // Must be inside public/
    link.download = "CV.pdf";
    link.click();
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 items-start animate-fade-in">
      
      {/* LEFT SIDE – IMAGE + SPECIALTY + DOWNLOAD */}
      <div className="w-full md:w-[300px] flex-shrink-0 text-center">
        <div className="relative group mx-auto w-[250px] h-[250px] md:w-[280px] md:h-[280px]">
          <img
            src="/Achinthi.jpeg"   // IMPORTANT: Vite static assets must use /filename from public/
            alt={PROFILE.name}
            className="w-full h-full object-cover rounded-full border-8 border-primary shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:border-secondary"
          />
        </div>

        <div className="mt-6 py-3 border-t border-b border-dashed border-gray-400">
          <p className="text-accent font-bold text-lg font-sans">
            {PROFILE.specialty}
          </p>
        </div>

        <button
          onClick={handleDownload}
          className="mt-6 w-full bg-primary text-white font-serif font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition-all transform hover:-translate-y-1"
        >
          Download CV 📥
        </button>
      </div>

      {/* RIGHT SIDE – PROFILE DETAILS */}
      <div className="flex-grow">
        <h1 className="font-serif text-5xl md:text-6xl text-primary mb-2 border-b-4 border-secondary inline-block pb-2">
          {PROFILE.name}
        </h1>

        <h2 className="font-serif text-2xl text-gray-600 mb-6">
          {PROFILE.title}
        </h2>

        <div className="prose prose-lg text-text font-sans leading-relaxed">
          <p className="mb-4">
            A dedicated and passionate agricultural scientist with a strong foundation in plant biology and advanced research methodologies. My primary expertise lies in <strong className="text-primary">Tissue Culture</strong>, a vital technique for mass-producing disease-free, high-quality plant material and advancing crop improvement. Driven by a commitment to sustainable agriculture and food security in Sri Lanka.
          </p>

          <p className="mb-6">
            Currently pursuing MPhil research focused on optimizing micropropagation protocols for indigenous crops.
          </p>
        </div>

        {/* QUICK CONTACT + FOCUS AREAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          
          {/* Focus Areas Box */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary">
            <h3 className="font-serif text-xl font-bold mb-2">Focus Areas</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Plant Tissue Culture</li>
              <li>Molecular Biology</li>
              <li>Sustainable Agriculture</li>
              <li>Scientific Writing</li>
            </ul>
          </div>

          {/* Quick Contact Box */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
            <h3 className="font-serif text-xl font-bold mb-2">Quick Contact</h3>

            <p className="text-gray-700">
              📧 <a
                href={`mailto:${PROFILE.email}`}
                className="text-primary underline"
              >
                {PROFILE.email}
              </a>
            </p>

            <p className="text-gray-700">📞 {PROFILE.phone}</p>

            <p className="text-gray-700 flex items-center gap-2">
              <span className="text-primary text-2xl">
                <FaLinkedin />
              </span>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
