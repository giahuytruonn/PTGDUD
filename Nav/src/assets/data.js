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

const eventdetail = () =>{
    return [
        {
            id:1,
            location:"TOTÓ Restaurant, Sheikh Mohammed Bin Rashid Boulevard, Dubai", 
            attendees:80, name:'Aperi at Totó - Dubai', 
            review:'Step into the golden era of Italian cinema and experience a night of elegance at TOTÓ, a tribute to the timeless charm of Italian-Mediterranean cuisine in the heart of Dubai.',
            description: `ASMALLWORLD invites members and their guests to join Ambassador Kristina Suchan for an exquisite evening at TOTÓ Dubai.
    
    From 6 PM to 8 PM, enjoy the exclusive "Aperi Totó," where selected mocktails, cocktails, and a curated selection of canapés will be offered at 50 AED per drink. After 8 PM, guests may continue to indulge at standard à la carte prices.

    Set in a sophisticated yet cozy atmosphere, TOTÓ is the perfect setting to connect with fellow members over exceptional cuisine and handcrafted drinks.

    Don't miss this chance to immerse yourself in the essence of Italy, right in the heart of Dubai.`,
            image1:'https://d11vyokdyewbcr.cloudfront.net/2841741_xlarge_cd2aab0b.jpg',
            image2:'https://d11vyokdyewbcr.cloudfront.net/2844705_xlarge_825c24f5.jpg',
            image3:'https://d20jhx4r9t6zw8.cloudfront.net/2844708_xlarge_5d7d6383.jpg'
}
    ]
}


export {event,city, capital, interest,eventdetail}