// import portfolioPic from '../img_bnr/portfolio-site.png'
import buzzedgoatvercelpic from '../img_bnr/buzzedgoatvercelpic.png'
import favSiteSalesPic from '../img_bnr/fav-site-sales-pic.png'
import portfolioPic from '../img_bnr/portfolioIntoPic.png'
// console.log(portfolioPic);

export const PROJECTS = [
    {
        id: 1,
        image: '/_next/static/media/buzzedgoatvercelpic.75a3ebd8.png',
        title: "Frontend Coffee Shop Site Templet", 
        description: "A frontend coffee shop site templet inspired by the coffee shop The Buzzed Goat site. I wanted to see how I would rebuild the frontend from the original site. The site is built with Next.js as front end and Chakra UI for styling and hosted on Vercel.",
        link: "https://buzzedgoat-coffee-shop-inspiration-site.vercel.app/",
        github: "https://github.com/ericonti24/coffee-shop-site-clone"
    }, 
    {
        id: 2,
        image: "/_next/static/media/fav-site-sales-pic.e1d89911.png",
        title: "Fav Site Sales", 
        description: "A full stack site using Next.js as frontend, Tailwind for styling, Firebase Firestore and Firebase Storage as backend and Firebase Authentication to store logged in users using email and password or Goggle sign in. Site uses CRUD (Create, Read, Update, Delete) to store your favorite site that has sales and have quicker access to that page. Save and View.",
        link: "https://fav-site-sales.vercel.app/",
        github: "https://github.com/ericonti24/fav-site-sales"
    }, 
    {
        id: 3,
        image: "data:image/webp;base64,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CYAAAAAAUDABEAAAAAAKJgACAAAAQMEEQAAAAAAomAAIAAAAAAUTAAEAAACgYAIgAAAAABRMAAQAAACAggmAAAAAAFAwARAAAAAACiYAAgAAAEDBBEAAAAAAKJgACAAAAAAFEwABAAAAoGACIAAAAAAUTAAEAAAAgIIJgAAAAABQMAEQAAAAAAomAAIAAABAwQTzrhfVAAAR1ElEQVRAAAAAACiYAAgAAAAABRMAAQAAAKBgAiAAAAAAFEwABAAAAICCCYAAAAAAUDABEAAAAAAKJgACAAAAQMEEQAAAAAAomAAIAAAAAAUTAAEAAACgYAIgAAAAABRMAAQAAACAggmAAAAAAFAwARAAAAAACiYAAgAAAEDBBEAAAAAAKJgACAAAAAAFEwABAAAAoGACIAAAAAAUTAAEAAAAgIIJgAAAAABQMAEQAAAAAAomAAIAAABAwQRAAAAAACiYAAgAAAAABRMAAQAAAKBgAiAAAAAAFEwABAAAAICCCYAAAAAAUDABEAAAAAAKJgACAAAAQMEEQAAAAAAomAAIAAAAAAUTAAEAAACgYAIgAAAAABRMAAQAAACAggmAAAAAAFAwARAAAAAACiYAAgAAAEDBBEAAAAAAKJgACAAAAAAFEwABAAAAoGACIAAAAAAUTAAEAAAAgIIJgAAAAABQMAEQAAAAAAomAAIAAABAwQRAAAAAACiYAAgAAAAABRMAAQAAAKBgAiAAAAAAFEwABAAAAICCCYAAAAAAUDABEAAAAAAKJgACAAAAQMEEQAAAAAAomAAIAAAAAAUTAAEAAACgYAIgAAAAABRMAAQAAACAggmAAAAAAFAwARAAAAAACiYAAgAAAEDBBEAAAAAAKJgACAAAAAAFEwABAAAAoGACIAAAAAAUTAAEAAAAgIIJgAAAAABQMAEQAAAAAAomAAIAAABAwQRAAAAAACiYAAgAAAAABRMAAQAAAKBgAiAAAAAAFEwABAAAAICCCYAAAAAAUDABEAAAAAAKJgACAAAAQMEEQAAAAAAomAAIAAAAAAUTAAEAAACgYAIgAAAAABRMAAQAAACAggmAAAAAAFAwARAAAAAACiYAAgAAAEDBBEAAAAAAKJgACAAAAAAFEwABAAAAoGACIAAAAAAUTAAEAAAAgIIJgAAAAABQMAEQAAAAAAomAAIAAABAwQRAAAAAACiYAAgAAAAABRMAAQAAAKBgAiAAAAAAFEwABAAAAICCCYAAAAAAUDABEAAAAAAKJgACAAAAQMEEQAAAAAAomAAIAAAAAAUTAAEAAACgYAIgAAAAABRMAAQAAACAggmAAAAAAFAwARAAAAAACiYAAgAAAEDBBEAAAAAAKJgACAAAAAAFEwABAAAAoGACIAAAAAAUTAAEAAAAgIIJgAAAAABQMAEQAAAAAAomAAIAAABAwQRAAAAAACiYAAgAAAAABRMAAQAAAKBgAiAAAAAAFEwABAAAAICCCYAAAAAAUDABEAAAAAAKJgACAAAAQMEEQAAAAAAomAAIAAAAAAUTAAEAAACgYAIgAAAAABRMAAQAAACAggmAAAAAAFAwARAAAAAACiYAAgAAAEDBBEAAAAAAKJgACAAAAAAFEwABAAAAoGACIAAAAAAUTAAEAAAAgIIJgAAAAABQMAEQAAAAAAomAAIAAABAwQRAAAAAACiYAAgAAAAABRMAAQAAAKBgAiAAAAAAFEwABAAAAICCCYAAAAAAUDABEAAAAAAKJgACAAAAQMEEQAAAAAAomAAIAAAAAAUTAAEAAACgYAIgAAAAABRMAAQAAACAggmAAAAAAFAwARAAAAAACiYAAgAAAEDBBEAAAAAAKJgACAAAAAAFEwABAAAAoGACIAAAAAAUTAAEAAAAgIIJgAAAAABQMAEQAAAAAAomAAIAAABAwQRAAAAAACiYAAgAAAAABRMAAQAAAKBgAiAAAAAAFEwABAAAAICCCYAAAAAAUDABEAAAAAAKJgACAAAAQMEEQAAAAAAomAAIAAAAAAUTAAEAAACgYAIgAAAAABRMAAQAAACAggmAAAAAAFAwARAAAAAACiYAAgAAAEDBBEAAAAAAKJgACAAAAAAFEwABAAAAoGACIAAAAAAUTAAEAAAAgIIJgAAAAABQMAEQAAAAAAomAAIAAABAwQRAAAAAACiYAAgAAAAABRMAAQAAAKBgAiAAAAAAFEwABAAAAICCCYAAAAAAUDABEAAAAAAKJgACAAAAQMEEQAAAAAAomAAIAAAAAAUTAAEAAACgYAIgAAAAABRMAAQAAACAggmAAAAAAFAwARAAAAAACiYAAgAAAEDBBEAAAAAAKJgACAAAAAAFEwABAAAAoGACIAAAAAAUTAAEAAAAgIIJgAAAAABQMAEQAAAAAAomAAIAAABAwQRAAAAAACiYAAgAAAAABRMAAQAAAKBgAiAAAAAAFEwABAAAAICCCYAAAAAAUDABEAAAAAAKJgACAAAAQMEEQAAAAAAomAAIAAAAAAUTAAEAAACgYAIgAAAAABRMAAQAAACAggmAAAAAAFAwARAAAAAACiYAAgAAAEDBBEAAAAAAKJgACAAAAAAFEwABAAAAoGACIAAAAAAUTAAEAAAAgIIJgAAAAABQMAEQAAAAAAomAAIAAABAwQRAAAAAACiYAAgAAAAABRMAAQAAAKBgAiAAAAAAFEwABAAAAICCCYAAAAAAUDABEAAAAAAKJgACAAAAQMEEQAAAAAAomAAIAAAAAAUTAAEAAACgYAIgAAAAABRMAAQAAACAggmAAAAAAFAwARAAAAAACiYAAgAAAEDBBEAAAAAAKJgACAAAAAAFEwABAAAAoGACIAAAAAAUTAAEAAAAgIIJgAAAAABQMAEQAAAAAAomAAIAAABAwQRAAAAAACiYAAgAAAAABRMAAQAAAKBgAiAAAAAAFEwABAAAAICCCYAAAAAAUDABEAAAAAAKJgACAAAAQMEEQAAAAAAomAAIAAAAAAUTAAEAAACgYAIgAAAAABRMAAQAAACAggmAAAAAAFAwARAAAAAACiYAAgAAAEDBBEAAAAAAKJgACAAAAAAFEwABAAAAoGACIAAAAAAUTAAEAAAAgIIJgAAAAABQMAEQAAAAAAomAAIAAABAwQRAAAAAACiYAAgAAAAABRMAAQAAAKBgAiAAAAAAFEwABAAAAICCCYAAAAAAUDABEAAAAAAKJgACAAAAQMEEQAAAAAAomAAIAAAAAAUTAAEAAACgYAIgAAAAABRMAAQAAACAggmAAAAAAFAwARAAAAAACiYAAgAAAEDBBEAAAAAAKJgACAAAAAAFEwABAAAAoGACIAAAAAAUTAAEAAAAgIIJgAAAAABQMAEQAAAAAAomAAIAAABAwQRAAAAAACiYAAgAAAAABRMAAQAAAKBgAiAAAAAAFEwABAAAAICCCYAAAAAAUDABEAAAAAAKJgACAAAAQMEEQAAAAAAomAAIAAAAAAUTAAEAAACgYAIgAAAAABRMAAQAAACAggmAAAAAAFAwARAAAAAACiYAAgAAAEDBBEAAAAAAKJgACAAAAAAFEwABAAAAoGACIAAAAAAUTAAEAAAAgIIJgAAAAABQMAEQAAAAAAomAAIAAABAwQRAAAAAACiYAAgAAAAABRMAAQAAAKBgAiAAAAAAFEwABAAAAICCCYAAAAAAUDABEAAAAAAKJgACAAAAQMEEQAAAAAAomAAIAAAAAAUTAAEAAACgYAIgAAAAABRMAAQAAACAggmAAAAAAFAwARAAAAAACiYAAgAAAP9/O3YgAwAAADDI3/oeX2EEjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAMQEIAAAAAGMCEAAAAADGBCAAAAAAjAlAAAAAABgTgAAAAAAwJgABAAAAYEwAAgAAAMCYAAQAAACAsQCiiAkNRbU05wAAAABJRU5ErkJggg==",
        title: "To Do List", 
        description: "To do list using Next.js as the front end, Supabase for backend and Chakra UI for styling. The concept for this project was to hand RESTful routing.",
        link: "https://todo-app-nextjs-67fd44qkb-ericonti24.vercel.app/",
        github: "https://github.com/ericonti24/todo-next12"
    }, 
    {
        id: 4,
        image: "/_next/static/media/portfolioIntoPic.8e10526b.png",
        title: "Portfolio Site", 
        description: "Personal portfolio site to display other development projects and share about and contact information. Using React framework Next.js and Chakra UI for styling. Hosted on Vercel.",
        link: "https://ericontiveros-portfolio-site.vercel.app/",
        github: "https://github.com/ericonti24/portfolio-site"
    }
]