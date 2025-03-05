import Index from "./accordion/Index";
import AutoFetch from "./AutoFetch/AutoFetch";
import Enabler from "./Enabler/Enabler";
import Modal from "./Modal/Modal";
import QrGen from "./Qr_gen/QrGen";
import RandomColor from "./Random_color/RandomColor";
import ScrollBar from "./ScrollBar/ScrollBar";
import Search from "./Search/Search";
import Slider from "./Slider/Slider";
import StarRating from "./starRating/StarRating";
import Tabs from "./Tabs/Tabs";
import ThemeChanger from "./theme/ThemeChanger";
import Weather from "./Weather/Weather";
import StartPage from "./XO/StartPage";

const Components = 
[
    {
      "label": "🏠home",
      "children" : null,
      "to": "/"
    },
    {
      "label": "📁Cptts",
      "children" : [
        {
          "label": "🎨Color Gen",
          "children" : null,
          "to": "/rand",
          "element" : <RandomColor />
        },
        {
          "label": "❓Quiz",
          "children" : null,
          "to": "/accordion",
          "element" : <Index />
        },
        {
          "label": "🌟rating",
          "children" : null,
          "to": "/star-rating",
          "element": <StarRating/>
        },
        {
          "label": "📸Slider",
          "children" : null,
          "to": "/slider",
          "element" : <Slider />
        },
        {
          "label": "📱QR generator",
          "children" : null,
          "to": "/Qrgen",
          "element" : < QrGen />
        },
        {
          "label": "💥theme changer",
          "children" : null,
          "to": "/theme",
          "element" : <ThemeChanger/>
        },
        {
          "label": "📲ScrollBar",
          "children" : null,
          "to": "/scrollbar",
          "element" : <ScrollBar/>
        },
        {
          "label": "📰Tabs",
          "children" : null,
          "to": "/tabs",
          "element" : <Tabs />
        },
        {
          "label": "Modal",
          "children" : null,
          "to": "/modal",
          "element" : <Modal/>
        },
        {
          "label": "🔎Github Search",
          "children" : null,
          "to": "/search",
          "element":<Search/>
        },
        {
          "label": "🔎Dynamic Search",
          "children" : null,
          "to": "/autofetch",
          "element" : <AutoFetch />
        },
        {
          "label": "🎮XO Game",
          "children" : null,
          "to": "/xostart",
          "element" : <StartPage />
        },
        {
          "label": "Enabler",
          "children" : null,
          "to": "/enabler",
          "element" : <Enabler/>
        },
        {
          "label": "Weather",
          "children" : null,
          "to": "/weather",
          "element" : <Weather/>
        },
      ], 
      "to": "/cpt"
    },
    
    
   

   
  ];

  export default Components;