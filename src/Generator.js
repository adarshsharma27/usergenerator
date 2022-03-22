import { useState, useEffect } from "react";
import { FaMoon ,FaSun,FaEnvelopeOpen,FaPhoneAlt,FaUserAlt,FaMapMarkerAlt} from "react-icons/fa";
import Map from "./Map"
const Generator = () => {
    const [news, setNews] = useState([]);
    const[darkMode,setDarkMode]=useState(false);
    const getUsers = async () => {
        const ApiUrl = `https://randomuser.me/api/
  `;
        const response = await fetch(ApiUrl);
        const data = await response.json();
        setNews(data.results);
    };

    useEffect(() => {
        getUsers();
    }, []);
     
        // lng= document.querySelector(".map").getAttribute("lng")
        // lat= document.querySelector(".map").getAttribute("lat")
    const addDarkMode = () => {
        let darkmode = document.querySelector("html");
        darkmode.classList.toggle("dark");
        setDarkMode(!darkMode)
    };
    return (
        <>
            <header className="font-acme">
                <div className="flex  justify-between items-center  w-full  px-10 py-4 bg-gray-100 dark:bg-gray-700">
                    <button
                        onClick={() => {
                            getUsers();
                        }}
                        className="bg-purple-700 text-white  text-lg px-5 py-2  hover:bg-blue-500"
                    >
                        Generate User
                    </button>
                    <button
                        onClick={() => {
                            addDarkMode();
                        }}
                        
                    >
                        {darkMode ?<FaSun className="dark:text-yellow-400 text-lg"/>: <FaMoon className="dark:text-slate-400 text-lg"/> }
                    </button>
                </div>
            </header>
            <div className="	dark:bg-gray-700 dark:text-white">
                <h3 className="text-2xl font-bold pt-4 text-center font-acme">
                    Random User Generator
                    <div className="h-1 bg-red-400 w-16 mx-auto dark:bg-green-500"></div>
                </h3>
                {news.map((element,index) => {
                    let{gender,name:{title,first,last},location:{city,state,country},cell,phone,email,picture:{large},login:{username},location:{street:{number,name},coordinates:{latitude,longitude}}}=element
                    return (
                        <div className=" container  w-full  lg:px-10 px-5 py-4 " key={index}>
                            <div className="text-center md:text-left flex flex-wrap lg:space-x-20 py-4 my-2 px-4 space-y-6 font-acme justify-between md:justify-center shadow-xl items-center">
                            <div className="flex flex-col justify-start items-center">
                            <img src={large} className="rounded-full" alt={title} />
                                <h3 className=" text-3xl font-bold py-2  text-center md:text-left">
                                    {title}. {first}{last}
                                    <div className="h-1 bg-red-400 w-16 mx-auto md:hidden sm:block  dark:bg-green-500"></div>
                                    <div className="h-1 bg-red-400 w-16 mr-auto hidden md:block  dark:bg-green-500"></div>
                                </h3>
                                <h4 className=" text-xl text-black-700 py-2 font-bold  text-center md:text-left">Gender:{gender}</h4>
                                <h4 className=" text-xl text-black-700 py-2 font-bold  text-center md:text-left">Country:{country}</h4>
                                <h4 className=" text-xl text-black-700 py-2 font-bold  text-center md:text-left">City:{city}</h4>
                                <h4 className=" text-xl text-black-700  font-bold  text-center md:text-left">State:{state}</h4>
                                <p className=" text-gray-700  dark:text-white py-2 font-bold  text-center md:text-left">Country:{country}</p>
                                <p className="text-black-700 pb-2 text-lg md:text-left text-center font-bold  ">Ingredient:</p>
                                </div>
                                <div className=" text-gray-700  pb-2 text-base w-full md:w-1/2 md:text-left flex-col font-bold flex align-center justify-between space-y-4">
                                    <span className="bg-gray-200 dark:bg-white p-3 md:text-left flex items-center"><FaEnvelopeOpen className="dark:text-yellow-400 text-lg mx-2"/>{email}</span>
                                    <span className="bg-gray-200 dark:bg-white p-3 md:text-left flex items-center"><FaPhoneAlt className="dark:text-yellow-400 text-lg mx-2"/>{phone}</span>
                                    <span className="bg-gray-200 dark:bg-white p-3 md:text-left flex items-center"><FaUserAlt className="dark:text-yellow-400 text-lg mx-2"/>{username}</span>
                                    <span className="bg-gray-200 dark:bg-white p-3 md:text-left flex items-center"><FaMapMarkerAlt className="dark:text-yellow-400 text-lg mx-2"/>{number}, {name} , {latitude},{longitude}</span>
                                    <span className="bg-gray-200  dark:bg-white p-3 md:text-left">3: {cell}</span>
                                </div>
                            </div>
                            <Map lng={longitude} lat={latitude} country={country}/>
</div>
                            
                    );
                })}
                </div>
                
                    

                    

                
                    
        </>
    );
};

export default Generator;
