import React from 'react';
import ItemRow from './ItemRow';

const ItemsList = ({items}) =>{
    return(
    <div id="itemsList" className='items-list'>
        {items.map((item,index) => {
            return(<ItemRow item={item} key={index}/>);
        })}
    </div>);
}

export default ItemsList;