// lib/shopify.js

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const storefrontURL = `https://${domain}/api/2025-01/graphql.json`;

export async function ShopifyData(query) {
  const res = await fetch(storefrontURL, {
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    const errorDetails = await res.json();
    throw new Error(
      `HTTP error! status: ${res.status}, message: ${errorDetails.errors[0]?.message || 'Unknown error'}`
    );
  }

  const data = await res.json();

  if (data.errors) {
    throw new Error(data.errors[0]?.message || 'Unknown GraphQL error');
  }

  return data;
}

export async function getProducts() {
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            images(first: 1) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  priceV2 {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await ShopifyData(query);
  return response.data.products.edges.map((edge) => edge.node);
}

export async function getProduct(handle) {
  const query = `
    {
      productByHandle(handle: "${handle}") {
        id
        title
        handle
        description
        images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              priceV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  const response = await ShopifyData(query);
  return response.data.productByHandle;
}

export async function getCollections() {
  const query = `
    {
      collections(first: 10) {
        edges {
          node {
            id
            title
            handle
            description
            image {
              originalSrc
              altText
            }
          }
        }
      }
    }
  `;

  const response = await ShopifyData(query);
  return response.data.collections.edges.map((edge) => edge.node);
}

export async function getCollection(handle) {
  const query = `
    {
      collectionByHandle(handle: "${handle}") {
        id
        title
        handle
        description
        image {
          originalSrc
          altText
        }
      }
    }
  `;

  const response = await ShopifyData(query);
  return response.data.collectionByHandle;
}

export async function getCollectionProducts(handle) {
  const query = `
    {
      collectionByHandle(handle: "${handle}") {
        products(first: 10) {
          edges {
            node {
              id
              title
              handle
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
              variants(first: 1) {
                edges {
                  node {
                    priceV2 {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await ShopifyData(query);
  return response.data.collectionByHandle.products.edges.map((edge) => edge.node);
}