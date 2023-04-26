import {
  AcademicCapIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import {About, ContactSection, ContactType, Hero, HomepageMeta, SkillGroup, Social, TimelineItem} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Geoff Topeto`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Wellington (New Zealand) based <strong className="text-stone-100">Product Owner</strong>, currently
        working at the{' '}
        <a href="https://www.bnz.co.nz/" target="_blank">
          <strong className="text-stone-100">Bank of New Zealand (BNZ)</strong>
        </a>
        . Our product team works in conjuction with <strong className="text-stone-100">Design</strong> to help build a
        sustainable, accesible and readily available <strong className="text-stone-100">Design System</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I'll be playing{' '}
        <a href="https://www.ea.com/games/apex-legends" target="_blank">
          <strong className="text-stone-100">Apex Legends</strong>
        </a>
        , watching sport such as <strong className="text-stone-100">Rugby</strong> or{' '}
        <strong className="text-stone-100">Basketball</strong>, or I'll be eating. Follow my foodie instagram at{' '}
        <a href="https://www.instagram.com/faddywellyeatz/" target="_blank">
          <strong className="text-stone-100">@FaddyWellyEatz</strong>
        </a>
        .
      </p>
    </>
  ),
  actions: [
    {
      href: '/data/GeoffreyTopeto_CV.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `After years of experience in the IT industry, I’ve discovered a true passion for problem solving, delivery, and being a leader within a team. Motivating and enabling my team to do the best work they can while maintaining a balance of fun is what makes me passionate about my field of work.`,
  aboutItems: [
    {label: 'Location', text: 'Wellington, NZ', Icon: MapIcon},
    {label: 'Nationality', text: 'Samoan', Icon: FlagIcon},
    {label: 'Interests', text: 'Gaming, Sports, Eating', Icon: SparklesIcon},
    {label: 'Study', text: 'Victoria University of Wellington', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Bank of New Zealand (BNZ)', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Experience',
    skills: [
      {
        name: 'Product Owner',
        level: 10,
      },
      {
        name: 'Testing',
        level: 10,
      },
      {
        name: 'Automation',
        level: 10,
      },
      {
        name: 'Design systems',
        level: 9,
      },
      {
        name: 'Development',
        level: 6,
      },
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 6,
      },
      {
        name: 'Javascript',
        level: 6,
      },
    ],
  },
  {
    name: 'Soft skills',
    skills: [
      {
        name: 'Energy',
        level: 10,
      },
      {
        name: 'Communication',
        level: 10,
      },
      {
        name: 'Teamwork',
        level: 10,
      },
      {
        name: 'Decision-making',
        level: 9,
      },
      {
        name: 'Leadership',
        level: 9,
      },
      {
        name: 'Presenting',
        level: 9,
      },
      {
        name: 'Adaptability',
        level: 9,
      },
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2015',
    location: 'Victoria University of Wellington',
    title: 'Bachelor of Commerce - Major in Information Systems',
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2022 - Present',
    location: 'Bank of New Zealand (BNZ)',
    title: 'Product Owner',
    content: (
      <p>
        Created and delivered clear and realistic roadmaps to our stakeholders. Shipped multiple new components for
        consuming developing teams in a couple of months as opposed to half a year/a year that it used to take.
        Confidently presented our quarterly plans to our stakeholders and explained the benefits of the work we plan to
        do. Engaging our constomers to gather feedback and opportunities for improvement. Creating sprint goals with
        stories/tasks/bugs for our team to deliver and review on how we did as a team each sprint.
      </p>
    ),
  },
  {
    date: 'June 2020 - August 2022',
    location: 'Bank of New Zealand (BNZ)',
    title: 'Senior Automation Tester',
    content: (
      <p>
        Delivered a test strategy plan for the team to carry out and execute including making a plan and presenting it
        and taking into account feedback. T-shaped team member who often filled in as a Product Owner or Business
        Analyst where required. Also jumped in and did some development when we were short on numbers. Became a team
        facilitator at Quarterly Planning Sessions for our team which involved coordinating with other teams on what
        they needed and how we can fit their needs into our quarter. Presented at multiple meetings such as our monthly
        Guild, Engineering All-Hands, and Testing guild. Created a number of Cypress automation tests that regression
        tested our Design System site
      </p>
    ),
  },
  {
    date: 'August 2019 - June 2020',
    location: 'Trademe',
    title: 'Mobile Test Analyst',
    content: (
      <p>
        Successfully lead our team through urgent/time pressured work during the Covid outbreak. T-shaped team member
        who often did a bit of everything from Product Owner work to Development on the apps. I put myself in a position
        to best help the team. Facilitated and lead team ceremonies such as retrospectives, planning, and multiple
        discussions.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://nz.linkedin.com/in/geoffreytopeto'},
];
