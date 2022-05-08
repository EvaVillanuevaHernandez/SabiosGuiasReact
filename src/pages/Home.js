
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarouselMain from "../components/CarouselMain";
import "./Home.css";
export default function Home() {

    return (
        <>
            <div className ="home">
                <Header />
                <CarouselMain />
                <div className="home_content_title">
                    <h2> Noticias</h2>
                </div>
                <div className="home_content_clusters">
                    <div>
                        <a href="https://www.sabiosguiasinterpretes.com/agaete-de-costa-a-cumbre/">
                            <p> AGAETE: DE COSTA A CUMBRE</p>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.sabiosguiasinterpretes.com/el-papel-de-la-mujer-en-la-aparceria/">
                            <p> EL PAPEL DE LA MUJER EN LA APARCERÍA</p>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.sabiosguiasinterpretes.com/sabios-guias-interpretes-2020/">
                            <p> SABIOS GUÍA INTÉRPRETES EN 2020</p>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.sabiosguiasinterpretes.com/noche-de-los-finaos/">
                            <p> NOCHE DE LOS FINAOS</p>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.sabiosguiasinterpretes.com/memorias-de-un-territorio-humanizado/">
                            <p> MEMORIAS DE UN TERRITORIO HUMANIZADO</p>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.sabiosguiasinterpretes.com/la-figura-del-geografo-en-la-interpretacion-del-patrimonio/">
                            <p> LA FIGURA DEL GEÓGRAFO</p>
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}