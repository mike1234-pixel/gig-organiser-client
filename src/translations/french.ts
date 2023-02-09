const french = {
    nav: {
        org: "JobSprint",
        home: "Accueil",
        dashboard: "Tableau de bord",
        jobs: "Emplois",
        actions: "Actions",
        signup: "Inscription",
        login: "Connexion",
        logout: "Déconnexion",
    },
    home: {
        title: "Organisez votre recherche d'emploi",
        subtitle: {
            one: "Trouver un emploi peut être une tâche effrayante, mais avec JobSprint, vous pouvez facilement suivre toutes vos candidatures et entretiens d'embauche au même endroit.",
            two: "Notez les notes et suivez l'avancement de chaque candidature, de sorte à ne jamais perdre de vue votre recherche d'emploi. Dites adieu aux carnets encombrants et aux post-it, et <strong>bonjour à une chasse à l'emploi élégante et organisée!</strong>",
        },
    },
    dashboard: {
        intro:
            "<p>Bienvenue sur votre <strong>tableau de bord</strong>! Ici, vous pouvez trouver un <strong>aperçu de votre progression dans la recherche d'emploi.</strong></p>",
    },
    jobs: {
        intro: {
            one: "<p>Dans votre recherche d'emploi, il est important de suivre les postes pour lesquels vous postulez et les progrès que vous faites avec chacun d'entre eux. Ici, vous pouvez ajouter un emploi, y compris son titre, sa description, sa priorité et son statut. Le <strong>titre</strong> est le nom du poste pour lequel vous postulez, la <strong>description</strong> fournit des détails supplémentaires sur l'emploi, la <strong>priorité</strong> indique à quel point il est important pour vous et le <strong>statut</strong> montre où vous en êtes dans le processus de candidature.</p>",
            two: "<p>Les emplois ont également des <strong>actions</strong>, qui sont les étapes spécifiques à suivre pour avancer dans la candidature. Ces actions peuvent être ajoutées sur la <strong>page d'actions</strong>, et peuvent inclure des choses telles que la planification d'un entretien ou la réalisation d'un test technique.</p><p>Vous pouvez <strong>trier les colonnes</strong> dans le tableau des emplois en cliquant sur les en-têtes de tableau. Vous pouvez également <strong>utiliser markdown pour formater le texte</strong> dans la description du poste. Il suffit d'entourer le texte que vous souhaitez formater dans la syntaxe markdown appropriée. Par exemple, **texte en gras** s'affiche en <strong>texte en gras</strong>.</p>",
        },
        add: "Ajouter",
        update: "Mettre à jour",
        updateAlt: "Mettre à jour",
        empty: {
            title: "Aucun emploi pour l'instant",
            text: "Commencez à ajouter des emplois !",
        },
        form: {
            label: {
                title: "Titre de l'emploi",
                organisation: "Organisation",
                description: "Entrez une description de l'emploi ou toutes les notes que vous souhaitez!",
                priority: "Définir la priorité. Sur une échelle de 1 à 10 (1 étant faible), à quel point cette opportunité est-elle importante?",
                status: "Quel est le statut de la candidature ?",
            },
        },
    },
    actions: {
        intro:
            "<p>Les emplois ont des <strong>actions</strong>, qui sont les étapes spécifiques à suivre pour avancer avec la candidature. Ces actions peuvent être ajoutées ici et peuvent inclure des choses comme la planification d'un entretien ou la réalisation d'un test technique.</p><p>Vous pouvez <strong>trier les colonnes</strong> dans le tableau des actions en cliquant sur les en-têtes de tableau. Vous pouvez également <strong>utiliser markdown pour formater le texte</strong> dans la description de l'action. Il suffit d'encadrer le texte que vous souhaitez formater dans la syntaxe markdown appropriée. Par exemple, texte en gras s'affiche en tant que <strong>texte en gras</strong>.</p>",
        add: "Créer",
        update: "Mettre à jour l'action",
        updateAlt: "Mettre à jour",
        error: {
            title: "Erreur",
            text: "Vous êtes déconnecté. Veuillez vous connecter pour voir vos actions.",
        },
        vide: {
            title: "Aucune action pour l'instant",
            text: "Commencez à ajouter des actions !",
        },
        formulaire: {
            étiquette: {
                nom: "Nom de l'action",
                description: "Description",
                terminéPar: "Quand cette action devrait-elle être terminée ?",
                emploi: "Pour quel emploi est cette action ?",
                terminé: "Action terminée ?",
            },
        },
    },
    account: {
        title: "Bienvenue sur votre page de compte!",
        subtitle: "Détails du compte",
        summary: {
            one: "Ici, vous pouvez voir votre adresse e-mail et votre nom, ainsi que supprimer votre compte.",
            two: "Si vous avez l'impression qu'il est temps de dire adieu, vous pouvez supprimer votre compte à partir de cette page. Veuillez noter que cette action ne peut pas être annulée, alors assurez-vous de vraiment vouloir le faire avant d'appuyer sur ce grand bouton rouge. Une fois votre compte supprimé, toutes vos données seront définitivement supprimées de nos systèmes.",
            three:
                "Nous espérons que vous apprécierez l'utilisation de l'application. Merci d'être partie de notre communauté!",
        },
        name: "Nom",
        email: "Email",
        delete: "Supprimer le compte",
    },
    signup: {
        title: "Bienvenue à JobSprint !",
        intro: {
            one: "<p>Pour commencer, tout ce que vous avez à faire est de <strong> vous inscrire pour votre compte.</strong></p>",
            two: "<p><strong>Pas besoin de vous inquiéter de la vérification de l'email</strong> - il vous suffit d'entrer votre nom d'utilisateur et votre mot de passe souhaités, et vous serez sur la bonne voie pour suivre votre recherche d'emploi comme un pro.</p>",
            three:
                "<p>Une fois inscrit, vous aurez accès à toutes les fonctionnalités qui font de JobSprint la meilleure manière d'organiser votre recherche d'emploi.</p>",
            four: "<p>Alors allez-y, inscrivez-vous et <strong> organisez-vous.</strong></p>",
        },
        success: {
            title: "Vous êtes prêt",
            intro: {
                one: "Bienvenue à JobSprint ! Vous êtes prêt et prêt à commencer à organiser votre recherche d'emploi comme un pro.",
                two: "Connectez-vous à votre compte et commencez à prendre le contrôle de votre recherche d'emploi. Avec JobSprint, atteindre votre prochaine opportunité d'emploi n'est qu'à quelques clics !",
            },
            login: "Connectez-vous à votre compte",
        },
        submit: "S'inscrire",
    },
    login: {
        title: "Connexion",
        welcome: {
            title: "Bienvenue de retour",
            text: "pour gérer vos emplois et actions.",
        },
        login: "Connexion",
    },
    loading: {
        title: "Chargement...",
        text: "une seconde...",
    },
    error: {
        title: "Erreur",
        tryagain: "Réessayer",
    },
    notfound: {
        title: "404 - Page non trouvée",
        text: "Désolé, la page que vous recherchez n'existe pas.",
    },
    welcome: {
        dashboard: "Aller au tableau de bord",
    },
    upcomingActions: {
        title: "Actions à venir",
        empty: {
            title: "Aucune action à venir",
            text: "Ajoutez des actions sur la ",
            linkText: "page des actions",
        },
        viewAll: "Voir tout",
    },
    jobStatusChart: {
        title: "Demandes d'emploi par statut",
        text: "Il n'y a pas d'emplois. Commencez à ajouter des emplois sur la ",
        linkText: "page des emplois.",
    },
    applicationsThisMonth: {
        title: "Demandes ce mois-ci",
    },
    topJobs: {
        title: "Meilleurs emplois",
        subtitle: "Emplois avec une haute priorité",
        empty: "Aucun emploi à haute priorité trouvé.",
        viewAll: "Voir tout",
    },
    pagination: {
        previous: "Précédent",
        next: "Suivant",
        page: "Page ",
        goToPage: "Aller à la page: ",
        show: "Montrer",
    },
}

export default french