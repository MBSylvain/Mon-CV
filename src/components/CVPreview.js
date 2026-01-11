import React from 'react';

const CVPreview = ({ data }) => {
    const { details, skills, experience, education, keywords } = data;

    return (
        <div id="cv-to-print" className="bg-white shadow-lg rounded-xl flex flex-col md:flex-row overflow-hidden w-full max-w-4xl mx-auto print:shadow-none print:w-full print:max-w-none">
            {/* Sidebar */}
            <aside className="bg-gray-100 text-black w-full md:w-64 p-8 flex-shrink-0 print:w-64">
                <img src="https://via.placeholder.com/150" alt="Profile" className="w-16 h-16 rounded-full mr-4" />
                <h2 className="text-2xl font-bold mb-2">{details.name}</h2>
                <ul className="mb-6 text-sm">
                    <li>✉️ : {details.email}</li>
                    <li>📞 : {details.phone}</li>
                    <li>📍 {details.address}</li>
                </ul>

                <h3 className="font-semibold mb-2">Compétences</h3>

                <h4 className="text-xs text-black mt-4 mb-2 font-semibold uppercase">Expertise Matériaux</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                    {skills.expertise.map((s, i) => (
                        <span key={i} className="text-black rounded-full px-3 py-1 text-xs font-medium ">{s}</span>
                    ))}
                </div>

                <h4 className="text-xs text-black mt-4 mb-2 font-semibold uppercase">Outils & Méthodes</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                    {skills.outils.map((s, i) => (
                        <span key={i} className="text-black rounded-full px-3 py-1 text-xs font-medium">{s}</span>
                    ))}
                </div>

                <h4 className="text-xs text-black mt-4 mb-2 font-semibold uppercase">Gestion & Organisation</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                    {skills.gestion.map((s, i) => (
                        <span key={i} className="text-black rounded-full px-3 py-1 text-xs font-medium">{s}</span>
                    ))}
                </div>

                <div className="mt-6">
                    <h4 className="text-xs text-black mb-2 font-semibold uppercase">Langues</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {skills.langues.map((s, i) => (
                            <span key={i} className="text-black rounded-full px-3 py-1 text-xs font-medium">{s}</span>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h4 className="text-xs text-black mb-2 font-semibold uppercase">Centres d'intérêt</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {skills.interets.map((s, i) => (
                            <span key={i} className="text-black rounded-full px-3 py-1 text-xs font-medium">{s}</span>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Main */}
            <main className="flex-1 p-8">
                <h1 className="text-3xl font-bold text-blue-900 mb-2">{details.title}</h1>
                <div className="mb-6 text-justify text-gray-700 whitespace-pre-line">
                    {details.summary}
                </div>

                <div className="mb-8">
                    <div className="text-lg font-semibold text-blue-900 border-b-2 border-blue-900 inline-block mb-2">Expérience professionnelle</div>
                    {experience.map((job, index) => (
                        <div key={index} className="mb-4 break-inside-avoid">
                            <div className="font-bold text-blue-900">{job.role}</div>
                            <div className="text-blue-700 font-medium">{job.company}, {job.location} - {job.period}</div>
                            <div className="text-gray-700 text-sm">
                                {job.description.map((desc, i) => (
                                    <div key={i}>{desc.startsWith('•') ? desc : `• ${desc}`}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mb-8">
                    <div className="text-lg font-semibold text-blue-900 border-b-2 border-blue-900 inline-block mb-2">Formation</div>
                    {education.map((edu, index) => (
                        <div key={index} className="mb-3 break-inside-avoid">
                            <div className="font-bold text-blue-900">{edu.degree}</div>
                            <div className="text-blue-700 font-medium">{edu.institution}, {edu.location} - {edu.period}</div>
                        </div>
                    ))}
                </div>

                {/* <div className="mb-4">
                    <div className="text-lg font-semibold text-blue-900 border-b-2 border-blue-900 inline-block mb-2">Mots-clés</div>
                    <div className="flex flex-wrap gap-2">
                        {keywords.map((k, i) => (
                            <span key={i} className="bg-blue-100 text-blue-900 rounded-full px-3 py-1 text-xs font-medium border border-blue-200">{k}</span>
                        ))}
                    </div>
                </div> */}
            </main>
        </div>
    );
};

export default CVPreview;
