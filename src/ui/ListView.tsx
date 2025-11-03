import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { profile } from '@/data/profile';
import { useGameStore } from '@/game/useGameStore';
import { Card } from './Card';

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.warn('Clipboard copy failed', error);
  }
};

export const ListView = () => {
  const setListView = useGameStore((state) => state.setListView);

  useEffect(() => {
    setListView(true);
    return () => setListView(false);
  }, [setListView]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand via-peach to-mint/40 pb-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-5 pt-10">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-dusk/70">Playable Portfolio</p>
            <h1 className="text-3xl font-bold text-dusk">{profile.name}</h1>
            <p className="mt-2 max-w-2xl text-dusk/70">{profile.summary}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-dusk/70">
              <span>{profile.location}</span>
              <span className="text-dusk/40">•</span>
              <a className="underline decoration-mint decoration-2 underline-offset-4" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <span className="text-dusk/40">•</span>
              <button
                type="button"
                onClick={() => copyToClipboard(profile.phone)}
                className="rounded-full border border-dusk/10 bg-white/80 px-3 py-1 text-xs font-medium text-dusk/70 transition hover:border-dusk/30 hover:text-dusk"
              >
                Copy phone
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-dusk/10 bg-white/90 px-5 py-2 text-sm font-medium text-dusk shadow-soft transition hover:bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-dusk/60"
            >
              Download Resume
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-dusk px-5 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-dusk/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-dusk/60"
              aria-label="Back to interactive world"
            >
              Back to world
            </Link>
          </div>
        </header>

        <section id="experience" className="grid gap-5 md:grid-cols-2">
          {profile.experience.map((item) => (
            <Card
              key={item.company}
              title={`${item.role} • ${item.company}`}
              description={`${item.location} • ${item.dates}`}
              badge="Experience"
              icon="🚀"
            >
              <ul className="space-y-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.stack.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-mint/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-dusk/70"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </section>

        <section id="projects" className="grid gap-5 md:grid-cols-3">
          {profile.projects.map((project) => (
            <Card key={project.name} title={project.name} badge="Project" icon="🧪">
              <ul className="space-y-2">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-peach/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-dusk/70"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {'live' in project.links ? (
                  <a
                    href={project.links.live}
                    className="rounded-full bg-dusk px-4 py-2 text-xs font-medium uppercase tracking-wide text-white transition hover:bg-dusk/90"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                ) : null}
                {'paper' in project.links ? (
                  <a
                    href={project.links.paper}
                    className="rounded-full bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-wide text-dusk transition hover:bg-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Paper
                  </a>
                ) : null}
              </div>
            </Card>
          ))}
        </section>

        <section id="awards" className="grid gap-5 md:grid-cols-3">
          {profile.awards.map((award) => (
            <Card key={award.name} title={award.name} badge="Award" icon="🏆">
              <p>{award.result}</p>
            </Card>
          ))}
        </section>

        <section id="education" className="grid gap-5 md:grid-cols-2">
          {profile.education.map((edu) => (
            <Card key={edu.school} title={edu.school} badge="Education" icon="📚">
              <p className="text-sm font-medium text-dusk">{edu.degree}</p>
              <p className="text-xs uppercase tracking-wide text-dusk/60">{edu.dates}</p>
              {edu.gpa ? <p className="text-sm text-dusk/70">GPA: {edu.gpa}</p> : null}
              {'coursework' in edu ? (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-dusk/60">Coursework</h3>
                  <ul className="mt-2 grid grid-cols-1 gap-1 text-sm md:grid-cols-2">
                    {edu.coursework.map((course: string) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Card>
          ))}
        </section>

        <section id="contact" className="grid gap-5 md:grid-cols-[2fr_1fr]">
          <Card title="Contact Dock" badge="Contact" icon="📡">
            <div className="space-y-3">
              <p>Email: {profile.email}</p>
              <p>Location: {profile.location}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => copyToClipboard(profile.email)}
                className="rounded-full bg-dusk px-4 py-2 text-xs font-medium uppercase tracking-wide text-white transition hover:bg-dusk/90"
              >
                Copy Email
              </button>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-wide text-dusk transition hover:bg-white"
              >
                Email
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-mint/50 px-4 py-2 text-xs font-medium uppercase tracking-wide text-dusk transition hover:bg-mint/70"
              >
                LinkedIn
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-mint/50 px-4 py-2 text-xs font-medium uppercase tracking-wide text-dusk transition hover:bg-mint/70"
              >
                GitHub
              </a>
            </div>
          </Card>
          <Card title="Skills Snapshot" badge="Skills" icon="🛠">
            <div className="grid gap-3 text-sm">
              {Object.entries(profile.skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-dusk/60">{category}</h3>
                  <p>{items.join(', ')}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};
