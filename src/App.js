import React, { useState } from 'react';
import CVPreview from './components/CVPreview';
import CVEditor from './components/CVEditor';
import { initialCVData } from './initialData';
import './index.css';

function App() {
  const [data, setData] = useState(initialCVData);

  const handlePrint = () => {
    window.print();
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
          onClick={handlePrint}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium shadow-sm flex items-center gap-2"
        >
          <span>🖨️</span> Imprimer / PDF
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
