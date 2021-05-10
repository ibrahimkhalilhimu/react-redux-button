export const increase = (num)=>{
    return {
        type: 'INCREASE',
        payload: num,
    }
}
export const decrease = (num)=>{
    return {
        type: 'DECREASE',
        payload: num,
    }
}

export const multNumber = (num)=>{
    return {
        type: 'MULT',
        payload: num,
    }
}
export const divNumber = (num)=>{
    return {
        type: 'DIVIDE',
        payload: num,
    }
}