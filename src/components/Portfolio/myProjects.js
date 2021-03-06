import { projectsImgs, lngLogo } from '../../utils/imagesDict';

const technologies = {
    // react:      { name: 'React.js',     logo: lngLogo['react'],     logoSize: 25 },
    // reactNative:{ name: 'React Native', logo: lngLogo['react'],     logoSize: 25 },
    // node:       { name: 'Node.js',      logo: lngLogo['node'],      logoSize: 25 },
    mongo:      { name: 'MongoDB',      logo: lngLogo['mongoDB'],   logoSize: 12 },
    python:     { name: 'python',       logo: lngLogo['python'],    logoSize: 25 },
    express:    { name: 'Express.js',   logo: lngLogo['express'],   logoSize: 50 },
    socket:     { name: 'Socket.io',    logo: lngLogo['socketio'],  logoSize: 25 },
    nextjs:     { name: 'Next.js',      logo: lngLogo['nextjs'],    logoSize: 25 },
    mysql:      { name: 'MySQL',        logo: lngLogo['mysql'],     logoSize: 25 },
    // firebase:   { name: 'firebase',     logo: lngLogo['firebase'],  logoSize: 25 },
    wordpress:  { name: 'WordPress',    logo: lngLogo['wordpress'], logoSize: 25 },
    htmlAndCss: { name: 'HTML-CSS',     logo: lngLogo['html_and_css'], logoSize: 25 },
    js:         { name: 'VanillaJS (ES6, ES7)', logo: lngLogo['javascript'], logoSize: 25 },
}

const { 
    // react, 
    nextjs, 
    mysql, 
    express,
    // firebase,
    // reactNative, 
    js, 
    // node,
    wordpress 
    // python, 
    // mongo, 
    // htmlAndCss, 
    // socket
} = technologies;

export const projects = [
    {
        name: 'Mercadoabierto',
        photo: projectsImgs['mercadoabierto'],
        technologies: [ nextjs, express, mysql ],
        url: 'https://greenerymarket.com/',
        code: 'https://github.com/'
    },
    {
        name: 'Aquetasa',
        photo: projectsImgs['aquetasa'],
        technologies: [ js, wordpress ],
        url: 'https://ksshire.co.uk/',
        code: 'https://github.com/'
    },
    {
        name: 'LibraryAudio',
        photo: projectsImgs['libraryaudio'],
        technologies: [ js, wordpress ],
        url: 'https://floorbrightcleaning.com/',
    },
    {
        name: 'nested-selects-react',
        photo: projectsImgs['nestedSelectsReact'],
        technologies: [ js, wordpress ],
        url: 'https://labfluenthouston.com/',
        code: 'https://github.com/'
    },
    {
        name: 'Img2save',
        photo: projectsImgs['img2save'],
        technologies: [ js, wordpress ],
        url: 'https://miamihomecinema.com/',
        code: 'https://github.com/'
    },
    {
        name: 'MasPlay',
        photo: projectsImgs['masplay'],
        technologies: [ js, wordpress ],
        url: 'http://masplay.now.sh/',
        code: 'https://github.com/coxato/videogames-room'
    },
    // {
    //     name: 'Gu??rico',
    //     photo: projectsImgs['guarico'],
    //     technologies: [ htmlAndCss, js, python ],
    //     url: 'https://carlosedua.pythonanywhere.com/',
    //     code: 'https://github.com/coxato/guarico.com'
    // },
    // {
    //     name: 'Chat messages',
    //     photo: projectsImgs['chat'],
    //     technologies: [ react, node, express, socket ],
    //     url: 'https://react-chat-carlosedua.netlify.app/',
    //     code: 'https://github.com/coxato/socket.io-chat-client'
    // },
    // {
    //     name: 'nested-selects',
    //     photo: projectsImgs['nestedSelects'],
    //     technologies: [ js ],
    //     url: 'https://github.com/coxato/nested-selects.js',
    //     code: 'https://github.com/coxato/nested-selects.js'
    // },

    
]