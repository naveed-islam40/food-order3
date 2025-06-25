import Blog from '@/components/blog-page'
import FoodDelivery from '@/components/food-delivery'
import FoodDeliveryHero from '@/components/food-delivery-hero'
import OrderModal from '@/components/order-modal'
import ProductList from '@/components/product-listing'
import PromotionalModal from '@/components/promotional-modal'
import RestaurantMenu from '@/components/restaurant-menu'
import RestaurantFinder from '@/components/resturent-location'
import SearchRestuentMap from '@/components/search-resturent'
import React from 'react'

const index = () => {
  return (
    <div>
      <FoodDeliveryHero />
      <FoodDelivery />
      <Blog />
      <RestaurantMenu />
      <PromotionalModal />
      <ProductList />
      <RestaurantFinder />
      <SearchRestuentMap />
      <OrderModal />
      </div>
  )
}

export default index