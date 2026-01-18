import React from 'react';
import { themes } from '../themes';

const Section = ({ title, children, className = "" }) => (
    <div className={`mb-6 border p-4 rounded bg-white shadow-sm ${className}`}>
        <h3 className="text-xl font-semibold mb-4 text-blue-800 border-b pb-2 tracking-tight">{title}</h3>
        {children}
    </div>
);

const Input = ({ label, value, onChange, type = "text", textarea = false }) => (
    <div className="mb-3">
        {label && <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{label}</label>}
        {textarea ? (
            <textarea
                className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                rows="3"
                value={value}
                onChange={onChange}
            />
        ) : (
            <input
                className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                type={type}
                value={value}
                onChange={onChange}
            />
        )}
    </div>
);

const ListEditor = ({ title, items, onUpdate, onAdd, onRemove }) => (
    <div className="mb-6 border-b pb-6 last:border-0 last:pb-0">
        <h4 className="text-sm font-bold text-gray-700 uppercase mb-3 flex justify-between items-center">
            {title}
            <button
                onClick={onAdd}
                className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded hover:bg-blue-100 transition"
            >
                + Ajouter
            </button>
        </h4>
        <div className="space-y-2">
            {items.map((item, index) => (
                <div key={index} className="flex gap-2">
                    <input
                        className="flex-1 border border-gray-200 rounded px-2 py-1 text-sm focus:border-blue-400 outline-none"
                        value={item}
                        onChange={(e) => onUpdate(index, e.target.value)}
                    />
                    <button
                        onClick={() => onRemove(index)}
                        className="text-red-400 hover:text-red-600 px-2 text-lg leading-none"
                    >
                        ×
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default function CVEditor({ data, onChange }) {
    const updateDetails = (field, value) => {
        onChange({
            ...data,
            details: { ...data.details, [field]: value }
        });
    };

    const updateKeywords = (index, value) => {
        const newKeywords = [...data.keywords];
        newKeywords[index] = value;
        onChange({ ...data, keywords: newKeywords });
    };

    const addKeyword = () => {
        onChange({ ...data, keywords: [...data.keywords, "Nouveau mot-clé"] });
    };

    const removeKeyword = (index) => {
        onChange({ ...data, keywords: data.keywords.filter((_, i) => i !== index) });
    };

    const updateSkillItem = (category, index, value) => {
        const newSkills = { ...data.skills };
        newSkills[category][index] = value;
        onChange({ ...data, skills: newSkills });
    };

    const addSkillItem = (category) => {
        const newSkills = { ...data.skills };
        newSkills[category] = [...newSkills[category], `Nouvel élément (${category})`];
        onChange({ ...data, skills: newSkills });
    };

    const removeSkillItem = (category, index) => {
        const newSkills = { ...data.skills };
        newSkills[category] = newSkills[category].filter((_, i) => i !== index);
        onChange({ ...data, skills: newSkills });
    };

    return (
        <div className="p-4 bg-gray-50 h-full overflow-y-auto custom-scrollbar space-y-4 pb-20">
            <Section title="Thème & Style">
                <div className="grid grid-cols-2 gap-2">
                    {Object.values(themes).map((t) => (
                        <button
                            key={t.id}
                            onClick={() => onChange({ ...data, theme: t.id })}
                            className={`flex items-center gap-2 p-2 border rounded-lg transition text-left text-xs font-medium ${data.theme === t.id
                                    ? 'border-black bg-white ring-2 ring-black/10'
                                    : 'border-gray-200 hover:border-gray-300 bg-gray-50'
                                }`}
                        >
                            <div className={`w-4 h-4 rounded-full ${t.sidebarBg} border border-black/10`} />
                            {t.name}
                        </button>
                    ))}
                </div>
            </Section>

            <Section title="Informations Personnelles">
                <Input label="Nom complet" value={data.details.name} onChange={(e) => updateDetails('name', e.target.value)} />
                <Input label="Titre du poste" value={data.details.title} onChange={(e) => updateDetails('title', e.target.value)} />
                <Input label="Email" value={data.details.email} onChange={(e) => updateDetails('email', e.target.value)} />
                <Input label="Téléphone" value={data.details.phone} onChange={(e) => updateDetails('phone', e.target.value)} />
                <Input label="Adresse" value={data.details.address} onChange={(e) => updateDetails('address', e.target.value)} />
                <Input label="Résumé" value={data.details.summary} textarea onChange={(e) => updateDetails('summary', e.target.value)} />
            </Section>

            <Section title="Compétences & Atouts">
                <ListEditor
                    title="Expertise Matériaux"
                    items={data.skills.expertise}
                    onUpdate={(idx, val) => updateSkillItem('expertise', idx, val)}
                    onAdd={() => addSkillItem('expertise')}
                    onRemove={(idx) => removeSkillItem('expertise', idx)}
                />
                <ListEditor
                    title="Outils & Méthodes"
                    items={data.skills.outils}
                    onUpdate={(idx, val) => updateSkillItem('outils', idx, val)}
                    onAdd={() => addSkillItem('outils')}
                    onRemove={(idx) => removeSkillItem('outils', idx)}
                />
                <ListEditor
                    title="Gestion & Organisation"
                    items={data.skills.gestion}
                    onUpdate={(idx, val) => updateSkillItem('gestion', idx, val)}
                    onAdd={() => addSkillItem('gestion')}
                    onRemove={(idx) => removeSkillItem('gestion', idx)}
                />
            </Section>

            <Section title="Langues & Intérêts">
                <ListEditor
                    title="Langues"
                    items={data.skills.langues}
                    onUpdate={(idx, val) => updateSkillItem('langues', idx, val)}
                    onAdd={() => addSkillItem('langues')}
                    onRemove={(idx) => removeSkillItem('langues', idx)}
                />
                <ListEditor
                    title="Centres d'intérêt"
                    items={data.skills.interets}
                    onUpdate={(idx, val) => updateSkillItem('interets', idx, val)}
                    onAdd={() => addSkillItem('interets')}
                    onRemove={(idx) => removeSkillItem('interets', idx)}
                />
            </Section>

            <Section title="Mots-clés (Badges)">
                <div className="flex flex-wrap gap-2">
                    {data.keywords.map((k, i) => (
                        <div key={i} className="flex items-center bg-white border rounded px-2 py-1 shadow-sm">
                            <input
                                className="bg-transparent text-sm w-28 outline-none"
                                value={k}
                                onChange={(e) => updateKeywords(i, e.target.value)}
                            />
                            <button onClick={() => removeKeyword(i)} className="text-red-400 ml-2 font-bold hover:text-red-600">×</button>
                        </div>
                    ))}
                    <button
                        onClick={addKeyword}
                        className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition"
                    >
                        + Badge
                    </button>
                </div>
            </Section>

            <div className="text-center text-gray-400 text-[10px] italic py-4">
                Version 2.0 - Édition complète des compétences activée.
            </div>
        </div>
    );
}
