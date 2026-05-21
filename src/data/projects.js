import cafesyncImg from '../assets/images/cafesync.png';
import securityImg from '../assets/images/security.png';
import fivemImg from '../assets/images/fivem.png';
import musicbotImg from '../assets/images/musicbot.png';

export const projectsData = [
  {
    id: 1,
    title: "CafeSync App",
    description: "A comprehensive cafe management and ordering platform. Offers seamless customer ordering with table selection, dynamic shopping carts, and a robust admin panel for real-time order tracking and status transitions.",
    image: cafesyncImg,
    tags: ["React Native", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/example/cafesync",
    liveLink: "https://cafesync-demo.example.com"
  },
  {
    id: 2,
    title: "Security System Project",
    description: "An IoT-enabled smart home security network utilizing motion sensors and camera feeds. Features real-time dashboard analytics, instant intrusion alerts pushed to Telegram, and remote access monitoring.",
    image: securityImg,
    tags: ["Python", "C/C++", "OpenCV", "Firebase", "Raspberry Pi"],
    githubLink: "https://github.com/example/iot-security",
    liveLink: "https://iot-security.example.com"
  },
  {
    id: 3,
    title: "FiveM Server Project (Syndicate Roleplay) Since 2022",
    description: "A custom multiplayer roleplay server framework for GTA V. Powered by highly optimized, modular Lua scripts and a structured SQL database, supporting hundreds of concurrent players with advanced HUD elements.",
    image: fivemImg,
    tags: ["Lua", "MySQL", "JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/example/fivem-server",
    liveLink: "https://fivem-server.example.com"
  },
  {
    id: 4,
    title: "Discord Music Bot",
    description: "A feature-rich Discord music bot delivering high-fidelity audio playback. Integrates seamlessly with Spotify/YouTube APIs, supports Lavalink nodes for caching, and uses Discord Slash commands for controls.",
    image: musicbotImg,
    tags: ["Discord.js", "TypeScript", "Node.js", "Lavalink", "Docker"],
    githubLink: "https://github.com/example/discord-music-bot",
    liveLink: "https://discord-music-bot.example.com"
  }
];
