import React from 'react';

const ItemsHeader = ({ itemsAmount }) =>{
    return(
        <div className="header-result">
            {itemsAmount} items Founded
        </div>
    );
}

export default ItemsHeader;