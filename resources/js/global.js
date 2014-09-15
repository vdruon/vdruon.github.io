var changing_language = false;

var commands_en = {
    'help':'\nSome basic commands to type : [COMMAND : DESCRIPTION]\n\n-    help/gimme some help : Get some help. \n-    me/you/tell me about you/about me : Learn more about me.\n-    experience/professional experiences/experiences/tell me about your experience : Learn more about my professional experiences.\n' +
            '-    skills/your skills/my skills/what are your skills/tell me about your skills : Learn more about my skills.\n-    download/download resume/download your resume : Download my resume in pdf.\n-    clear : Clears the terminal.\n', 
    'me':'\nHi I\'m Valentin DRUON, a french developer, self taught and self motivated, english lover, loving everything about new technologies.\n' +
        'I\'m fond of learning, coding, and reading and watching Les Mis&eacute;rables (the book as well as the movies and musicals). I play guitare for now 2 years and would like to learn playing other instruments.\n' +
        'I also love Batman, no more comment about this.\n' + 
'               _==/          i     i          \\==_\n'+
'             /XX/            |\\___/|            \\XX\\\n' +
'           /XXXX\\            |XXXXX|            /XXXX\\\n' +
'          |XXXXXX\\_         _XXXXXXX_         _/XXXXXX|\n' +
'         XXXXXXXXXXXxxxxxxxXXXXXXXXXXXxxxxxxxXXXXXXXXXXX\n' +
'        |XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|\n' +
'        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n' +
'        |XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|\n' +
'         XXXXXX/^^^^"\\XXXXXXXXXXXXXXXXXXXXX/^^^^^\\XXXXXX\n' +
'          |XXX|       \\XXX/^^\\XXXXX/^^\\XXX/       |XXX|\n' +
'            \\XX\\       \\X/    \\XXX/    \\X/       /XX/\n' +
'               "\\       "      \\X/      "       /"',
    'skills':'\nEnvironment :   MAC OS X Mavericks, Coding on Sublime Text 2, PixelMator (for visual edition).' +
             '\nWeb :           HTML/CSS/JavaScript/jQuery, Responsive design, ASP.NET, PHP (CakePHP, Symfony), Ruby on Rails.' +
             '\nTools :         GitHub, Subversion, Terminal.' +
             '\nDatabases :     Oracle, MySQL, PostgreSQL, SQL Server, NoSQL (such as MongoDB).' +
             '\nMobile :        Android, Windows Phone.' + 
             '\nHardware :      MacBook Pro Retina 15" late 2013, iPad Air 16Go, Samsung Galaxy S4.\n', 
    'experience':'\nNo experiences yet.\n', 
    'download':'\nYou have been redirected to my pdf resume.\n',
    'language':'In what language do you want this terminal to be displayed ? (fr or en).',
    'fr':'',
    'en':''
};

