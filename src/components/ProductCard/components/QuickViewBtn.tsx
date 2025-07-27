"use client";
import QuickViewIcon from '@/assets/icons/QuickView'
import Button from '@/components/ui/Button'
import { showPop } from '@/components/ui/PopUp';
// import PopUp from '@/components/ui/popup'
import { useEffect, useState } from 'react'
import ImagesQuickView from './ImagesQuickView';
import { useMobileCheck } from '@/hooks/useMobileCheck';
import { productType } from '../types/productType';
import { useProductContext } from '../context/ProductContext';
import { useLocale, useTranslations } from 'next-intl';

const QuickViewBtn = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMobileCheck()
  const t = useTranslations('homePage')
  const locale = useLocale();

  //contexts
  const item = useProductContext()

  return (

    //  Button to trigger the modal
    <Button
      onClick={() => showPop(
        <ImagesQuickView {...item} quickViewText={t('quickView')} />, isMobile, locale
      )}
      className="rounded-full w-8.5 h-8.5 bg-white">

      <QuickViewIcon className="w-6 h-6" />
    </Button>

  );
}

export default QuickViewBtn;
