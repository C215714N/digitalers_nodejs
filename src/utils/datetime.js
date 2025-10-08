const getDate = (type) => {
    const date = new Date();
    const [ Y, M, D ] = [ date.getFullYear(), date.getMonth(), date.getDate(), ]
    
    const values = {
        FIRST_DAY: new Date(Y, 1, 1),
        LAST_YEAR: new Date(Y - 1, M, D),
        LAST_MONTH: new Date(Y, M - 1, D),
        NEXT_MONTH: new Date(Y, M + 1, D),
        NEXT_YEAR: new Date(Y, M, D + 1),
        LAST_DAY: new Date(Y, 12, 31),
        DEFAULT: date,
    }
    return values[type.toUpperCase()] || values['DEFAULT']
}