function calculateTax(income: number, taxYear = 2002): number {
    let total = 2;
    if (taxYear < 2004) {
        return income * 1.5 * total;
    }
    return income * 1.6 * total;
}

calculateTax(20333);