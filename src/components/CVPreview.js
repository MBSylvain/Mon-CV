import React from 'react';
import { themes } from '../themes';

const CVPreview = ({ data }) => {
    const { details, skills, experience, education, keywords, theme: themeId = 'blue' } = data;
    const theme = themes[themeId] || themes.blue;

    return (
        <div
            id="cv-to-print"
            className={`bg-white shadow-lg rounded-xl flex flex-col md:flex-row w-[210mm] min-h-[297mm] h-[297mm] mx-auto print:shadow-none print:w-[210mm] print:h-[297mm] overflow-hidden`}
        >
            {/* Sidebar */}
            <aside className={`${theme.sidebarBg} ${theme.sidebarText} w-full md:w-64 p-6 flex-shrink-0 print:w-64 flex flex-col h-full`}>
                <div className="flex flex-col items-center text-center mb-6">
                    <img src="https://via.placeholder.com/150" alt="Profile" className="w-24 h-24 rounded-full border-4 border-white/20 shadow-md mb-4" />
                    <h2 className="text-xl font-bold leading-tight">{details.name}</h2>
                </div>

                <ul className="mb-6 text-xs space-y-1 opacity-90 border-t border-white/10 pt-4">
                    <li><span className="font-bold">✉️ :</span> {details.email}</li>
                    <li><span className="font-bold">📞 :</span> {details.phone}</li>
                    <li className="leading-relaxed"><span className="font-bold">📍</span> {details.address}</li>
                </ul>

                <div className="flex-1 overflow-hidden">
                    <h3 className="font-bold uppercase text-[10px] tracking-widest mb-4 border-b border-white/20 pb-1">Compétences</h3>

                    <div className="space-y-4">
                        <div>
                            <h4 className={`text-[9px] font-bold uppercase ${theme.sidebarLabel} mb-1.5`}>Expertise Matériaux</h4>
                            <div className="flex flex-wrap gap-1.5">
                                {skills.expertise.map((s, i) => (
                                    <span key={i} className={`${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder} border rounded px-2 py-0.5 text-[10px] font-medium leading-none`}>{s}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className={`text-[9px] font-bold uppercase ${theme.sidebarLabel} mb-1.5`}>Outils & Méthodes</h4>
                            <div className="flex flex-wrap gap-1.5">
                                {skills.outils.map((s, i) => (
                                    <span key={i} className={`${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder} border rounded px-2 py-0.5 text-[10px] font-medium leading-none`}>{s}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className={`text-[9px] font-bold uppercase ${theme.sidebarLabel} mb-1.5`}>Gestion & Organisation</h4>
                            <div className="flex flex-wrap gap-1.5">
                                {skills.gestion.map((s, i) => (
                                    <span key={i} className={`${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder} border rounded px-2 py-0.5 text-[10px] font-medium leading-none`}>{s}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className={`text-[9px] font-bold uppercase ${theme.sidebarLabel} mb-1.5`}>Langues</h4>
                            <div className="flex flex-wrap gap-1.5">
                                {skills.langues.map((s, i) => (
                                    <span key={i} className={`${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder} border rounded px-2 py-0.5 text-[10px] font-medium leading-none`}>{s}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className={`text-[9px] font-bold uppercase ${theme.sidebarLabel} mb-1.5`}>Centres d'intérêt</h4>
                            <div className="flex flex-wrap gap-1.5">
                                {skills.interets.map((s, i) => (
                                    <span key={i} className={`${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder} border rounded px-2 py-0.5 text-[10px] font-medium leading-none`}>{s}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main */}
            <main className="flex-1 p-8 flex flex-col h-full overflow-hidden">
                <header className="mb-6">
                    <h1 className={`text-3xl font-bold ${theme.mainTitle} mb-1`}>{details.title}</h1>
                    <div className="h-1 w-20 bg-current transition-colors opacity-20 mb-4" />
                    <p className="text-sm text-gray-700 leading-relaxed text-justify italic border-l-4 border-gray-100 pl-4 py-1">
                        {details.summary}
                    </p>
                </header>

                <div className="flex-1 space-y-6">
                    <div>
                        <div className={`text-lg font-bold ${theme.sectionTitle} border-b-2 ${theme.sectionBorder} inline-block mb-3 px-1 uppercase tracking-tight`}>Expérience professionnelle</div>
                        <div className="space-y-4">
                            {experience.map((job, index) => (
                                <div key={index} className="break-inside-avoid relative pl-4 border-l-2 border-gray-100 hover:border-blue-100 transition-colors">
                                    <div className={`font-bold ${theme.mainTitle} text-sm`}>{job.role}</div>
                                    <div className={`${theme.accentText} text-xs mb-1`}>{job.company}, {job.location} — {job.period}</div>
                                    <div className="text-gray-600 text-[11px] leading-snug">
                                        {job.description.map((desc, i) => (
                                            <div key={i} className="mb-0.5">— {desc.startsWith('•') ? desc.substring(1).trim() : desc.trim()}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className={`text-lg font-bold ${theme.sectionTitle} border-b-2 ${theme.sectionBorder} inline-block mb-3 px-1 uppercase tracking-tight`}>Formation</div>
                        <div className="space-y-3">
                            {education.map((edu, index) => (
                                <div key={index} className="break-inside-avoid relative pl-4 border-l-2 border-gray-100">
                                    <div className={`font-bold ${theme.mainTitle} text-sm`}>{edu.degree}</div>
                                    <div className={`${theme.accentText} text-xs`}>{edu.institution}, {edu.location} — {edu.period}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CVPreview;
