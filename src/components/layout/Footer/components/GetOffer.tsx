"use client"
import React, { useEffect, useState } from 'react';
import IconsendIcon from '@/assets/icons/iconsend'; // Example import for icon
import { useTranslations } from 'next-intl';

const GetOffer = () => {
    // State for email, error message, and form validity
    const [hydrated,setHydrated] = useState(false)
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isValid, setIsValid] = useState(true);
    const t = useTranslations('footer')

    // check if hydrated
    useEffect(()=> setHydrated(true),[])
    if (!hydrated) return null;

    // Handle email input change
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    // Handle form submission
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simple email regex for validation
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (!emailRegex.test(email)) {
            setErrorMessage('Email is not valid');
            setIsValid(false);
        } else {
            setErrorMessage('');
            setIsValid(true);

            // If valid, you can send the email data to the backend here
            // console.log('Email is valid, sending to backend:', email);

            // Example backend request (you can replace this with actual API logic)
            // fetch('/your-backend-endpoint', { method: 'POST', body: JSON.stringify({ email }) });

            // Clear the form after submission (optional)
            setEmail('');
        }
    };

    return (
        <div className='flex flex-col gap-3 box-border '>
            <span className="footer-text">{t('offer')}</span>
            <form 
                onSubmit={onSubmit} 
                className='flex justify-between gap-2 border-[1.5px] max-w-[217] border-text-1 py-3 px-4 rounded transition-all'
                style={{
                    border: isValid ? '1.5px solid #FAFAFA' : '1px solid #DC2626', // Red border for invalid email
                }}
            >
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder={t('email')}
                    className='outline-none w-full bg-transparent texdt-[#646464] text-text-3'
                />
                <button type="submit" className='cursor-pointer text-text-1 hover:text-text-3 transition-all'
                    style={{
                        color: isValid ? '#FAFAFA' : '#DC2626', // Red border for invalid email
                    }}
                >
                    <IconsendIcon className={'rtl:rotate-180'}/>
                </button>
            </form>
            <div className='text-danger-600 text-xs'>
                {errorMessage && <span>{errorMessage}</span>}
            </div>
        </div>
    );
};

export default GetOffer;
