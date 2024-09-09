//Task 1-Create a Function to Calculate Average Sales

function calculateAverageSales(sales_figures){
    if(sales_figures.length ===0) return 0;
    var SalesTotal = sales_figures.reduce((acc, curr)=> acc + curr, 0);
    return SalesTotal/sales_figures.length};
    // This function will calculate the average sales for the company