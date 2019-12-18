let key = `VQ18vret9GEap4RzFcWMit2Gt9IYBqXU`
let form = document.querySelector(`form`);
let content = document.querySelector(`.content`)
let select = document.querySelector("select")
let input = document.querySelector(`#userInput`)
let submit = document.querySelector(`#submit`)
let limit =1;
let searchValue = `cats`

let h1 =document.createElement("h1")


form.addEventListener(`submit`, (event)=>{
    event.preventDefault()
    
    giphySearch(searchValue,limit)
})

input.addEventListener("change", ()=>{
    searchValue = input.value
    console.log(searchValue)
})

select.addEventListener("change",()=>{
    limit = Number(select.value)
    debugger
})

const addImage = (arr) =>{
    arr.forEach( el =>{
        let img = document.createElement("img")
            img.src = el.images.fixed_height_downsampled.url
            content.appendChild(img)
    })
}

const giphySearch = async (userInput,userLimit) =>{
    content.innerHTML=""
    try{
        let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}&limit=${userLimit}`)
        images = res.data.data
        addImage(images)
    } catch(err){
        console.log(err)
    }

}


const popluateSelect = ()=>{
    
    for(i=1;i<=25;i++){
        let opition = document.createElement("option")
        opition.innerText = i
        opition.value = i
        select.appendChild(opition)
    }
}

popluateSelect()