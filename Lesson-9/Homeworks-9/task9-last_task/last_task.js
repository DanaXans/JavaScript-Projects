let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


const wrapperMenu = document.createElement('div');
wrapperMenu.classList.add('wrapperMenu');
document.body.appendChild(wrapperMenu);
///////////////////////////////////////////////////////////////
const titleDiv = document.getElementsByClassName('wrapperMenu')[0];

for (const courseTitle of coursesArray) {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerText = courseTitle.title;
    titleDiv.appendChild(menu);
}
///////////////////////////////////////////////////////////////
const wrapperMonthAndHour = document.createElement('div')
wrapperMonthAndHour.classList.add('wrapperMonthAndHour');
document.body.appendChild(wrapperMonthAndHour);
///////////////////////////////////////////////////////////////
const monthDiv = document.getElementsByClassName('wrapperMonthAndHour')[0];

for (const MonthAndHour of coursesArray) {
    const month = document.createElement('div');
    month.classList.add('month');
    month.innerText = `Month Duration: ${MonthAndHour.monthDuration}
    Hour Duration: ${MonthAndHour.hourDuration}`;
    wrapperMonthAndHour.appendChild(month)
    monthDiv.appendChild(month);
}
/////////////////////////////////////////////////////////////////
const wrapperModule = document.createElement('div');
wrapperModule.classList.add('wrapperModule');
document.body.appendChild(wrapperModule);

const modulesDiv = document.getElementsByClassName('wrapperModule')[0];

for (let course of coursesArray) {
    const courseTitle = course.modules;
    const ul = document.createElement('ul');
    ul.classList.add('ulModules');
    for (const courseModule of courseTitle) {
        const module = document.createElement('li');
        module.classList.add('liModules');
        module.innerText = courseModule;
        ul.appendChild(module);
        wrapperModule.appendChild(ul);
        modulesDiv.appendChild(ul);
    }
}