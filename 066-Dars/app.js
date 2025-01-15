// Detructuring Assignment
const mevalar=['olma','anor','uzum','shaftoli'];
const [olma,anor,uzum,...boshqa]=mevalar;
document.write(olma+'<br>',anor+'<br>',uzum+'<br>',boshqa+'<br>',' <br>');      

const jasurjon={
    ism:'Jasurjon',
    familya:'Toshtemirov',
    yosh:16,
    kasbi:'Developer'
};

const {ism,familya,yosh,kasbi}=jasurjon;
document.write(ism+'<br>',familya+'<br>',yosh+'<br>',kasbi+'<br>');