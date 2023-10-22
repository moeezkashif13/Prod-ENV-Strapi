import type { Schema, Attribute } from '@strapi/strapi';

export interface PlacedOrdersPlacedOrders extends Schema.Component {
  collectionName: 'components_placed_orders_placed_orders';
  info: {
    displayName: 'Placed Orders';
  };
  attributes: {
    ProductName: Attribute.String & Attribute.Required;
    PreviewImage: Attribute.String & Attribute.Required;
  };
}

export interface ProductRelatedFeaturesProductRelatedFeatures
  extends Schema.Component {
  collectionName: 'components_product_related_features_product_related_features';
  info: {
    displayName: 'Product Related Features';
  };
  attributes: {
    InfoType: Attribute.String & Attribute.Required;
    Answer: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'placed-orders.placed-orders': PlacedOrdersPlacedOrders;
      'product-related-features.product-related-features': ProductRelatedFeaturesProductRelatedFeatures;
    }
  }
}
