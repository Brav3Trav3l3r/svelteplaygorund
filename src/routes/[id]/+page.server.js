export const load = async ({fetch, params}) =>{
    const res = await fetch(`https://api.consumet.org/meta/anilist/info/${params.id}?` + new URLSearchParams(queryObj) )
    const resJson = await res.json()

    return{
        info: resJson
    }
}


export const actions = {
    changeSrc : async({request})=>{
        const formData = await request.formData()
        const dub = formData.get('dub')
        const provider = formData.get('provider')

        const newQueryObj = {
            dub,
            provider
        }
        queryObj = newQueryObj
        return {
            sucess: true,
            queryObj
        }
    }
}

let queryObj ={
    dub: false,
    provider:'gogo'
}


