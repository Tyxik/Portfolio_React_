
import React from 'react';

const skillsData = [
    { name: 'JavaScript', title: 'JavaScript' },
    { name: 'React.js', title: 'React.js' },
    { name: 'CSS', title: 'CSS' },
    { name: 'HTML', title: 'HTML' },
];

export default function Skills() {
    return (
        <section className="Skills">
            <h2>Dosažené Dovednosti</h2>
            {skillsData.map((skill, index) => (
                <div className="Skill" title={skill.title} key={index}>
                    {skill.name}
                </div>
            ))}
        </section>
    );
}