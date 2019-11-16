const express = require('express');
const { favoritesMocks } = require('../mocks/favorites.js');

function favoritesApi(app) {
  const router = express.Router();

  app.use('/api/favorites', router);

  router.get('/', async function(req, res, next) {
    try {
      const favorites = await Promise.resolve(favoritesMocks);

      res.status(200).json({
        data: favorites,
        message: 'favorites listed'
      });
    } catch (error) {
        next(error);
    }
  });
}

module.exports = favoritesApi;