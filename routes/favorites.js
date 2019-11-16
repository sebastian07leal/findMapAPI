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

  router.get('/:favoriteID', async function(req, res, next){
    try {
      const favoriteID = await Promise.resolve(favoritesMocks);

      res.status(200).json({
        data: favoriteID,
        message: 'favorite listed'
      });
    } catch (error){
      next();
    }
  });

  router.post('/', async function(req, res, next){
    try {
      const createFavoriteID = await Promise.resolve(favoritesMocks);

      res.status(201).json({
        data: createFavoriteID,
        message: 'favorite created'
      });
    } catch (error){
      next(error);
    }
  });

  router.patch('/:favoriteID', async function(req, res, next){
    try {
      const updateFavoriteID = await Promise.resolve(favoritesMocks);

      res.status(200).json({
        data: updateFavoriteID,
        message: 'favorite update'
      });
    } catch (error){
      next(error);
    }
  });

  router.delete('/:favoriteID', async function(req, res, next){
    try {
      const deleteFavoriteID = await Promise.resolve(favoritesMocks);

      res.status(200).json({
        data: deleteFavoriteID,
        message: 'favorite deleted'
      });
    } catch(error){
      next(error);
    }
  });

}

module.exports = favoritesApi;