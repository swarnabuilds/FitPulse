export const getPlans = async() => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog' ,
        { next: {revalidate: 10} });

    if(!res.ok){
        throw new Error('failed to fetch plans Data');
    }   
    
    const data = await res.json();
    return data;
}