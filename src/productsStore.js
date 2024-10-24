

const productsArray = [
    {
        id: "1",
        title: "Coffee",
        price: 60
    },
    {
        id: "2",
        title: "Sunglasses",
        price: 500
    },
    {
        id: "3",
        title: "Camera",
        price: 2500
    },
    {
        id: "4",
        title: "Notebook",
        price: 50
    },
    {
        id: "5",
        title: "Earpods",
        price: 1000
    },
    {
        id: "6",
        title: "Shoes",
        price: 700
    }

];
function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}


export { productsArray, getProductData};