var commands_fr = {
    'help':'\nQuelques commandes &agrave; taper : [COMMANDE : DESCRIPTION]\n\n-    help/gimme some help : Afficher l\'aide. \n-    me/you/tell me about you/about me : En apprendre plus sur moi.\n-    experience/professional experiences/experiences/tell me about your experience : En apprendre plus sur mes exp&eacute;.\n' +
            '-    skills/your skills/my skills/what are your skills/tell me about your skills : En apprendre plus sur mes comp&eacute;tences et mon environnement de travail.\n-    download/download resume/download your resume : T&eacute;l&eacute;charger mon CV en PDF.\n-    clear : Effacer le terminal.\n', 
    'me':'\nJe suis Valentin DRUON, d&eacute;veloppeur français, autodidacte motiv&eacute;, passionn&eacute; par la langue anglaise, et adorant tout ce qui est en rapport avec les nouvelles technologies.\n' +
        'J\'adore apprendre de nouvelles choses, d&eacute;velopper, lire et regarder Les Mis&eacute;rables (aussi bien les livres que les films et les com&eacute;dies musicales). Je joue de la guitare depuis maintenant 2 ans, mais j\'aimerais jouer d\'autres instruments aussi t&ocirc;t que possible.\n' +
        'Je suis &eacute;galement fan du personnage de Batman, sans aucun commentaire suppl&eacute;mentaire.\n' + 
'               _==/          i     i          \\==_\n'+
'             /XX/            |\\___/|            \\XX\\\n' +
'           /XXXX\\            |XXXXX|            /XXXX\\\n' +
'          |XXXXXX\\_         _XXXXXXX_         _/XXXXXX|\n' +
'         XXXXXXXXXXXxxxxxxxXXXXXXXXXXXxxxxxxxXXXXXXXXXXX\n' +
'        |XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|\n' +
'        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n' +
'        |XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|\n' +
'         XXXXXX/^^^^"\\XXXXXXXXXXXXXXXXXXXXX/^^^^^\\XXXXXX\n' +
'          |XXX|       \\XXX/^^\\XXXXX/^^\\XXX/       |XXX|\n' +
'            \\XX\\       \\X/    \\XXX/    \\X/       /XX/\n' +
'               "\\       "      \\X/      "       /"',
    'skills':'\nEnvironnement :               MAC OS X Mavericks, Coding on Sublime Text 2, PixelMator (pour l\'&eacute;dition visuelle).' +
             '\nWeb :                         HTML/CSS/JavaScript/jQuery, Responsive design, ASP.NET, PHP (CakePHP, Symfony), Ruby on Rails.' +
             '\nOutils :                      GitHub, Subversion, Terminal.' +
             '\nBases de donn&eacute;es :            Oracle, MySQL, PostgreSQL, SQL Server, NoSQL (such as MongoDB).' +
             '\nMobile :                      Android, Windows Phone.' + 
             '\nMat&eacute;riel :                    MacBook Pro Retina 15" late 2013, iPad Air 16Go, Samsung Galaxy S4.\n', 
    'experience':'\nNo experiences yet.\n', 
    'download':'\nVous avez &eacute;t&eacute; redirig&eacute; vers mon CV.\n',
    'language':'Dans quel langue souhaitez vous que ce terminal soit affich&eacute; ? (fr or en).',
    'fr':'',
    'en':''
};

var current_commands = commands_en;

jQuery(function($, undefined) {
    $('#body').terminal(function(command, term) {
        if (command !== '') {
            try {
                var result = text(eval(command));
                if (result !== undefined) 
                {
                    term.echo(new String(result));
                    execute(command, term);
                }
            } catch(e) {
                term.error(new String(e));
            }
        } else {
           term.echo('');
        }
    }, {
        greetings: 'Last login: Thu Sep 11 13:56:09 on ttys000 \nWelcome on my online resume, type \'help\' to get some basic commands.\n',
        name: 'terminal',
        height: 600,
        prompt: 'visitor> '});
});

function execute(command, term)
{
    switch(command)
    {
        case 'download':
            window.open("https://www.dropbox.com/s/okt8hchttqzlqav/CV%20Web.pdf?dl=0", '_blank');
            break;
        case 'language':
            changing_language = true;
            break;
        case 'fr':
        case 'en':
            if(changing_language == true)
                change_language(command, term);
            break;
    }
}

function change_language(language, term)
{
    switch(language)
    {
        case 'fr':
            current_commands = commands_fr;
            term.echo('Langage chang&eacute; en fran&ccedil;ais.');
            break;
        case 'en':
            current_commands = commands_en;
            term.echo('Language changed in english.');
            break;
    }
    changing_language = false;
}

function eval(command){
    switch(command)
    {
        case 'help':
        case 'gimme some help': 
            return 'help';
        case 'me':
        case 'you':
        case 'tell me about you':
        case 'about me':
            return 'me';
        case 'skills':
        case 'your skills': 
        case 'my skills':
        case 'what are your skills':
        case 'tell me about your skills':
            return 'skills';
        case 'experience':
        case 'professional experiences':
        case 'experiences':
        case 'tell me about your experiences':
            return 'experience';
        case 'download':
        case 'download resume':
        case 'download your resume':
            return 'download';
        case 'language':
            return 'language';
        case 'fr':
        case 'en':
            return command;
    }
}

function text(command) {
    var result = current_commands[command];
    if(result == undefined)
        return "Command not found.";
    return result;
}