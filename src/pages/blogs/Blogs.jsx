import mongodb from '../../assests/mongodb.jpg'
import Shadow from '../../component/boxDiv/shadow'
import styled from "styled-components";
import { MainLayout, InnerLayout } from '../../style/thyme'

function Blogs() {
    return (
        <>
            <MainLayout>
                <div className="centerDiv">
                    <h2>Blogs</h2>
                    <br />
                    <div style={ParentShadow}>
                        <Shadow obj={blogList.one} />
                        <Shadow obj={blogList.two} />
                        <Shadow obj={blogList.three} />
                        <Shadow obj={blogList.four} />
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

const blogList = {
    one: {
        title: "MongoDB using Java",
        date: "23/07/2020",
        readMore: "https://prakashpandey19.blogspot.com/2020/07/what-is-mongodb-mongodb-is-very-popular.html",
        img: mongodb
    },
    two: {
        title: "MongoDB using Java",
        date: "23/07/2020",
        readMore: "https://prakashpandey19.blogspot.com/2020/07/what-is-mongodb-mongodb-is-very-popular.html",
        img: mongodb
    },
    three: {
        title: "MongoDB using Java",
        date: "23/07/2020",
        readMore: "https://prakashpandey19.blogspot.com/2020/07/what-is-mongodb-mongodb-is-very-popular.html",
        img: mongodb
    },
    four: {
        title: "MongoDB using Java",
        date: "23/07/2020",
        readMore: "https://prakashpandey19.blogspot.com/2020/07/what-is-mongodb-mongodb-is-very-popular.html",
        img: mongodb
    },
    five: {
        title: "MongoDB using Java",
        date: "23/07/2020",
        readMore: "https://prakashpandey19.blogspot.com/2020/07/what-is-mongodb-mongodb-is-very-popular.html",
        img: mongodb
    }
}
export default Blogs