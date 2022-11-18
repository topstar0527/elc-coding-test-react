import React from 'react';
import ItemsHeader from './ItemsHeader';
import ItemsList from './ItemsList';

const ItemsResult = ({items, keyword}) => {
    return items.length ? (
        <div>
            <ItemsHeader itemsAmount={items.length}/>
            <ItemsList items={items}/>
        </div>
    ): keyword != "" ? <div>Not Found</div> : <div>Type For Search</div>;
}

export default ItemsResult;