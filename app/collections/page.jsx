// app/collections/page.js
import { getCollections } from '@/lib/shopify';
import CollectionCard from '@/components/CollectionCard';

export default async function CollectionsPage() {
  const collections = await getCollections();

  return (
    <main className="container">
      <h1>All Collections</h1>
      <div className="collections-grid">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </main>
  );
}
