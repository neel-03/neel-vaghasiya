export type Tech = {
    techId: string,
    techName: string,
    techIcon: string
}

export type Project = {
    id: string
    heading: string
    description: string
    content: string
    imgURL: string
    tech: Tech[]
    liveLink: undefined | string
    githubLink: undefined | string
}

export const projects: Project[] = [
    {
        id: "1",
        heading: "QuizBee",
        description: "An AI-based Quiz Generation WebApp",
        content: "Developed in collaboration with a team member, QuizBee uses ChatGPT to generate dynamic quizzes on various topics. It includes features like quiz attempts and sharing functionality.",
        imgURL: "https://agxxxwckmuptjtzvrpzw.supabase.co/storage/v1/object/public/resume/quizbee.png",
        tech: [
            {
                techId: '1',
                techName: 'Next.js',
                techIcon: 'https://simpleicons.org/icons/nextdotjs.svg'
            },
            {
                techId: '2',
                techName: 'Tailwind CSS',
                techIcon: 'https://simpleicons.org/icons/tailwindcss.svg'
            },
            {
                techId: '3',
                techName: 'MongoDB',
                techIcon: 'https://simpleicons.org/icons/mongodb.svg'
            },
            {
                techId: '4',
                techName: 'OpenAI API',
                techIcon: 'https://simpleicons.org/icons/openai.svg'
            },
        ],
        liveLink: "https://sdp-project-1.vercel.app",
        githubLink: "https://github.com/neel-03/sdp-project"
    },
    {
        id: "2",
        heading: "Document Converter",
        description: "Format conversion tool",
        content: "Developed a tool that converts files from one format to another, such as JSON to CSV and vice versa. Users can preview or download the converted file.",
        imgURL: "https://agxxxwckmuptjtzvrpzw.supabase.co/storage/v1/object/public/resume/document-converter.png",
        tech: [
            {
                techId: '1',
                techName: 'React.js',
                techIcon: 'https://simpleicons.org/icons/react.svg'
            },
            {
                techId: '2',
                techName: 'CSS',
                techIcon: 'https://simpleicons.org/icons/css3.svg'
            },
            {
                techId: '3',
                techName: 'Azure Functions',
                techIcon: 'https://www.svgrepo.com/show/305771/azurefunctions.svg'
            },
        ],
        liveLink: "https://document-converter.vercel.app/",
        githubLink: "https://github.com/neel-03/Document-Converter"
    },
    {
        id: "3",
        heading: "Project Tracker",
        description: "Full-stack project management system",
        content: "Personal project that includes roles for mentor and admin. Both roles can manage projects, while admins also manage mentor.",
        imgURL: "https://agxxxwckmuptjtzvrpzw.supabase.co/storage/v1/object/public/resume/project-tracker.png",
        tech: [
            {
                techId: '1',
                techName: 'React.Js',
                techIcon: 'https://simpleicons.org/icons/react.svg'
            },
            {
                techId: '2',
                techName: 'CSS',
                techIcon: 'https://simpleicons.org/icons/css3.svg'
            },
            {
                techId: '3',
                techName: 'Redux',
                techIcon: 'https://simpleicons.org/icons/redux.svg'
            },
            {
                techId: '4',
                techName: 'Spring Boot',
                techIcon: 'https://simpleicons.org/icons/springboot.svg'
            },
            {
                techId: '5',
                techName: 'Spring Security',
                techIcon: 'https://simpleicons.org/icons/springsecurity.svg'
            },
            {
                techId: '6',
                techName: 'JSON Web Tokens',
                techIcon: 'https://simpleicons.org/icons/jsonwebtokens.svg'
            },
            {
                techId: '7',
                techName: 'PostgreSQL',
                techIcon: 'https://simpleicons.org/icons/postgresql.svg'
            },
        ],
        liveLink: "https://project-tracker-rouge.vercel.app/",
        githubLink: "https://github.com/neel-03/ProjectTracker"
    },
    {
        id: "4",
        heading: "Personal Portfolio",
        description: "Showcase of my work and skills",
        content: "Built a responsive personal portfolio website that represents my skills and showcases various projects.",
        imgURL: "https://agxxxwckmuptjtzvrpzw.supabase.co/storage/v1/object/public/resume/portfolio.png",
        tech: [
            {
                techId: '1',
                techName: 'Next.js',
                techIcon: 'https://simpleicons.org/icons/nextdotjs.svg'
            },
            {
                techId: '2',
                techName: 'Tailwind CSS',
                techIcon: 'https://simpleicons.org/icons/tailwindcss.svg'
            },
            {
                techId: '3',
                techName: 'Supabase',
                techIcon: 'https://simpleicons.org/icons/supabase.svg'
            },
        ],
        liveLink: undefined,
        githubLink: 'https://github.com/neel-03/neel-vaghasiya'
    }
]