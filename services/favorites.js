const { favoritesMocks } = require('../mocks/favorites');

class FavoritesServices {

    async getFavorites() {
        const favorites = await Promise.resolve(favoritesMocks);
        return favorites || [];
    }

    async getFavorite() {
        const favorite = await Promise.resolve(favoritesMocks);
        return favorite || {};
    }

    async createFavorite() {
        const createFavoriteID = await Promise.resolve(favoritesMocks);
        return createFavoriteID;
    }

    async updateFavorite() {
        const updateFavoriteID = await Promise.resolve(favoritesMocks);
        return updateFavoriteID;
    }

    async deleteFavorite() {
        const updateDeleteID = await Promise.resolve(favoritesMocks);
        return updateDeleteID;
    }
}

module.exports = FavoritesServices;