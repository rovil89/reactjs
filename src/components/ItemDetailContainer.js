import { useEffect, useState, useParams } from "react";
import ItemDetail from "./ItemDetail";
import { Items as itemMock } from "../mocks/items.mock";

const ItemDetailContainer = () => {
    const [Items, setItems] = useState(null);

useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(itemMock[0]), 2000))
    .then((data) => setItems(data)
    );
}, []);

if (!Items) {
    return (  ( <div className="contenedorCarga">
    <div className="carga"></div>
</div>));
}

return <ItemDetail Items={Items} />;
};

export default ItemDetailContainer;