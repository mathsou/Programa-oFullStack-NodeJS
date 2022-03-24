const { param } = require("express/lib/request");

var products = [];
module.exports = {
    create(req, res) {
        const body = req.body;
        try {
            products.push({
                id: products.length + 1,
                name: body.name,
                price: body.price
            })
        } catch (err) {
            return res.status(500).json({ message: `Erro: ${err.message}` })
        }
        return res.status(200).json({ message: `Produto ${products.length} adicionado com sucesso` });
    },
    listOne(req, res) {
        const { params } = req;
        const product = products.find((product) => { return product.id == params.id });
        if (!product) return res.status(404).json({ message: "Produto não encontrado" })
        else return res.status(200).json({ product })
    },
    listAll(_, res) {
        return res.status(200).json(products)
    },
    delete(req, res) {
        const { params } = req
        if (params.id < 1) return res.status(404).json({ message: "Item não existe" });
        alteredProducts = products.reduce((acc, product) => { 
            if (product.id != params.id) acc.push(product); 
            return acc 
        }, [])
        if(alteredProducts.length == products.length) 
            return res.status(404).json({ message: "Item não encontrado"})
        products = alteredProducts;
        return res.status(200).json({ message: `Produto ${params.id} foi removido` })
    }
}