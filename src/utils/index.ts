import React from "react";
export function formatReviewCount(count: number) {
    if (count < 1_000) {
        return count.toString();
    } else if (count < 1_000_000) {
        return (count / 1_000).toFixed(count % 1_000 === 0 ? 0 : 1) + 'k';
    } else if (count < 1_000_000_000) {
        return (count / 1_000_000).toFixed(count % 1_000_000 === 0 ? 0 : 1) + 'm';
    } else {
        return (count / 1_000_000_000).toFixed(count % 1_000_000_000 === 0 ? 0 : 1) + 'b';
    }
}

export function currencyOfPrice(currency: string){
    // Determine the currency symbol
    const currencySymbol = currency.toLowerCase() === 'usd' ? '$' : currency.toUpperCase() +' ';

    return currencySymbol;
}