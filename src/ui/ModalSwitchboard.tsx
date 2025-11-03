import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { profile } from '@/data/profile';
import { useGameStore, type SectionId } from '@/game/useGameStore';
import { SECTION_METADATA } from '@/game/sections';
import { Modal } from './Modal';

const metadataMap = Object.fromEntries(SECTION_METADATA.map((section) => [section.id, section])) as Record<
  SectionId,
  (typeof SECTION_METADATA)[number]
>;

const accessibleHash: Record<SectionId, string> = {
  experience: '#experience',
  projects: '#projects',
  awards: '#awards',
  education: '#education',
  contact: '#contact'
};

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.warn('Clipboard copy failed', error);
  }
};

const SectionLabel = ({ label }: { label: string }) => (
  <span className="rounded-full bg-mint/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-dusk/70">
    {label}
  </span>
);

const renderExperience = () =>
  profile.experience.map((role) => (
    <article key={role.company} className="rounded-2xl bg-sand/40 p-4">
      <header className="flex flex-wrap justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-dusk">{role.role}</h3>
          <p className="text-sm text-dusk/70">{role.company}</p>
          <p className="text-xs uppercase tracking-wide text-dusk/50">
            {role.location} • {role.dates}
          </p>
        </div>
        <SectionLabel label="Impact" />
      </header>
      <ul className="mt-4 space-y-2 text-sm text-soot/80">
        {role.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {role.stack.map((chip) => (
          <span key={chip} className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-dusk/70">
            {chip}
          </span>
        ))}
      </div>
    </article>
  ));

const renderProjects = () =>
  profile.projects.map((project) => (
    <article key={project.name} className="rounded-2xl bg-white/80 p-4 shadow-soft">
      <header className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-dusk">{project.name}</h3>
        </div>
        <SectionLabel label="Project" />
      </header>
      <ul className="mt-3 space-y-2 text-sm text-soot/80">
        {project.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((chip) => (
          <span key={chip} className="rounded-full bg-peach/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-dusk/70">
            {chip}
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {'live' in project.links ? (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-dusk px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-dusk/90"
          >
            Live
          </a>
        ) : null}
        {'paper' in project.links ? (
          <a
            href={project.links.paper}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-dusk transition hover:bg-white"
          >
            Paper
          </a>
        ) : null}
      </div>
    </article>
  ));

const renderAwards = () => (
  <div className="grid gap-4 md:grid-cols-3">
    {profile.awards.map((award) => (
      <div key={award.name} className="rounded-3xl border border-white/60 bg-white/80 p-6 text-center shadow-soft">
        <div className="text-3xl" aria-hidden>
          🏆
        </div>
        <h3 className="mt-3 text-lg font-semibold text-dusk">{award.name}</h3>
        <p className="mt-2 text-sm text-dusk/70">{award.result}</p>
      </div>
    ))}
  </div>
);

const renderEducation = () =>
  profile.education.map((edu) => (
    <article key={edu.school} className="rounded-2xl bg-white/85 p-4 shadow-soft">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-dusk">{edu.school}</h3>
          <p className="text-sm text-dusk/70">{edu.degree}</p>
          <p className="text-xs uppercase tracking-wide text-dusk/50">{edu.dates}</p>
        </div>
        <SectionLabel label="Education" />
      </header>
      {edu.gpa ? <p className="mt-2 text-sm font-medium text-dusk/80">GPA: {edu.gpa}</p> : null}
      {'coursework' in edu ? (
        <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-soot/80 md:grid-cols-2">
          {edu.coursework.map((course: string) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      ) : null}
    </article>
  ));

const renderContact = () => (
  <div className="space-y-4 text-sm text-soot/80">
    <div className="flex flex-wrap items-center gap-3 text-base font-semibold text-dusk">
      <span aria-hidden>📧</span>
      <a className="underline decoration-mint decoration-2 underline-offset-4" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <button
        type="button"
        onClick={() => copyToClipboard(profile.email)}
        className="rounded-full border border-dusk/10 bg-white/80 px-3 py-1 text-xs uppercase tracking-wide text-dusk/70 transition hover:bg-white"
      >
        Copy
      </button>
    </div>
    <div className="flex flex-wrap items-center gap-3 text-base font-semibold text-dusk">
      <span aria-hidden>📞</span>
      <span>{profile.phone}</span>
      <button
        type="button"
        onClick={() => copyToClipboard(profile.phone)}
        className="rounded-full border border-dusk/10 bg-white/80 px-3 py-1 text-xs uppercase tracking-wide text-dusk/70 transition hover:bg-white"
      >
        Copy
      </button>
    </div>
    <div className="flex flex-wrap items-center gap-3 text-base text-dusk">
      <span aria-hidden>📍</span>
      <span>{profile.location}</span>
    </div>
    <div className="flex flex-wrap gap-3 text-sm">
      <a
        href={profile.links.linkedin}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-dusk px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-dusk/90"
      >
        LinkedIn
      </a>
      <a
        href={profile.links.github}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-dusk px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-dusk/90"
      >
        GitHub
      </a>
      <a
        href={profile.links.etherwatch}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-mint/50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-dusk transition hover:bg-mint/70"
      >
        EtherWatch
      </a>
      <a
        href="#"
        className="rounded-full border border-dusk/20 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-dusk transition hover:bg-white"
      >
        Download Resume
      </a>
    </div>
  </div>
);

const renderContent = (id: SectionId) => {
  switch (id) {
    case 'experience':
      return renderExperience();
    case 'projects':
      return renderProjects();
    case 'awards':
      return renderAwards();
    case 'education':
      return renderEducation();
    case 'contact':
      return renderContact();
    default:
      return null;
  }
};

const IntroTooltip = ({ onDismiss }: { onDismiss: () => void }) => (
  <div className="pointer-events-auto absolute bottom-32 left-1/2 z-30 w-[min(90vw,420px)] -translate-x-1/2 rounded-3xl bg-white/90 p-6 text-sm text-dusk shadow-soft backdrop-blur-lg">
    <div className="flex items-start gap-3">
      <div className="text-3xl" aria-hidden>
        👋
      </div>
      <div>
        <h2 className="text-lg font-semibold">Welcome Plaza</h2>
        <p className="mt-2 text-sm text-dusk/70">
          Use WASD or the joystick to cruise around. Float up to a signpost and hit Space or Interact to open a section.
        </p>
        <button
          type="button"
          onClick={onDismiss}
          className="mt-3 inline-flex items-center gap-2 rounded-full bg-dusk px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-soft transition hover:bg-dusk/90"
        >
          Let&apos;s go!
        </button>
      </div>
    </div>
  </div>
);

export const ModalSwitchboard = () => {
  const activeModal = useGameStore((state) => state.activeModal);
  const closeModal = useGameStore((state) => state.closeModal);
  const introVisible = useGameStore((state) => state.introVisible);
  const dismissIntro = useGameStore((state) => state.dismissIntro);
  const navigate = useNavigate();

  const modalMeta = useMemo(() => (activeModal ? metadataMap[activeModal] : null), [activeModal]);

  useEffect(() => {
    if (!introVisible || typeof window === 'undefined') {
      return;
    }
    const timer = window.setTimeout(() => dismissIntro(), 12000);
    return () => window.clearTimeout(timer);
  }, [introVisible, dismissIntro]);

  const getFooter = (id: SectionId) => (
    <>
      <button
        type="button"
        onClick={closeModal}
        className="rounded-full bg-dusk px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-dusk/90"
      >
        Back to map
      </button>
      <button
        type="button"
        onClick={() => {
          closeModal();
          navigate(`/accessible${accessibleHash[id]}`);
        }}
        className="rounded-full border border-dusk/20 bg-white/90 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-dusk transition hover:bg-white"
      >
        Open links
      </button>
    </>
  );

  return (
    <>
      {introVisible && !activeModal ? <IntroTooltip onDismiss={dismissIntro} /> : null}
      {activeModal && modalMeta ? (
        <Modal
          open
          onClose={closeModal}
          title={modalMeta.title}
          icon={modalMeta.icon}
          description={`Detailed look at ${modalMeta.title.toLowerCase()}`}
          footer={getFooter(activeModal)}
        >
          {renderContent(activeModal)}
        </Modal>
      ) : null}
    </>
  );
};
