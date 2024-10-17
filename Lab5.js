var monthName = 'August';
switch (monthName) {
    case 'November':
    case 'December':
    case 'January':
    case 'February':
        console.log('Winter is coming.');
        break;
    
    case 'March':
    case 'April':
    case 'May':
    case 'June':
        console.log('Hot Hot Hot... Summer.');
        break;
    
    case 'July':
    case 'August':
    case 'September':
    case 'October':
        console.log('Too much rain, I am under the water.');
        break;

    default:
        console.log('Input a month correctly.');
        break;
}
