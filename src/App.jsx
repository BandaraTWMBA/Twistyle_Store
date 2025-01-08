import ProductDisplay from "./Body-HomePage/ProductDisplay";
import { Header } from "./header/Header";
import HeroSection from "./header/HeroSection";
import NavigationBar from "./header/NavigationBar";
import { SearchBar } from "./header/SearchBar";
import { SocialIconsBar } from "./header/SocialIconsBar";

function App(){
    return(
        <>
        <SocialIconsBar/>
        <Header/>
        <NavigationBar/>
        <HeroSection/>
        <br/>
        <br/>
        <br/>
        <ProductDisplay/>
        
        </>
    );
}

export default App;
