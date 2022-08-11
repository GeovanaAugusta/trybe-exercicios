// const express = require('express');
// const ProductModel = require('../models/productModel');

// const router = express.Router();

// router.get('/list-products', async (req, res) => {
//   const products = await ProductModel.getAll();

//   res.send(products);
// });

// router.get('/get-by-id/:id', async (req, res) => {
//   const product = await ProductModel.getById(req.params.id);

//   res.send(product);
// });

// router.post('/add-product', async (req, res) => {
//   const { name, brand } = req.body;

//   const newProduct = await ProductModel.add(name, brand);

//   res.send(newProduct);
// });

// router.post('/delete-product/:id', async (req, res) => {
//   const products = await ProductModel.exclude(req.params.id);

//   res.send(products);
// });

// router.post('/update-product/:id', async (req, res) => {
//   const { name, brand } = req.body;

//   const products = await ProductModel.update(req.params.id, name, brand);

//   res.send(products);
// });

// module.exports = router;

// Refatorado 

const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

// Removemos 'list-products' do endpoint pois uma requisição do tipo GET,
// sem parâmetros que especifiquem um recurso (ex: id de um produto),
// já indica o retorno de uma coleção de recursos.
router.get('/', async (_req, res) => {
  const products = await ProductModel.getAll();

  // Utilizamos o status code 200 para indicar que a requisição foi concluída
  // com sucesso e padronizamos o retorno para json.
  res.status(200).json(products);
});

// Removemos 'get-by-id' do endpoint pois uma requisição do tipo GET,
// com parâmetros que especifiquem um recurso (ex: id de um produto),
// já indica o retorno de um recurso.
router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (product === null) {
    // Caso o produto não exista no banco, utilizamos o status code 404 para indicar
    // que o recurso não foi encontrado e padronize o retorno para json.
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  // Utilize o status code 200 para indicar que a requisição foi concluída
  // com sucesso e padronize o retorno para json.
  res.status(200).json(product);
});

// Remova 'add-product' do endpoint pois uma requisição do tipo POST
// já indica a criação de um novo recurso.
router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  if (name === undefined || brand === undefined) {
    // Caso os dados do produto não sejam informados na requisição, utilize o
    // status code 400 para indicar que a requisição não foi feita corretamente
    // e padronize o retorno para json.
    return res.status(400).json({ message: 'Informações do produto inválidas' });
  }

  const newProduct = await ProductModel.add(name, brand);

  // Utilize o status code 201 para indicar que o produto foi criado, concluindo
  // a requisição com sucesso, e padronize o retorno para json.
  res.status(201).json(newProduct);
});

// Altere o verbo HTTP para DELETE e remova 'delete-product' do endpoint,
// uma vez que uma requisição do tipo DELETE já indica que o endpoint será
// usado para deletar um recurso.
router.delete('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (product === null) {
    // Caso o produto não exista no banco, utilize o status code 404 para indicar
    // que o recurso não foi encontrado e padronize o retorno para json.
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  await ProductModel.exclude(req.params.id);

  // Utilize o status code 204 para indicar que a requisição foi concluída
  // com sucesso e seu retorno não possuirá conteúdo.
  // Além disso, padronize o retorno para json.
  res.status(204).json();
});

// Altere o verbo HTTP para PUT e remova 'update-product' do endpoint,
// uma vez que uma requisição do tipo PUT já indica que o endpoint será
// usado para atualizar um recurso.
router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  if (name === undefined || brand === undefined) {
    // Caso os dados do produto não sejam informados na requisição, utilize o
    // status code 400 para indicar que a requisição não foi feita corretamente
    // e padronizamos o retorno para json.
    return res.status(400).json({ message: 'Informações do produto inválidas' });
  }

  const product = await ProductModel.getById(req.params.id);
  if (product === null) {
    // Caso o produto não exista no banco, utilizamos o status code 404 para indicar
    // que o recurso não foi encontrado e padronizamos o retorno para json.
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  await ProductModel.update(req.params.id, name, brand);

  // Utilizamos o status code 200 para indicar que a requisição foi concluída
  // com sucesso e padronizamos o retorno para json.
  res.status(200).json({ name, brand });
});

module.exports = router;