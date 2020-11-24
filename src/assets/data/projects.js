import mern from "../img/mern.jpg"
import qpgen from "../img/qpgen.jpg";
import tour from "../img/tour.jpg"

const PROJECTS = [
    {
        id: 1,
        title: 'Photo Album Maker',
        description: 'A website where photographer can create album and share with their clients',
        link: 'https://github.com/JayThakkar17/PhotoAlbumMaker',
        image: mern
    },
    {
        id: 2,
        title: 'Automatic Question Paper Generator',
        description: 'A website where professors can generate question paper easily with one click.',
        link: 'https://github.com/JayThakkar17',
        image: qpgen
    },
    {
        id: 3,
        title: 'All in One Tour & Travels',
        description: 'A website that can help customers to book their packages for tour and traveling purpose.',
        // link: 'https://github.com/JayThakkar17',
        image: tour
    }
];

export default PROJECTS;