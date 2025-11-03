import type { ReactNode } from 'react';
import clsx from 'classnames';

type CardProps = {
  title: string;
  description?: string;
  badge?: string;
  icon?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export const Card = ({
  title,
  description,
  badge,
  icon,
  actions,
  children,
  className
}: CardProps) => {
  return (
    <article
      className={clsx(
        'rounded-xl bg-white/85 p-6 shadow-soft backdrop-blur',
        'border border-white/60 transition hover:-translate-y-0.5 hover:shadow-xl focus-within:ring-2 focus-within:ring-mint/70',
        className
      )}
      tabIndex={-1}
    >
      <header className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {icon ? <span className="text-2xl" aria-hidden>{icon}</span> : null}
          <div>
            <h2 className="text-lg font-semibold text-dusk">{title}</h2>
            {description ? <p className="text-sm text-dusk/70">{description}</p> : null}
          </div>
        </div>
        {badge ? (
          <span className="rounded-full bg-mint/20 px-3 py-1 text-xs font-medium text-dusk/70">{badge}</span>
        ) : null}
      </header>
      <div className="space-y-3 text-sm text-soot/80">{children}</div>
      {actions ? <footer className="mt-4 flex flex-wrap gap-3">{actions}</footer> : null}
    </article>
  );
};
