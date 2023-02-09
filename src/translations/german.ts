const german = {
    nav: {
        org: "JobSprint",
        home: "Startseite",
        dashboard: "Übersicht",
        jobs: "Stellenangebote",
        actions: "Aktionen",
        signup: "Registrieren",
        login: "Anmelden",
        logout: "Abmelden",
    },
    home: {
        title: "Organisiere deine Jobsuche",
        subtitle: {
            one: "Eine Jobsuche kann eine Herausforderung sein, aber mit JobSprint kannst du einfach alle deine Bewerbungen und Vorstellungsgespräche an einem Ort verfolgen.",
            two: "Notiere dir Notizen und verfolge den Fortschritt jeder Bewerbung, damit du deine Jobsuche nicht aus den Augen verlierst. Sage Tschüss zu unordentlichen Notizbüchern und Haftnotizen und heiße eine schicke und organisierte Jobsuche willkommen!",
        },
    },
    dashboard: {
        intro:
            "<p>Willkommen in deiner <strong>Übersicht</strong>! Hier kannst du einen <strong>Überblick über deinen Fortschritt bei der Jobsuche</strong> erhalten.</p>",
    },
    jobs: {
        intro: {
            one: "<p>Bei der Jobsuche ist es wichtig, den Fortschritt bei den einzelnen Bewerbungen zu verfolgen. Hier kannst du einen Job hinzufügen, inklusive Jobtitel, Beschreibung, Priorität und Status. Der <strong>Titel</strong> ist der Name der Stelle, auf die du dich bewirbst, die <strong>Beschreibung</strong> liefert weitere Details zum Job, die <strong>Priorität</strong> gibt an, wie wichtig dir der Job ist, und der <strong>Status</strong> zeigt, wo du im Bewerbungsprozess stehst.</p>",
            two: "<p>Jobs haben auch <strong>Aktionen</strong>, die die spezifischen Schritte sind, die du unternehmen musst, um mit der Bewerbung voranzukommen. Diese Aktionen können auf der <strong>Aktionen-Seite</strong> hinzugefügt werden und können beispielsweise ein Interview vereinbaren oder einen technischen Test absolvieren. </p><p>Du kannst die Spalten in der Job-Tabelle durch Klicken auf die Tabellenüberschriften <strong>sortieren</strong>. Du kannst auch <strong>Markdown verwenden, um den Text zu formatieren</strong> in der Jobbeschreibung. Umgebe einfach den Text, den du formatieren möchtest, mit der entsprechenden Markdown-Syntax. Zum Beispiel zeigt fett gedruckter Text als <strong>fett gedruckter Text</strong> an.</p>",
        },
        add: "Hinzufügen",
        update: "Job aktualisieren",
        updateAlt: "Aktualisieren",
        empty: {
            title: "Noch keine Jobs.",
            text: "Fange an, Jobs hinzuzufügen!",
        },
        form: {
            label: {
                title: "Jobtitel",
                organisation: "Organisation",
                description: "Gib eine Jobbeschreibung oder Notizen ein, die du haben möchtest!",
                priority: "Leg die Priorität fest. Auf einer Skala von 1-10 (1 = gering), wie wichtig ist diese Gelegenheit für dich?",
                status: "Welcher ist der Status der Bewerbung?",
            },
        },
    },
    actions: {
        intro:
            "<p>Jobs haben <strong>Aktionen</strong>, die die spezifischen Schritte sind, die Sie ausführen müssen, um mit der Bewerbung fortzufahren. Diese Aktionen können hier hinzugefügt werden und können Dinge wie das Planen eines Interviews oder das Absolvieren eines technischen Tests beinhalten.</p><p>Sie können die Spalten in der Aktions-Tabelle <strong>nach dem Klicken auf die Tabellenkopfzeilen sortieren</strong>. Sie können auch <strong>Markdown verwenden, um den Text im Aktionsbeschreibung zu formatieren</strong>. Umwickeln Sie einfach den Text, den Sie formatieren möchten, in der geeigneten Markdown-Syntax. Zum Beispiel wird fett gedruckter Text als <strong>fett gedruckter Text</strong> angezeigt.</p>",
        add: "Erstellen",
        update: "Aktion aktualisieren",
        updateAlt: "Aktualisieren",
        error: {
            title: "Fehler",
            text: "Sie sind ausgeloggt. Bitte loggen Sie sich ein, um Ihre Aktionen anzusehen.",
        },
        empty: {
            title: "Noch keine Aktionen.",
            text: "Beginnen Sie mit dem Hinzufügen von Aktionen!",
        },
        form: {
            label: {
                name: "Name der Aktion",
                description: "Beschreibung",
                completedBy: "Wann sollte diese Aktion abgeschlossen sein?",
                job: "Welcher Job ist diese Aktion?",
                completed: "Aktion abgeschlossen?",
            },
        },
    },
    account: {
        title: "Willkommen auf deiner Konto-Seite!",
        subtitle: "Kontodetails",
        summary: {
            one: "Hier kannst du deine E-Mail-Adresse und deinen Namen sehen und dein Konto löschen.",
            two: "Wenn du das Gefühl hast, dass es Zeit ist zu gehen, kannst du dein Konto von dieser Seite aus löschen. Bitte beachte, dass diese Aktion nicht rückgängig gemacht werden kann, stelle also sicher, dass du das wirklich tun möchtest, bevor du auf den großen roten Knopf drückst. Sobald dein Konto gelöscht wurde, werden alle deine Daten dauerhaft aus unseren Systemen entfernt.",
            three:
                "Wir hoffen, dass du die Anwendung genießt. Danke, dass du Teil unserer Community bist!",
        },
        name: "Name",
        email: "E-Mail",
        delete: "Konto löschen",
    },
    signup: {
        title: "Willkommen bei JobSprint!",
        intro: {
            one: "<p>Um loszulegen, musst du dich nur für dein Konto <strong>anmelden.</strong></p>",
            two: "<p><strong>Keine Sorge um die E-Mail-Verifizierung</strong> - gib einfach deinen gewünschten Benutzernamen und dein Passwort ein, und du bist auf dem Weg, deine Jobsuche wie ein Profi zu verfolgen.</p>",
            three:
                "<p>Sobald du angemeldet bist, hast du Zugriff auf alle Funktionen, die JobSprint zur besten Möglichkeit machen, deine Jobsuche zu organisieren.</p>",
            four: "<p>Also los, melde dich an und <strong>organisiere</strong>.</p>",
        },
        success: {
            title: "Du bist bereit",
            intro: {
                one: "Willkommen bei JobSprint! Du bist bereit und kannst jetzt deine Jobsuche wie ein Profi organisieren.",
                two: "Melde dich bei deinem Konto an und beginne, deine Jobsuche zu steuern. Mit JobSprint ist die Chance auf den nächsten Job nur wenige Klicks entfernt!",
            },
            login: "Melde dich bei deinem Konto an",
        },
        submit: "Anmelden",
    },
    login: {
        title: "Anmeldung",
        welcome: {
            title: "Willkommen zurück",
            text: "um deine Jobs und Aktionen zu verwalten.",
        },
        login: "Anmelden",
    },
    loading: {
        title: "Lädt...",
        text: "nur eine Sekunde...",
    },
    error: {
        title: "Fehler",
        tryagain: "Erneut versuchen",
    },
    notfound: {
        title: "404 - Seite nicht gefunden",
        text: "Entschuldigung, die von Ihnen gesuchte Seite existiert nicht.",
    },
    welcome: {
        dashboard: "Zum Dashboard gehen",
    },
    upcomingActions: {
        title: "Kommende Aktionen",
        empty: {
            title: "Keine kommenden Aktionen",
            text: "Füge einige Aktionen auf der ",
            linkText: "Aktionenseite",
        },
        viewAll: "Alle anzeigen",
    },
    jobStatusChart: {
        title: "Bewerbungen nach Status",
        text: "Es gibt keine Jobs. Fange an Jobs auf der ",
        linkText: "Jobseite",
    },
    applicationsThisMonth: {
        title: "Bewerbungen diesen Monat",
    },
    topJobs: {
        title: "Top Jobs",
        subtitle: "Jobs mit hoher Priorität",
        empty: "Keine Jobs mit hoher Priorität gefunden.",
        viewAll: "Alle anzeigen",
    },
    pagination: {
        previous: "Zurück",
        next: "Weiter",
        page: "Seite ",
        goToPage: "Gehe zu Seite: ",
        show: "Anzeigen",
    },
}

export default german