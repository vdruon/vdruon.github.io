var commands = {
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
    'download':'\nReady to download.\n'
};

jQuery(function($, undefined) {
    $('#body').terminal(function(command, term) {
        if (command !== '') {
            try {
                var result = text(eval(command));
                if (result !== undefined) 
                    term.echo(new String(result));
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
    }
}

function text(command) {
    var result = commands[command];
    if(result == undefined)
        return "Command not found.";
    return result;
}