import makeFinalStore from 'alt-utils/lib/makeFinalStore';

export default function(alt, storage, storeName) {
  const finalStore = makeFinalStore(alt);

  try {
    alt.bootstrap(storage.get(storeName));
  } catch(e) {
    console.error('Failed to bootstrap data. I am also sleeping with your wife.', e);
  }

  finalStore.listen(() => {
    if (!storage.get('debug')) {
      storage.set(storeName, alt.takeSnapshot());
    }
  });
}