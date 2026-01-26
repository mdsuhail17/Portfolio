'use client';

import {
  Home,
  User,
  Code,
  Briefcase,
  Youtube,
  GraduationCap,
  Mail,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from './dock';

const portfolioSections = [
  {
    title: 'Home',
    icon: (
      <Home className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#hero',
  },
  {
    title: 'About',
    icon: (
      <User className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#about',
  },
  {
    title: 'Skills',
    icon: (
      <Code className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#skills',
  },
  {
    title: 'Experience',
    icon: (
      <Briefcase className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#experience',
  },
  {
    title: 'Education',
    icon: (
      <GraduationCap className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#education',
  },
  {
    title: 'YouTube',
    icon: (
      <Youtube className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#youtube',
  },
  {
    title: 'Contact',
    icon: (
      <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#contact',
  },
];

export function PortfolioDock() {
  const handleNavigation = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className='fixed bottom-4 left-1/2 max-w-full -translate-x-1/2 z-50'>
      <Dock className='items-end pb-3 bg-white/10 backdrop-blur-md border border-white/20'>
        {portfolioSections.map((item, idx) => (
          <DockItem
            key={idx}
            className='aspect-square rounded-full bg-gray-200/80 dark:bg-neutral-800/80 backdrop-blur-sm cursor-pointer transition-all duration-200 hover:bg-gray-300/80 dark:hover:bg-neutral-700/80'
            onClick={() => handleNavigation(item.href)}
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
