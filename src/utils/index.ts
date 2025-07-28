export function formatReviewCount(count:number) {
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