function hourconv(_int){
    if (_int.includes('am')){
        _int = parseInt(_int.replace('am'));
    }else if(_int.includes('pm')){
        _int = parseInt(_int.replace('pm'))+12;
    }
    return _int;
}
function Months(arg_month){
    if(arg_month != undefined){
        let arg_months = arg_month.split(' ').join('').split('-');
    }
    return arg_months;
}
function is_open(arg_open, arg_close, arg_day, arg_month){
    let days = {
        Sunday: 0,
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6
    };
    let months = {
        January: 0,
        Jan: 0,
        Febuary: 1,
        Feb: 1,
        March: 2,
        Mar: 2,
        April: 3,
        Apr: 3,
        May: 4,
        June: 5,
        Jun:5,
        July: 6,
        Jul: 6,
        August: 7,
        Aug: 7,
        September: 8,
        Sep:8,
        October: 9,
        Oct: 9,
        November: 10,
        Nov: 10,
        December: 11,
        Dec: 11,
        //special cases
    };
    /*
    let today = new Date();
    let day = today.getDay();
    let month = today.getMonth();
    */
    if (arg_open ===undefined)      arg_open = "-1";    // if unavailable, use 01
    if (arg_close === undefined)    arg_close = "-1";
    //check if the month is within range
    //if(arg_day === undefined || arg_month === undefined)    return "unavailable";
    arg_close = hourconv(arg_close);                    //conversion from am/pm to 24-hr
    arg_open = hourconv(arg_open);                      //conversion from am/pm to 24-hr
    //-------------------------------
    //remove whitespace inbetween
    let arg_months = Months(arg_month);
    
    
    // if there are induvidual days listed
    if(arg_day != undefined){
        if(arg_day.includes(',')){
            let arg_days = arg_day.split(',');
            let mod_days = [];
            for(x in arg_days){
                mod_days.push(arg_days[x].trim().split(' '));
            }
            console.log(mod_days);
        }
    }
    //console output
    console.log(arg_open);
    console.log(arg_close);
    console.log(days[arg_day]);
    console.log(arg_month);
    console.log(months[arg_months[0]]+' '+months[arg_months[1]]);

}
function compare(field, order = 'asc'){
    return function innerSort(a,b){
        const A = (typeof a[field] === 'string') ? a[field].toUpperCase() : a[field];
        const B = (typeof a[field] === 'string') ? a[field].toUpperCase() : a[field];
        let comp = 0
        if(A > B) comp = 1
        else if(A < B) comp = -1
        return (order === 'desc') ? (comp *= -1) : comp;
    
    }
}
function data_sort(data,field,order = 'asc'){
    data.sort(compare(field,order));
    return data
}
module.exports = {
    is_open,
    data_sort
}