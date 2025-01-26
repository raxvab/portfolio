// Hare Krishna
 // Radhe Radhe
import React from "react";
import { ComponentType } from "react";
import { hyphenateSync } from "hyphen/en";

// Languages
import Java from "./svg/languages/Java";
import Cpp from "./svg/languages/Cpp";
import C from "./svg/languages/C";
import Python from "./svg/languages/Python";

import Html5 from "./svg/languages/Html5";
import Css3 from "./svg/languages/Css3";
import JavaScript from "./svg/languages/JavaScript";
import TypeScript from "./svg/languages/TypeScript";

// Frameworks

import Spring from "./svg/frameworks/Spring";
import ReactJs from "./svg/frameworks/ReactJs";
import NextJs from "./svg/frameworks/NextJs";

import ElectronJs from "./svg/frameworks/ElectronJs";
import TailwindCss from "./svg/frameworks/TailwindCss";
import LWJGL from "./svg/frameworks/LWJGL";

// Databases
import MySql from "./svg/databases/MySql";
import SqLite from "./svg/databases/SqLite";
import Supabase from "./svg/databases/Supabase";

// IDEs
import Eclipse from "./svg/ides/Eclipse";
import IntelliJ from "./svg/ides/IntelliJ";
import VSCode from "./svg/ides/VSCode";
import VisualStudio from "./svg/ides/VisualStudio";

// Tools
import Git from "./svg/tools/Git";
import Bash from "./svg/tools/Bash";
import Docker from "./svg/tools/Docker";
import Insomnia from "./svg/tools/Insomnia";
// import Python from "./svg/languages/Python";

export class Skill {
    name: string;
    IconComponent: ComponentType<{ className?: string }>;

    constructor(
        name: string,
        IconComponent: ComponentType<{ className?: string }>
    ) {
        this.name = name;
        this.IconComponent = IconComponent;
    }

    static java: Skill = new Skill("Java", Java);
    static cpp: Skill = new Skill("C++", Cpp);
    static c: Skill = new Skill("C", C);
    static python: Skill = new Skill("Python", Python);
    // static dart: Skill = new Skill("Dart", Dart);
    static html5: Skill = new Skill("HTML5", Html5);
    static css3: Skill = new Skill("CSS3", Css3);
    static javaScript: Skill = new Skill("JavaScript", JavaScript);
    static typeScript: Skill = new Skill("TypeScript", TypeScript);

    static spring: Skill = new Skill("Spring", Spring);
    static nextJs: Skill = new Skill("Next", NextJs);
    static reactJs: Skill = new Skill("React", ReactJs);
    static electronJs: Skill = new Skill("Electron", ElectronJs);
    static tailwindCss: Skill = new Skill("Tailwind", TailwindCss);
    static lwjgl: Skill = new Skill("LWJGL", LWJGL);

    static mySql: Skill = new Skill("MySQL", MySql);
    static sqLite: Skill = new Skill("SQLite", SqLite);
    static supabase: Skill = new Skill("Supabase", Supabase);

    static eclipse: Skill = new Skill("Eclipse", Eclipse);
    static intelliJ: Skill = new Skill("IntelliJ", IntelliJ);
    static vsCode: Skill = new Skill("VS Code", VSCode);
    static visualStudio: Skill = new Skill("VS", VisualStudio);

    static git: Skill = new Skill("Git", Git);
    static bash: Skill = new Skill("Bash", Bash);
    static docker: Skill = new Skill("Docker", Docker);
    static insomnia: Skill = new Skill("Insomnia", Insomnia);
}

export class SkillSet {
    name: string;
    skills: Skill[];

    constructor(name: string, skills: Skill[]) {
        this.name = name;
        this.skills = skills;
    }
}

function hyphenateJSX(element: React.ReactNode): React.ReactNode {
    if (typeof element === 'string') {
        return hyphenateSync(element);
    }

    if (React.isValidElement(element)) {
        const children = React.Children.map(element.props.children, child =>
            hyphenateJSX(child)
        );

        return React.cloneElement(element, {}, children);
    }

    if (Array.isArray(element)) {
        return element.map(child => hyphenateJSX(child));
    }

    return element;
}

export class Status {
    text: string;
    color: string;

    constructor(
        text: string,
        color: string
    ) {
        this.text = text;
        this.color = color;
    }

    static inDev: Status = new Status("In Dev", "text-yellow-700");
    static complete: Status = new Status("Complete", "text-green-700");
}

export class Detail {
    title: string;
    content: JSX.Element;

    constructor(
        title: string,
        content: JSX.Element
    ) {
        this.title = title;
        this.content = hyphenateJSX(content) as JSX.Element;
    }
}

export class Project {
    name: string;
    details: Detail[];
    status: Status;
    skills: string[];
    image: string;
    demoUrl?: string;
    githubUrl?: string;

    constructor(
        name: string,
        details: Detail[],
        status: Status,
        skills: string[],
        image: string,
        demoUrl?: string,
        githubUrl?: string
    ) {
        this.name = name;
        this.details = details;
        this.status = status;
        this.skills = skills;
        this.image = image;
        this.demoUrl = demoUrl;
        this.githubUrl = githubUrl;
    }
}

export class Job {
    name: string;
    company: string;
    date: string;
    details: Detail[];
    skills: string[];
    image: string;

    constructor(
        name: string,
        company: string,
        date: string,
        details: Detail[],
        image: string,
        skills: string[]
    ) {
        this.name = name;
        this.company = company;
        this.date = date;
        this.details = details;
        this.image = image;
        this.skills = skills;
    }
}
