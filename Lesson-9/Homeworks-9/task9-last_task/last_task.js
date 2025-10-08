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


const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);
///////////////////////////////////////////////////////////////
const titleDiv = document.getElementsByClassName('wrapper')[0];

for (const courseTitle of coursesArray) {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerText = courseTitle.title;
    titleDiv.appendChild(menu);
}
///////////////////////////////////////////////////////////////
const wrapperOfMonth = document.createElement('div')
wrapperOfMonth.classList.add('alsoWrapper');
document.body.appendChild(wrapperOfMonth);

///////////////////////////////////////////////////////////////
const monthDiv = document.getElementsByClassName('alsoWrapper')[0];

for (const courseMonth of coursesArray) {
    const month = document.createElement('div');
    month.classList.add('month');
    month.innerText = `Month Duration:${courseMonth.monthDuration}`;
   wrapperOfMonth.appendChild(month)
    monthDiv.appendChild(month);
}
