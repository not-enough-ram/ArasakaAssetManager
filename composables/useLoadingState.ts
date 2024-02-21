// composables/useLoadingState.ts

interface LoadingState {
  isLoading: Ref<boolean>;
  showLoading: () => void;
  hideLoading: () => void;
}

const useLoadingState = (): LoadingState => {
  const isLoading = ref(false);

  const showLoading = () => {
    isLoading.value = true;
  };

  const hideLoading = () => {
    isLoading.value = false;
  };

  return { isLoading, showLoading, hideLoading };
};

export default useLoadingState;
