export const formatCurrency = (num: number) => {
  return num.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
};

// Not in use now
export const checkClickOutside = (
  e: MouseEvent,
  modalRef: React.RefObject<HTMLDivElement>,
  closeModal: () => void
) => {
  if (modalRef.current && modalRef.current.contains(e.target as Node)) {
    closeModal();
  }
};
