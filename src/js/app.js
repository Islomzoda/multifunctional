

////////////////////////////////////////////9.1
{
    const purchases = [
    {id: 1, date: '01.01.2020', values: [
        {id: 1, amount: 2000, category: 'auto'},
        {id: 2, amount: 3000, category: 'food'},
        {id: 3, amount: 300, category: 'beauty'},
    ]},
    {id: 2, date: '03.01.2020', values: [
        {id: 4, amount: 3000, category: 'auto'},
        {id: 5, amount: 30000, category: 'travel'},
    ]},
    {id: 6, date: '04.01.2020', values: [
        {id: 6, amount: 3000, category: 'food'},
    ]},
];

const max = purchases.map(o => ({
    date: o.date,
    count: o.values.length
})).reduce((acc, curr) => acc.count > curr.count ? acc : curr);

const result = max.date;
console.log(result);
}
/////////////////////////////////////////9.2


{

    const purchases = [
    {id: 1, date: '01.01.2020', values: [
        {id: 1, amount: 2000, category: 'auto'},
        {id: 2, amount: 1000, category: 'food'},
        {id: 3, amount: 300, category: 'beauty'},
    ]},
    {id: 2, date: '03.01.2020', values: [
        {id: 4, amount: 5000, category: 'auto'},
        {id: 5, amount: 30000, category: 'travel'},
    ]},
    {id: 6, date: '04.01.2020', values: [
        {id: 6, amount: 4000, category: 'food' }
    ]},
];

const MaxAmountInDay = purchases.map((o => ({
    date: o.date,
    amount: o.values.reduce((acc, curr) => acc + curr.amount, 0)
}))).reduce((acc, curr) => acc.amount > curr.amount ? acc : curr);



const result2 = MaxAmountInDay.date;
console.log(result2);

/// 9.3



const demo = purchases.map(o =>o.values)
    .flat()
    .reduce((acc,curr) => acc.amount > curr.amount ? acc:curr)
    ;
console.log(demo);


/////////////////////9.4

const findMaxCategory = purchases.map(o => o.values)
    .flat()
    .reduce((acc, curr) => {
        const  comparisonCtategory = acc.find(o => o.category === curr.category)
        if (comparisonCtategory === undefined){
            acc.push({
                category: curr.category,
                amount: curr.amount
            });
        }
        else
        {
        comparisonCtategory.amount += curr.amount
        
}
return acc;
    }, []).reduce((acc, curr) => acc.amount > curr.amount ? acc : curr)


console.log(findMaxCategory);

////////////////////////////////9.5


const meanAmountInDay = purchases.map(o => o.values)
.flat()
.map((o, index, array) => o.amount / array.length
).reduce((acc, curr) => acc + curr)

console.log(meanAmountInDay);




/////////////////////////////9.6


const statisticForDay = purchases.map(o => ({
    data: o.date,
    amount: o.values.map(a => a.amount).reduce((acc, curr) => acc + curr)
}));

console.log(statisticForDay);


//////////////////9.7


const cutlyStatistick = purchases.map(o => o.values)
.flat()
.reduce((acc, curr) => {
    const  comparisonCtategory = acc.find(o => o.category === curr.category)
    if (comparisonCtategory === undefined){
        acc.push({
            category: curr.category,
            amount: curr.amount
        });
    }
    else
    {
    comparisonCtategory.amount += curr.amount
    
}
return acc;
}, [])


console.log(cutlyStatistick);
}