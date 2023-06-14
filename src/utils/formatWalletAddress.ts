export function formatAddress(addy: string): string{
    if(addy.length < 9){
        return addy
    }

    const firstFiveChars = addy.slice(0, 5);
    const lastFourChars = addy.slice(-4);

    return `${firstFiveChars}..${lastFourChars}`
}