export function priceFormatter(price: number) {
    return `R$ ${
        price.toLocaleString(
            'pt-br', {
                style: 'decimal',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
    })}`;
}