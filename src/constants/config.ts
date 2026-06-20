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
    title: "S Perumal | AI Engineer & Full-Stack Developer",
    fullName: "S Perumal",
    email: "perumalgullu05@gmail.com",
  },

  hero: {
    name: "Perumal",
    p: [
      "Full-Stack Developer • AI Engineer",
      "Building Intelligent Web, Mobile & AI Solutions",
    ],
  },

  contact: {
    p: "Let's Connect",
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
      p: "About Me",

      h2: "Overview.",

      content: `I'm S. Perumal, a Full-Stack Developer and AI Enthusiast with hands-on experience in web development, mobile application development, and computer vision.

I completed my MSc in Computer Science from Nazareth College of Arts & Science, Chennai, graduating as Class Topper and earning multiple Subject Topper distinctions in Artificial Intelligence, Machine Learning, Data Science, Cryptography, and Theory of Computation.

During my internship at Scale Up Institute, I contributed to the development of a full-stack Bus Ticket Booking platform using ReactJS, Spring Boot, PostgreSQL, and Firebase Authentication.

My expertise includes ReactJS, Flutter, Python, OpenCV, Firebase, MySQL, PostgreSQL, Machine Learning, and Computer Vision. I am passionate about developing innovative software solutions that solve real-world challenges through Artificial Intelligence, Full-Stack Development, and emerging technologies.`,
    },

    experience: {
      p: "Professional Experience",
      h2: "Experience.",
    },

    feedbacks: {
      p: "Achievements & Recognition",
      h2: "Awards & Achievements.",
    },

    works: {
      p: "Featured Projects",
      h2: "Projects.",

      content: `These projects showcase my experience in Full-Stack Development, Artificial Intelligence, Computer Vision, and Mobile Application Development.

Each project demonstrates my ability to design, develop, and deploy scalable solutions using ReactJS, Flutter, Python, OpenCV, Firebase, MySQL, PostgreSQL, and modern development tools.`,
    },
  },
};