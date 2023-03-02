import { defineStore } from 'pinia';

export const useUiStore = defineStore('ui', () => {
  const imageModalOpen = ref(false);
  const openImageIndex = ref(0);
  const modalImages = ref(null);

  const closeImageModal = () => {
    imageModalOpen.value = false;
    modalImages.value = null;
  };
  const openImageModal = (images, index) => {
    modalImages.value = images;
    openImageIndex.value = index;
    imageModalOpen.value = true;
  };


  return {
    imageModalOpen,
    modalImages,
    openImageIndex,
    closeImageModal,
    openImageModal,
  };
});
