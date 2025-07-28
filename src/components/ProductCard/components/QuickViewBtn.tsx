"use client";
import QuickViewIcon from '@/assets/icons/QuickView'
import Button from '@/components/ui/Button'
import { useProductContext } from '../context/ProductContext';
import { useTranslations } from 'next-intl';
import { useModal } from '@/components/ui/ModalPopup';
import QuickView from '../../../features/QuickView/QuickView';

const QuickViewBtn = () => {
  const t = useTranslations('homePage')
  const { showModal } = useModal();

  //contexts
  const item = useProductContext()

  return (
    //  Button to trigger the modal
    <Button
      onClick={() => showModal(
        <QuickView productInfo={item!} quickViewText={t('quickView')} />
      )}
      className="rounded-full w-8.5 h-8.5 bg-white">

      <QuickViewIcon className="w-6 h-6" />
    </Button>

  );
}

export default QuickViewBtn;
