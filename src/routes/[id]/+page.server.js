import { redirect } from '@sveltejs/kit';

export const load = async ({fetch, params, url}) =>{
    const dub = await url.searchParams.get('dub') 
    const provider = await url.searchParams.get('provider') 

    const res = await fetch(`https://api.consumet.org/meta/anilist/info/${params.id}?dub=${dub}&provider=${provider}`)
    const resJson = await res.json()

    return{
        params:params.id,
        info:resJson
    }
    
}


export const actions = {
    changeSrc : async({request,params})=>{
        // console.log('params:', params)
        const formData = await request.formData()
        const dub = formData.get('dub')
        const provider = formData.get('provider')

        throw redirect(307, `/${params.id}?dub=${dub}&provider=${provider}`)
    }
}



