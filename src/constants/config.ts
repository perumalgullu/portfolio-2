type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "S Perumal  — AI Developer Portfolio",
    fullName: "Perumal",
    email: "perumalgullu05@gmail.com",
  },

  hero: {
    name: "Perumal",
    p: [
      "AI Developer | Full Stack Developer",
      "Building Smart Web & Mobile Applications",
    ],
  },

  contact: {
    p: "Get in touch",
    h2: "Contact.",

    form: {
      name: {
        span: "Your Name",
        placeholder: "Enter your name",
      },

      email: {
        span: "Your Email",
        placeholder: "Enter your email",
      },

      message: {
        span: "Your Message",
        placeholder: "Write your message here",
      },
    },
  },

  sections: {
    about: {
      p: "Introduction",

      h2: "Overview.",

      content: `I'm S. Perumal, a passionate postgraduate MSc Computer Science student at Nazareth College of Arts & Science, Chennai. I enjoy transforming ideas into real-world applications using modern web technologies and creative problem-solving techniques. I completed my Bachelor of Computer Applications (BCA) at Vel Tech Ranga Sanku Arts and Science College, Chennai with a CGPA of 7.5 in 2024. My interests include Full Stack Web Development, Backend Systems, Artificial Intelligence, Computer Vision, and learning emerging technologies. I love building responsive web applications, AI-powered systems, and innovative digital solutions that solve practical problems.`,
    },

    experience: {
      p: "My Journey",

      h2: "Experience.",
    },

    feedbacks: {
      p: "Achievements",

      h2: "Achievements & Awards",
    },

    works: {
      p: "My Projects",

      h2: "Projects.",

      content: `These projects showcase my technical skills and practical experience in Full Stack Development, Artificial Intelligence, and Mobile Application Development.

Each project demonstrates my ability to build modern applications, solve complex problems, and work with technologies like React, Flutter, Python, OpenCV, Firebase, and MySQL.`,
    },
  },
};
