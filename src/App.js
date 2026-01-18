import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import CVPreview from './components/CVPreview';
import CVEditor from './components/CVEditor';
import { initialCVData } from './initialData';
import './index.css';

function App() {
  const [data, setData] = useState(initialCVData);

  const handleExportPDF = () => {
    const element = document.getElementById('cv-to-print');
    const opt = {
      margin: 0,
      filename: `CV_${data.details.name.replace(/\s+/g, '_')}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        scrollY: 0,
        windowWidth: 1200 // Ensure we capture the desktop view layout
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // New version of export logic
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center print:hidden z-10 sticky top-0">
        <div className="flex items-center gap-2">
          <span className="text-2xl" role="img" aria-label="cv">📝</span>
          <h1 className="text-xl font-bold text-gray-800">Mon CV Personnalisable</h1>
        </div>
        <button
          onClick={handleExportPDF}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition font-medium shadow-sm flex items-center gap-2"
        >
          <span>📄</span> Exporter en PDF (A4)
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden print:overflow-visible print:block print:h-auto">
        {/* Editor Sidebar */}
        <div className="w-1/3 min-w-[400px] max-w-[500px] border-r border-gray-200 bg-gray-50 overflow-hidden flex flex-col print:hidden shadow-inner">
          <CVEditor data={data} onChange={setData} />
        </div>

        {/* Preview Area */}
        <div className="flex-1 overflow-auto bg-gray-200 p-8 print:p-0 print:bg-white print:overflow-visible flex justify-center">
          <div className="w-full max-w-4xl print:w-full">
            <CVPreview data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
