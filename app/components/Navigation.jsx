'use client';

import {
  Home,
  User,
  Code,
  FolderOpen,
  Youtube,
  Briefcase,
  Mail,
} from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '../../components/ui/dock';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'instant', block: 'start' });
  };

  const navData = [
    {
      title: 'Home',
      icon: <Home className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: 'hero',
    },
    {
      title: 'About',
      icon: <User className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: 'about',
    },
    {
      title: 'Skills',
      icon: <Code className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: 'skills',
    },
    {
      title: 'Projects',
      icon: <FolderOpen className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: 'projects',
    },
    {
      title: 'YouTube',
      icon: <Youtube className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: 'youtube',
    },
    {
      title: 'Experience',
      icon: <Briefcase className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: 'experience',
    },
    {
      title: 'Contact',
      icon: <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: 'contact',
    },
  ];

  return (
    <div className='fixed bottom-4 left-1/2 max-w-full -translate-x-1/2 z-50'>
      <Dock 
        className='items-end pb-3 bg-white/90 backdrop-blur-xl border border-gray-200 dark:bg-neutral-900/90 dark:border-neutral-700'
        spring={{ mass: 0.05, stiffness: 300, damping: 20 }}
        magnification={70}
        distance={100}
      >
        {navData.map((item, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSection(item.href)}
            className='contents'
          >
            <DockItem className='aspect-square rounded-full bg-gray-100 dark:bg-neutral-800 cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-700'>
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </button>
        ))}
      </Dock>
    </div>
  );
};

export default Navigation;