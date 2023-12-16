export const find_logo=(logo)=>{
    let logos= [["Html5","https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"] ,
    [ "Css","https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" ],
   [  "Bootstrap","https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" ],
   [  "Javascript","https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" ],
    [ "ReactJS","https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" ],
     ["NodeJS","https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"] ,
   [  "Azure","https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white" ],
     ["GitHub","https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" ],
   [  "ExpressJS","https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" ],
   [  "PostgreSQL","https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" ],
    [ "MongoDB","https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" ],
     ["Heroku","https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" ],
    ["Redux","https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"]]
 
  let Ind=logos.findIndex((elem)=>elem.find((item)=> logo=== item))

return Ind=== -1  ? ` "${logo}"  `: <img
className="d-inline"
  src={logos[Ind][1]}
  alt="img"
/>  
  }