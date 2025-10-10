'use client'
import Image from 'next/image'

export const TechIcons = {
  // First orbit icons
  java: () => (
    <Image 
      src="/java.png" 
      alt="Java" 
      width={40} 
      height={40} 
      className="object-contain"
    />
  ),

  javascript: () => (
    <Image 
      src="/js.png" 
      alt="JavaScript" 
      width={40} 
      height={40} 
      className="object-contain"
    />
  ),

  // Second orbit icons
  react: () => (
    <Image 
      src="/react.png" 
      alt="React" 
      width={40} 
      height={40} 
      className="object-contain"
    />
  ),

  springboot: () => (
    <Image 
      src="/SpringBoot.png" 
      alt="Spring Boot" 
      width={40} 
      height={40} 
      className="object-contain"
    />
  ),

  mysql: () => (
    <Image 
      src="/mysql.png" 
      alt="MySQL" 
      width={40} 
      height={40} 
      className="object-contain"
    />
  ),

  // Third orbit icons
  aws: () => (
    <Image 
      src="/aws.png" 
      alt="AWS" 
      width={40} 
      height={40} 
      className="object-contain"
    />
  ),

  docker: () => (
    <Image 
      src="/dockers.png" 
      alt="Docker" 
      width={40} 
      height={40} 
      className="object-contain"
    />
  ),

  // Fourth orbit icons
  github: () => (
    <Image 
      src="/github.png" 
      alt="GitHub" 
      width={40} 
      height={40} 
      className="object-contain"
    />
  ),

  git: () => (
    <Image 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
      alt="Git" 
      width={40} 
      height={40} 
      className="object-contain"
    />
  ),

  postman: () => (
    <Image 
      src="/postman.png" 
      alt="Postman" 
      width={40} 
      height={40} 
      className="object-contain"
    />
  ),

  vscode: () => (
    <Image 
      src="/vscode.png" 
      alt="VS Code" 
      width={40} 
      height={40} 
      className="object-contain"
    />
  ),

  intellij: () => (
    <Image 
      src="/intellij.png" 
      alt="IntelliJ" 
      width={40} 
      height={40} 
      className="object-contain"
    />
  ),

  javaeclipse: () => (
    <Image 
      src="/javaeclipse.png" 
      alt="Eclipse" 
      width={40} 
      height={40} 
      className="object-contain"
    />
  ),

  // Fifth orbit icons
  chatgpt: () => (
    <Image 
      src="/chatgpt.png" 
      alt="ChatGPT" 
      width={40} 
      height={40} 
      className="object-contain"
    />
  ),

  windsurf: () => (
    <Image 
      src="/windsurf.jpeg" 
      alt="Windsurf" 
      width={40} 
      height={40} 
      className="object-contain"
    />
  ),

  amazonq: () => (
    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
      Q
    </div>
  )
}
