export const load = async ({fetch, parmas, url}) =>{
    const res = await fetch(`https://api.consumet.org/meta/anilist/popular`)
    const resJson = await res.json()

    return{
        trend: resJson,
    }
}
