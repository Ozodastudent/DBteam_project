import React from "react";
import "./search.css"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
const Search = () => {
    return(
        <div className="search-container">
            <Navbar/>
            <div className="search_box">
                <div className="search_text">
                    <div className="search_link">
                <h2>Nothing found!</h2>
                <Link className="link" to="/">Back to Home page</Link>
                    </div>
                <p>Sorry, but nothing matched your search terms. Please try with different keywords.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Search;