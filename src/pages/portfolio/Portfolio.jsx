import PortFolioDiv from "../../component/boxDiv/portfolioDiv";
import { MainLayout } from "../../style/thyme";

function Portfolio() {
    return (
        <>
            <MainLayout>
                <div className="centerDiv">
                    <h2>Portfolio</h2>
                    <br />
                    <div style={ParentShadow}>
                        <PortFolioDiv obj={PortfolioList.one}></PortFolioDiv>
                        <PortFolioDiv obj={PortfolioList.one}></PortFolioDiv>
                        <PortFolioDiv obj={PortfolioList.one}></PortFolioDiv>
                        <PortFolioDiv obj={PortfolioList.one}></PortFolioDiv>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}
const ParentShadow = {
    'flex-wrap': 'wrap',
    'width': 'auto',
    'height': 'auto',
    "display": "flex",
    "justify-content": "center"
};
const PortfolioList = {
    one: {
        title: "The OnePlus World",
        date: "15th OCt 2020",
        discribsion: `This event was the world’s largest virtual phone reveal and unboxing event, 
        conceptualized and executed entirely by Ronin Labs.`,
        technology: "Reactjs,JavaScript,Threejs",
        links: ""
    }
}
export default Portfolio;