/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React, {useState, useEffect} from 'react';
import ItemsResult from './items/ItemsResult';

const baseURL= 'http://localhost:3035';

const Menu = () => {
    const [value, setValue] = useState('');
    const [showingSearch, setShowingSearch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const headers = {'Content-type' : 'application/json'};

    const showSearchContainer = e => {
        e.preventDefault();
        setShowingSearch(!showingSearch)
    }

    const fetchItems = keyword => {
        setLoading(true);
        fetch(`${baseURL}?filter=${keyword}`, {headers: headers})
            .then(resp=>resp.json())
            .then(resp=>{
                setItems(resp);
                setLoading(false);
            })
            .catch(err=>{
                setLoading(false);
                console.log(err);
            })
    }
    const onSearch = e => {
        setValue(e.target.value);
    }
    useEffect(() => {
        value != ''?  fetchItems(value) : setItems([]);
    },[value]);


    return (
        <header className="menu">
            <div className="menu-container">
                <div className="menu-holder">
                    <h1>ELC</h1>
                    <nav>
                        <a href="#" className="nav-item">HOLIDAY</a>
                        <a href="#" className="nav-item">WHAT'S NEW</a>
                        <a href="#" className="nav-item">PRODUCTS</a>
                        <a href="#" className="nav-item">BESTSELLERS</a>
                        <a href="#" className="nav-item">GOODBYES</a>
                        <a href="#" className="nav-item">STORES</a>
                        <a href="#" className="nav-item">INSPIRATION</a>

                        <a href="#" onClick={(e) => showSearchContainer(e)}>
                            <i className="material-icons search">search</i>
                        </a>
                    </nav>
                </div>
            </div>
            <div className={(showingSearch ? "showing " : "") + "search-container"}>
                <input type="text" onChange={(e) => onSearch(e)} />
                <a href="#" onClick={(e) => showSearchContainer(e)}>
                    <i className="material-icons close">close</i>
                </a>
                {loading && <div>Loading...</div>}
                {showingSearch && items 
                    && <ItemsResult items={items} keyword={value}/>}
            </div>
        </header>
    );

}


// Export out the React Component
export default Menu;