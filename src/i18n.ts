import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      home: {
        title: "Organise Your Job Search",
        subtitle: {
          one: "Looking for a job can be a daunting task, but with JobSprint, you can easily keep track of all your job applications and interviews in one place.",
          two: "Jot down notes and track the progress of each application, so you never lose sight of your job search. Say goodbye to cluttered notebooks and sticky notes, and <strong>hello to a sleek and organised job hunt!</strong>",
        },
      },
      jobs: {
        intro: {
          one: "In your job search, it's important to keep track of the positions you're applying for and the progress you're making with each one. Here you can add a job, including its title, description, priority, and status. The <strong>title</strong> is the name of the position you're applying for, the <strong>description</strong> provides more details about the job, the <strong>priority</strong> indicates how important it is to you, and the <strong>status</strong> shows where you are in the application process.",
          two: "Jobs also have <strong>actions</strong>, which are the specific steps you need to take in order to move forward with the application. These actions can be added on the <strong>actions page</strong>, and might include things like scheduling an interview or completing a technical test.",
        },
        add: "Add Job",
        update: "Update Job",
        empty: {
          title: "No jobs yet.",
          text: "Start adding jobs!",
        },
      },
      actions: {
        intro:
          "Jobs have <strong>actions</strong>, which are the specific steps you need to take in order to move forward with the application. These actions can be added here, and might include things like scheduling an interview or completing a technical test.",
        add: "Create Action",
        update: "Update Action",
        empty: {
          title: "No actions yet.",
          text: "Start adding actions!",
        },
      },
      account: {
        title: "Welcome to your account page!",
        subtitle: "Account Details",
        summary: {
          one: "Here you can see your email address and name, as well as delete your account.",
          two: "If you're feeling like it's time to say goodbye, you can delete your account from this page. Please note that this action cannot be undone, so make sure you really want to do it before hitting that big red button. Once your account is deleted, all of your data will be permanently removed from our systems.",
          three:
            "We hope you enjoy using the application. Thanks for being a part of our community!",
        },
        name: "Name",
        email: "Email",
        delete: "Delete Account",
      },
      loading: {
        title: "Loading...",
        text: "just a second...",
      },
      error: {
        title: "Error",
      },
      notfound: {
        title: "404 - Page Not Found",
        text: "Sorry, the page you are looking for does not exist.",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safe from xss
    },
  });

export default i18n;
