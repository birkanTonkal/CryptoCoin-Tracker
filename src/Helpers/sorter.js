
export function alphabeticalSort(data, property, order) {
    let sortedData = data.sort((a, b) => {
        if (order === true) {

            if (a[property] < b[property]){
                return -1;
            }
            if (a[property] > b[property]) {
                return 1;
            }
            return 0;
        }
        else {
            if (a[property] > b[property]){
                return -1;
            }
            if (a[property] < b[property]) {
                return 1;
            }
            return 0;
        }
        
    })
    return sortedData;
};

export function numericalSort(data, property, order) {
    let sortedData = data.sort((a, b) => {
        if(order === true) {
            return a[property] - b[property];
        }
        else {
            return b[property] - a[property];
        }
    })
    return sortedData;
}
