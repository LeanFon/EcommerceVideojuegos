const juegos = [
    {
      "id": 1,
      "nombre": "Devil May Cry",
      "precio": 2,
      "descripcion": "Devil May Cry es un videojuego de hack and slash y beat 'em up desarrollado por Ninja Theory y distribuido por Capcom.",
      "plataforma": "PS",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/0/08/Devil-may-cry.png"
    },
    {
      "id": 2,
      "nombre": "Half-Life 2",
      "precio": 5,
      "descripcion": "Half-Life 2 (HL2) es la continuación del videojuego Half-Life, una videoaventura de disparos en primera persona.",
      "plataforma": "PC",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Half-Life_2_Logo.svg/888px-Half-Life_2_Logo.svg.png"
    },
    {
      "id": 3,
      "nombre": "Gta San Andreas",
      "precio": 5,
      "descripcion": "Hace cinco años, Carl Johnson escapó de las presiones de la vida en Los Santos, San Andreas, una ciudad destrozándose con problemas de pandillas, drogas y corrupción.",
      "plataforma": "PS",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Grand_Theft_Auto_San_Andreas_logo.svg"
    },
    {
      "id": 4,
      "nombre": "Super Smash Bros Ultimate",
      "precio": 20,
      "descripcion": "Ultimate consiste en lanzar al rival fuera del escenario y de la pantalla. Utiliza todo tipo de ataques para que el oponente acumule daño y después lánzalo fuera del escenario.",
      "plataforma": "NS",
      "imagen": "https://www.informador.mx/__export/1544124031312/sites/elinformador/img/2018/12/06/smash_bros_ultimate_facebook_nintendo_latam_crop1544123434381.jpg_788543494.jpg"
    },
    {
      "id": 5,
      "nombre": "Portal 2",
      "precio": 2,
      "descripcion": "Portal consiste principalmente en una serie de rompecabezas que deben resolverse teletransportando el personaje del jugador y los objetos simples utilizando el dispositivo de portal de mano de Aperture Science",
      "plataforma": "PC",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/d/df/Portal_logo.png"
    },
    {
      "id": 6,
      "nombre": "Mortal Kombat X",
      "precio": 10,
      "descripcion": "El juego tiene nuevos controles, con dos botones de golpe y dos de patada1​ También cuenta con ataques X-Ray (presionando a la vez dos botones), como ocurre en Mortal Kombat 9.",
      "plataforma": "PS",
      "imagen": "https://i.pinimg.com/736x/91/45/7c/91457c6351c1c0e88a9b851892c64b3f.jpg"
    },
    {
      "id": 7,
      "nombre": "Splatoon 2",
      "precio": 20,
      "descripcion": "Los inklings están de vuelta para entintarlo todo y ganar territorio en este caótico juego de disparos de 4 contra 4. Por primera vez, tus batallas territoriales estarán disponibles en donde quiera que estés con la consola Nintendo Switch™.",
      "plataforma": "NS",
      "imagen": "https://i.redd.it/zb1uvh5oypz11.png"
    },
    {
      "id": 8,
      "nombre": "Plants vs zombies",
      "precio": 2,
      "descripcion": "A medida que una horda de zombis se acerca a lo largo de varios carriles paralelos, el jugador debe defender su hogar colocando plantas, que disparan proyectiles a los zombis o los afectan perjudicialmente. El jugador recolecta una moneda llamada sol para comprar plantas. Si un zombi llega a la casa en cualquier carril, el jugador pierde el nivel.",
      "plataforma": "PC",
      "imagen": "https://i.pinimg.com/originals/6d/52/31/6d523165b325b9e58f0f1dbb65f2ae47.jpg"
    },
    {
      "id": 9,
      "nombre": "Kirby y la tierra olvidada",
      "precio": 20,
      "descripcion": "Explora un nuevo mundo misterioso en solitario o en compañía de otra persona, descubre nuevas habilidades de copia y enfréntate a todo tipo de bestias en Kirby y la tierra olvidada para Nintendo Switch.",
      "plataforma": "NS",
      "imagen": "https://assets.nintendo.eu/image/upload/f_auto,q_auto,w_767/v1653402591/16.9_Switch_KirbyAndTheForgottenLand_Logo_ESP_NOE.png"
    }
  ]

export const getGames = new Promise((resolve) => {
    resolve(juegos)
})

export const getGame = (id) =>{
    return juegos.find((game) => game.id == id)
}

export const filterGame = (category) =>{
    return juegos.filter((juego => juego.plataforma == category))
}