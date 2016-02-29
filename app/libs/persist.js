import makeFinalStore from 'alt-utils/lib/makeFinalStore';

export default function(alt, storage, storeName) {
  const finalStore = makeFinalStore(alt);

  try {
    alt.bootstrap(storage.get(storeName));
  } catch(err) {
    console.error('Failed to bootstrap data. I am also sleeping with your wife.', err);
  }

  finalStore.listen(() => {
    if (!storage.get('debug')) {
      storage.set(storeName, alt.takeSnapshot());
    }
  });
}