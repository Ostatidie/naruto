import Character from "./Character"

function CharacterList() {
    function foo() {
        alert("you clicked button")
}
const data =[
    {
        name: "Naruto Uzumaki", 
        clan:"Uzumaki",
        title:"Hokage",
        description:"Naruto is an orphan who has a dangerous fox-like entity known as Kurama the Nine-Tailed Fox sealed within his body by his father, the Fourth Hokage Minato Namikaze, the leader of Konoha's ninja force, at the cost of his own life and that of his wife, Kushina Uzumaki.",
        clanLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb1OMN9bz61NrPQ2c7Hj7sMdmNYPNxR-krhQ&s",
        imgLink:"https://i1.sndcdn.com/artworks-20v2aKgOHSBHlJEC-9REhmw-t500x500.jpg",
    },
    {
        name: "Kakashi Hatake", 
        clan:"Hatake",
        title:"Hokage",
        description: "Kakashi without his mask. Kakashi has a strong resemblance to his father, so much so that they are sometimes mistaken for each other. He has spiky silver hair often oriented to his left-side, dark grey eyes (black in several instances), and typically a relaxed and lazy expression.",
        clanLogo:"https://static.wikia.nocookie.net/naruto/images/a/ac/Hatake_Symbol.svg/revision/latest/scale-to-width-down/200?cb=20150509210734",
        imgLink:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ad8c85fb-d08f-4be6-9d00-fb29b2a92f13/delqcxr-07b3d421-08c5-496f-be64-db9b93e93606.jpg/v1/fill/w_600,h_877,q_75,strp/kakashi_hatake_chidori_by_artoframnismal_delqcxr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FkOGM4NWZiLWQwOGYtNGJlNi05ZDAwLWZiMjliMmE5MmYxM1wvZGVscWN4ci0wN2IzZDQyMS0wOGM1LTQ5NmYtYmU2NC1kYjliOTNlOTM2MDYuanBnIiwiaGVpZ2h0IjoiPD04NzciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cL2FkOGM4NWZiLWQwOGYtNGJlNi05ZDAwLWZiMjliMmE5MmYxM1wvYXJ0b2ZyYW1uaXNtYWwtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.MHvcgNJOy4TXzxRnnqUG6BCAbDx6KXM6psUFudUCS6o",
    },
    {
        name: "Itachi Uchiha", 
        clan:"Uchiha",
        title:"Akatsuki member",
        description: "Personality… cynical, antisocial, and resentful. As a child, Sasuke was kind and cheerful, but that all changed when he was witnessed the massacre of his clan at age 7. Now, Sasuke's only goal in life is revenge, and he'll do whatever he needs to get it.",
        clanLogo:"https://static.wikia.nocookie.net/naruto-bleach/images/6/6f/Uchiha_Symbol.png/revision/latest?cb=20101109134255",
        imgLink:"https://i.pinimg.com/736x/1c/9a/50/1c9a50f5f218aad0696a4cdc40b12af3.jpg",
    }
]
    return (
        <>
        <Character
        name='diego'
        />
         {data.map((Character)=> 
            <Character 
            name={Character.name} 
            clan={Character.clan}
            title={Character.title}
            description={Character.description} 
            clanLogo={Character.clanLogo}
            imgLink = {Character.imgLink}
            button={foo} 
            />
       )} 
        </>
    )
}

export default CharacterList;