//Task 1-Create a Function to Calculate Average Sales

function calculateAverageSales(sales_figures){
    if(sales_figures.length ===0) return 0;
    var SalesTotal = sales_figures.reduce((acc, curr)=> acc + curr, 0);
    return SalesTotal/sales_figures.length};
    // This function will calculate the average sales for the company

//Task 2-Create a Function to Determine Performance Rating

function determinePerformanceRating (averageSales){
    if (averageSales>10000) {return "Execellent"}
    else if (averageSales>7000 && averageSales<=10000) {return "Good"}
    else if (averageSales>=4000 && averageSales<7000) {return "Satisfactory"}
    else { return"Needs Improvement"}};
// This function uses a series of if else statements to check in what bracket does the average 
// sales for the company fits in and return a string with its "grade".

//Task 3-Create a Function to Identify Top and Bottom Performers

function findTopAndBottomPerformers(data){
    if (data.length === 0 ) return {topPerformer: null, bottomPerformer: null};
    const topPerformer = data.reduce((top, salesperson) => calculateAverageSales(top.sales) >= calculateAverageSales(salesperson.sales) ? top : salesperson  ,data[0]);
    const bottomPerformer = data.reduce((bottom, salesperson) => calculateAverageSales(bottom.sales) <= calculateAverageSales(salesperson.sales) ? bottom : salesperson  ,data[0]);
    return {topPerformer, bottomPerformer};
    }

    //Task 4- Combine Functions to Generate a Performance Report

function generatePerformanceReport(data){
    const report = data.map((salesperson) => ({
        name: salesperson.name, 
        averageSales: calculateAverageSales(salesperson.sales), 
        rating: determinePerformanceRating(calculateAverageSales(salesperson.sales)),
    }));
    const topPerformer = findTopAndBottomPerformers(data).topPerformer.name;
    const bottomPerformer = findTopAndBottomPerformers(data).bottomPerformer;
    return {report, topPerformer, bottomPerformer};
};