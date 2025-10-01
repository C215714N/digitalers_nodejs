export const rangeFilter = (query) => {
    const filter = {};
    Object.entries(query).map(([k,v]) => {
        if(typeof v === "string") filter[k] = { 
            $gte: Number(v) 
        };
        if (v?.length === 2) filter[k] = { 
            $gte: Number(v[0]), 
            $lte: Number(v[1])
        }
    })
    return filter;
} 

export const searchFilter = (query) => {
    const { q, field } = query;
    const filter = {
        [field]: {  $regex: q, $options: "i" } 
    };
    return q ? filter : false;
}