import PanoramaIcon from '@mui/icons-material/Panorama';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import DiamondIcon from '@mui/icons-material/Diamond';
import HotelIcon from '@mui/icons-material/Hotel';
import SailingIcon from '@mui/icons-material/Sailing';
import TheatersIcon from '@mui/icons-material/Theaters';

const event = () =>{
    return [
        {id:1, image: 'https://d11vyokdyewbcr.cloudfront.net/2841741_xlarge_cd2aab0b.jpg'},
        {id:2, image:'https://d20jhx4r9t6zw8.cloudfront.net/2844702_xlarge_b5069437.jpg'},
        {id:3, image:'https://d11vyokdyewbcr.cloudfront.net/2862207_xlarge_d830cfe0.jpg'},

    ]
}

const city = () =>{
    return [
        {id:1, name : 'Abu Dhabi'},
        {id:2, name: 'Amman'},
        {id:3, name:'Amsterdam'},
        {id:4, name:'Antigua'},
        {id:5, name:'Aspen'},
    ]
}

const capital = () =>{
    return [
        {id:1,name:'London'},
        {id:2,name:'New York'},
        {id:3,name:'Zurich'},
        {id:4,name:'Dubai'},
        {id:5,name:'Paris'},
        {id:6,name:'Los Angeles'}
    ]
}

const interest = () =>{
    return [
        {id:1, name:"Art", icon: PanoramaIcon},
        {id:2, name:"Food & Wine",icon: LocalDiningIcon },
        {id:3, name:"Music", icon:MusicNoteIcon},
        {id:4, name:"Cars", icon:TimeToLeaveIcon},
        {id:5, name:"Fashion", icon:DiamondIcon},
        {id:6, name:"Expat Living",icon: HotelIcon},
        {id:7, name:"Sailing",icon:SailingIcon},
        {id:8, name:"Theatre",icon:TheatersIcon},
        
    ]
}


export {event,city, capital, interest}