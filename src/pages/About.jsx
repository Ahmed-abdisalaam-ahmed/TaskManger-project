import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <div className="bg-slate-950 min-h-screen text-white pt-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About SwiftTask</h2>
        
        <div className="prose prose-invert lg:prose-xl">
          <p className="text-slate-400 mb-6">
            SwiftTask waxaa loo dhisay inuu u fududeeyo dadka mashquulka ah inay si hufan u maareeyaan shaqooyinkooda maalinlaha ah. 
            Waxaan rumeysanahay in maamulka shaqadu (Task Management) uu noqon karo mid fudud, qurux badan, oo caqli badan.
          </p>

          <h3 className="text-xl font-bold mb-4 text-blue-400">Maxaa naga gaar ah?</h3>
          <ul className="space-y-4 mb-10">
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span><strong>Timeline Focused:</strong> Waxaad awood u leedahay inaad u safarto "Past" iyo "Future" si aad u aragto halka aad marayso.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span><strong>AI Assistant:</strong> Kuma koobna kaliya qoraal, ee wuxuu kaa caawinayaa inaad fahanto shaqooyinka ugu muhiimsan.</span>
            </li>
          </ul>

          <div className="p-8 rounded-3xl bg-blue-600/5 border border-blue-600/20">
            <h3 className="text-lg font-bold mb-2">Our Vision</h3>
            <p className="text-slate-400 text-sm">
              Vision-kayagu waa inaan dhisno App-ka ugu dhaqsaha badan uguna caqliga badan ee laga isticmaalo gayiga Soomaaliyeed iyo caalamkaba.
            </p>
          </div>
        </div>
      </div>
      
    </div>
    <Footer />
    </>

  );
};

export default About;