import React from 'react';

const ItemRow = ({item}) => {
    return (
        <div className="item-row">
            <div className='card'>
                <img className="item-picture" src={item.picture} />
                <p className="item-name">{item.name}</p>
                <p className="item-about">{item.about}</p>
            </div>
            
        </div>
    );
}
export default ItemRow;