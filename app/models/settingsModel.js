import { checkboxs } from '../../public/assets/js/variables'

checkboxs[0].addEventListener('click', async () => {
    const nacionality = checkboxs[0].value;

    const updateData = {
        nacionality
    }
    const response = await fetch('https://sociallizze-api.up.railway.app/api/modifySettings',{
        method: "PUT",
        body: nacionality
    })

    const data = response.json()
    if(data.error){
        console.log('Erro', data.error)
    }

    console.log(data)
})

checkboxs[1].addEventListener('click', async () => {
    const nacionality = checkboxs[1].value;

    const updateData = {
        nacionality
    }
    const response = await fetch('https://sociallizze-api.up.railway.app/api/modifySettings',{
        method: "PUT",
        body: nacionality
    })

    const data = response.json()
    if(data.error){
        console.log('Erro', data.error)
    }

    console.log(data)
})

checkboxs[2].addEventListener('click', async () => {
    const nacionality = checkboxs[2].value;

    const updateData = {
        nacionality
    }
    const response = await fetch('https://sociallizze-api.up.railway.app/api/modifySettings',{
        method: "PUT",
        body: nacionality
    })

    const data = response.json()
    if(data.error){
        console.log('Erro', data.error)
    }

    console.log(data)
})
checkboxs[3].addEventListener('click', async () => {
    const nacionality = checkboxs[3].value;

    const updateData = {
        nacionality
    }
    const response = await fetch('https://sociallizze-api.up.railway.app/api/modifySettings',{
        method: "PUT",
        body: nacionality
    })

    const data = response.json()
        if(data.error){
            console.log('Erro', data.error)
        }

        console.log(data)
})