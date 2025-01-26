import * as Classes from "./Classes";
import Anchor from "./components/Anchor";

export const userInfo = {
    fullName: "Vaibhav Shukla",
    shortName: "Whyybhav",
    nickName: "Whyybhav",
    description: new Classes.Detail(
        "Description",
        <>
            Hi there!
            I am Vaibhav, FullStack Developer.
            <br />
            What sets me apart is my commitment to continuous learning and problem-solving. I have solved over 1,000 problems on competitive coding platforms, which has sharpened my understanding of data structures and algorithms—a skill that I believe is critical in crafting efficient solutions. Beyond technical expertise, I bring strong soft skills, including leadership, cross-team communication, and technical writing, ensuring seamless collaboration and delivery.
            <br /><br />
            When I'm not coding, I'm either snapping photos, vibing to music, or hanging out with
            my parrot, who's convinced he's the real star here.
        </>
    ),
    role: "Full-Stack Developer",
    education: {
        link: "https://www.ietlucknow.ac.in/",
        school: "Institute of Engineering & Technology",
        period: "Bachelor's degree 2019 - 2023",
    },
    resumes: {
        EN: "resumes/EN.pdf",
       
    },
};
export const skillSets = [
    new Classes.SkillSet(
        "Languages",
        [
            Classes.Skill.java,
            Classes.Skill.cpp,
            Classes.Skill.c,
            Classes.Skill.python,
            Classes.Skill.javaScript,
            Classes.Skill.typeScript,
        ]
    ),
    new Classes.SkillSet(
        "Front-End",
        [
            Classes.Skill.html5,
            Classes.Skill.css3,
            Classes.Skill.nextJs,
            Classes.Skill.reactJs,
            Classes.Skill.tailwindCss,

        ]
    ),
    new Classes.SkillSet(
        "Back-End",
        [
            Classes.Skill.spring,
            Classes.Skill.mySql,
            Classes.Skill.sqLite,
        ]
    ),
    new Classes.SkillSet(
        "IDEs",
        [
            Classes.Skill.eclipse,
            Classes.Skill.intelliJ,
            Classes.Skill.vsCode,
            Classes.Skill.visualStudio,
        ]
    ),
    new Classes.SkillSet(
        "Tools",
        [
            Classes.Skill.git,
            Classes.Skill.bash,
            Classes.Skill.docker,

        ]
    ),
];
export const jobs = [
    new Classes.Job(
        "Solution Engineer",
        "Western Union",
        "Aug 2023 - Present",
        [
            new Classes.Detail(
                "Description",
                <>
                    <ul>
                        <li>
                            # Enhanced Transactional API Systems by improving SMS notification services across 6 countries,
                            increasing reliability and user engagement for international transactions. --------------------------------------------------------
                        </li>
                        <li>
                            # Streamlined CI/CD Pipelines through CloudBees for continuous integration and Spinnaker for
                            continuous delivery, leading seamless AWS deployments and minimizing production downtime.------------------------------------------------------------------
                        </li>
                        <li>
                            # Resolved Critical Failures by managing rollback procedures for failed pipelines and leading
                            war room sessions for rapid issue resolution, ensuring minimal service impact and maintaining high availability.
                        </li>
                    </ul>
                </>
            )
        ],
        "jobs/WU.png",
        ["Java", "Spring Boot", "AWS", "CloudBees", "Spinnaker", "JUnit", "Mockito", "PostgreSQL"]
    ),
    new Classes.Job(
        "Backend Intern",
        "Bytelearn.io",
        "Sept 2022 - Dec 2022",
        [
            new Classes.Detail(
                "Description",
                <>
                    <ul>
                        <li> # Backend server support Implemented multiple new categories for the backend server to support the chatbot.
                        </li>

                        <li> # Python integration Developed Python functions with unit tests to support Jina categories.
                        </li><li> #Templating architecture Integrated Jinja-based templating architecture to manage similar sets of problems.
                        </li>
                    </ul>
                </>
            ),
        ],
        "jobs/bytelearn.png",
        ["Python", "Jinja", "HTML", "Git", "JavaScript"]
    ),
 // coding age + WU internship dal skte hain
 // Hare Krishna
 // Radhe Radhe
];
export const projects = [
    new Classes.Project(
        "Calculator",
        [
            new Classes.Detail(
                "Description",
                <>


                    <ul>
                        <li>The calculator project is a sleek and user-friendly web application designed for basic arithmetic operations.</li>
                        <li>It provides an intuitive interface with responsive functionality for enhanced usability.</li>
                        <li>Built with React.js & Javascript including JSX, it ensures fast performance and accessibility.</li> Built with React.js & Javascript including JSX, it ensures fast performance and accessibility.

                    </ul>
                </>
            ),
        ],
        Classes.Status.complete,
        ["React.js", "Vscode", " Bootstrap", "Javascript", "HTML", "CSS"],
        "projects/calculator.png",
        "https://calculator-raxvab.vercel.app/",
        "https://github.com/raxvab/calc"
    ),
    new Classes.Project(
        "Developer Portfolio",
        [
            new Classes.Detail(
                "Description",
                <>
                    Built this portfolio to show my work and what I'm
                    passionate about in software development.
                </>
            ),
        ],
        Classes.Status.complete,
        ["typescript", "next", "react", "tailwind css", "formspree"],
        "projects/portfolio.png",
        "https://www.linkedin.com/in/whyybhav/",
        "https://github.com/raxvab"
    ),
    new Classes.Project(
        "Zippy.fit",
        [
            new Classes.Detail(
                "Description",
                <>
                    <li>
                        Freelancing group project executed with Couple of team members in college final year.
                    </li>
                    <li>Developed a static Landing page as a UI update for the client zippy.fit via React.js and HTML, CSS, JS.</li>
                    <li>Fully responsive page designed with robustly utilized CSS and HTML concepts along with thefunctionalities of react.js reducing the loading time by ~39%</li>
              
                    <li>Strengthened features like using svg images along with the parallax functionality for improvements increasing the traffic by ~15%.</li>
                
                </>
            ),
        ],
Classes.Status.complete,
    ["React.js", "HTML", "CSS", "JavaScript", "Figma"],
    "projects/zippy.png",
    "https://zippy-fit.vercel.app/",
    "https://github.com/raxvab/zippy.fit"
    ),


new Classes.Project(
    "Task Manager API",
    [
        new Classes.Detail(
            "Description",
            <>
                <li>
                   
                    Build A REST API using nodejs to store a user’s tasks in Mongo Atlas . </li><li>
                    Created an Authentication API for signup/login for user using jwt-tokens. User will be notified via a email whenever he signup or delete Profile.</li>
                 <li>   User can Create, Read , Delete and Update a task.</li>
            </>
        ),
    ],
    Classes.Status.inDev,
    ["JavaScript", "Node.js", "Express", "Mongodb", "JSON"],
    "projects/TaskManagerApi.png",
    undefined,
    "https://github.com/raxvab/TASK_MANAGER-API"
),
new Classes.Project(
    "Weather App",
    [
        new Classes.Detail(
            "Description",
            <>
                <li>
                Display current weather conditions (temperature, description, etc.).</li>
                <li>Search for weather by location.</li>

<li>Responsive design for various devices.</li>
            </>
        ),
    ],
    Classes.Status.complete,
    ["JavaScript", "HTML", "CSS"],
    "projects/weather-app.png",
    "https://weather-app-alpha-beige-62.vercel.app/",
    "https://github.com/raxvab/Weather-app-using-HTML-CSS-JS"
),
new Classes.Project(
    "Dqueue",
    [
        new Classes.Detail(
            "Description",
            <>
                <li>
                    Made using MERN stack which intends to solve the problem of longer waiting queues in shopping malls
                </li>
                <li> Customers can scan the barcode on their own and make payment</li>

                <li>Traffic on Billing counter will be minimised.</li>
                <li>Reducing the time consumption by ~59%</li>
            </>
        ),
    ],
    Classes.Status.inDev,
    ["JavaScript", "Node.js", "Figma"],
    "projects/dqueue.png",
    undefined,
    "https://github.com/NON-FastAndSerious/Dqueue-App"
),
   
];
export const contactInfo = {
    formspreeKey: "xnnjjdzg",
    reCaptchaKey: "6LdLCQkqAAAAAJqQeo3ss5PdqytaM9QWrol9x5vY",//yet to be provided
    location: "Pune Maharashtra",
    phone: "+91 6393 270 177",
    email: "vaibhav.btech23.iet@gmail.com",
    github: "https://github.com/raxvab/",
    telegram: "https://t.me/telegramcrawler/",
    instagram: "https://www.instagram.com/raxvab/",
    linkedin: "https://www.linkedin.com/in/whyybhav/",
};
export const footer = [
    "© 2025 Vaibhav Shukla",
    "I am BatMan",
];
export const tracker = {
    toggled: true,
    url: "https://discord.com/api/webhooks/1333077455644393625/5vrWhGEad0K-1Oh3AsE-TTsBQqIaEB7uRojm-7uXGjkzxi4BrLb3Ud2XBJMRaFRh40wL",
};
