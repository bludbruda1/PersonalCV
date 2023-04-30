import {
  AcademicCapIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/background1.jpg';
import profilepic from '../images/profilepic.jpg';
import {About, ContactSection, ContactType, Hero, HomepageMeta, SkillGroup, Social, TimelineItem} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Geoffrey Topeto - CV',
  description: 'Geoffrey Topeto Resume',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Geoffrey Topeto`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Wellington (New Zealand) based <strong className="text-stone-100">Product Owner</strong>, currently
        working at the{' '}
        <a href="https://www.bnz.co.nz/" target="_blank">
          <strong className="text-stone-100">Bank of New Zealand (BNZ)</strong>
        </a>
        . Our product team works in conjuction with <strong className="text-stone-100">Design</strong> to help build a
        sustainable, accessible and readily available <strong className="text-stone-100">Design System</strong> for our
        consuming development teams at the bank.
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
      href: 'https://drive.google.com/file/d/1bIXFlJPCtWFU_JQNMAJynnerN3yuWVj9/view?usp=sharing',
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
    {label: 'Ethnicity', text: 'Samoan', Icon: FlagIcon},
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
        During my time as a Product Owner at BNZ, I developed and implemented transparent and practical roadmaps for our
        stakeholders. I also managed to shorten the time for delivering new components to consuming teams from half a
        year or a year to a couple of months. Additionally, I presented our quarterly plans to our stakeholders,
        highlighting the benefits of the work we planned to do. My focus on engaging customers helped me to gather
        valuable feedback and identify areas for improvement. I also created sprint goals, including stories, tasks, and
        bug fixes, for our team to complete and review our progress as a team each sprint.
      </p>
    ),
  },
  {
    date: 'June 2020 - August 2022',
    location: 'Bank of New Zealand (BNZ)',
    title: 'Senior Automation Tester',
    content: (
      <p>
        I was responsible for delivering a test strategy plan to my team. This included creating a plan, presenting it,
        and incorporating feedback from the team. As a T-shaped team member, I fulfilled various roles such as Product
        Owner, Business Analyst, and even assisted with development tasks where required. I also took on the role of
        team facilitator during quarterly planning. This involved communicating with other teams to understand their
        requirements and how we could incorporate their work into our quarter plans. I was responsible for presenting at
        monthly Guild, Engineering All-Hands, and Testing Guild meetings as well. In addition, I created a set of
        Cypress automation tests that regressed our Design System site.
      </p>
    ),
  },
  {
    date: 'August 2019 - June 2020',
    location: 'Trademe',
    title: 'Mobile Test Analyst',
    content: (
      <p>
        During the Covid-19 outbreak, I successfully led our team through urgent and time-sensitive work. I went beyond
        my role and stepped up as a team leader, which showcased my ability to step up in high-pressure circumstances.
        As a T-shaped team member, I was versatile and contributed to various tasks ranging from Product Owner work to
        Development on the apps. I made a conscious effort to position myself to best support the team in any way
        possible. I took on the responsibility of facilitating team ceremonies. This included retrospectives, planning,
        and backlog refinement.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'If you wish to get in touch with me, you are welcome to leave me a message. Alternatively, you can send me a LinkedIn invite.',
  items: [
    {
      type: ContactType.Email,
      text: 'geoffreytopeto@gmail.com',
      href: 'mailto:geoffreytopeto@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Wellington, New Zealand',
      href: 'https://goo.gl/maps/tjH4pWHocqusJZkSA',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Geoffrey Topeto',
      href: 'https://nz.linkedin.com/in/geoffreytopeto',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://nz.linkedin.com/in/geoffreytopeto'},
];
