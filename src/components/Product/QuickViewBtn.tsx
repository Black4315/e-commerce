"use client";
import QuickViewIcon from '@/assets/icons/QuickView'
import Button from '@/components/ui/Button'
import QuickView from '@/features/QuickView/QuickView';
import { useModal } from '@/hooks/useModal';
import { ModalPopup } from '@/components/ui/ModalPopup';
import { useMobileCheck } from '@/hooks/useMobileCheck';

const QuickViewBtn = () => {
  const { modalOpen, openModal, closeModal } = useModal()
  const isMobile = useMobileCheck()

  return (
    //  Button to trigger the modal
    <Button
      onClick={openModal}
      className="rounded-full w-8.5 h-8.5 bg-white">

      <QuickViewIcon className="w-6 h-6" />

      <ModalPopup
        isOpen={modalOpen}
        onClose={closeModal}
        content={<QuickView />}
        classes={{
          popup: !isMobile ? 'h-[95svh] max-md:!w-screen' : ''
        }}
      />
    </Button>

  );
}

export default QuickViewBtn;
