import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ListView } from '../ListView';
import { profile } from '@/data/profile';

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

describe('ListView', () => {
  it('renders experience and project data from profile', () => {
    render(
      <BrowserRouter>
        <ListView />
      </BrowserRouter>
    );

    profile.experience.forEach((role) => {
      expect(screen.getByText(new RegExp(escapeRegex(role.company), 'i'))).toBeInTheDocument();
    });

    profile.projects.forEach((project) => {
      expect(screen.getByText(new RegExp(escapeRegex(project.name), 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(escapeRegex(project.bullets[0]), 'i'))).toBeInTheDocument();
    });

    expect(screen.getByText(/Contact Dock/i)).toBeInTheDocument();
  });
});
