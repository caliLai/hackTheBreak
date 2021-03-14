// OUTDATED
function hourconv(_int){
    if (_int.includes('am')){
        _int = parseInt(_int.replace('am'));
    }else if(_int.includes('pm')){
        _int = parseInt(_int.replace('pm'))+12;
    }
    return _int;
}

function compare(field, order = 'asc'){
    return function innerSort(a,b){
        let A,B;
        A = (typeof a.fields[field] === 'string') ? a.fields[field].toUpperCase() : a.fields[field];
        B = (typeof b.fields[field] === 'string') ? b.fields[field].toUpperCase() : b.fields[field];
        let comp = 0
        if(A > B) comp = 1
        else if(A < B) comp = -1
        return (order === 'desc') ? (comp *= -1) : comp;
    
    }
}
function data_sort(data,field,order = 'asc'){
    return data.sort(compare(field,order));
}
module.exports = {
    is_open,
    data_sort
}