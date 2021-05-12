const router = require('express').Router();
const { Category, Product } = require('../../models');



router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    Category.findAll({
      include: [Product]
    })
      .then(categories => res.json(categories))

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  })
    .then(category => res.json(category))

    .catch(err => res.status(400).json(err))

});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then(category => res.json(category))
    .catch(err => res.status(400).json(err))
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    },
  })
    .then(category => res.json(category))

    .catch(err => res.status(400).json(err))

});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(category => res.json(category))

    .catch(err => res.status(400).json(err))


});

module.exports = router;
