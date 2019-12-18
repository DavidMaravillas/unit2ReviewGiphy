let key = `VQ18vret9GEap4RzFcWMit2Gt9IYBqXU`
let form = document.querySelector(`form`);
let content = document.querySelector(`.content`)
let select = document.querySelector("select")
let input = document.querySelector(`#userInput`)
let submit = document.querySelector(`#submit`)
let limit = 10;
let searchValue = `cats`

let h1 =document.createElement("h1")


const giphySearch = async (userInput,userLimit) =>{
    try{
        let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}&limit=${userLimit}`)
        console.log(res)
    } catch(err){
        console.log(err)
    }

}

giphySearch(searchValue,limit)

const popluateSelect = ()=>{
    
    for(i=1;i<=25;i++){
        let opition = document.createElement("option")
        opition.innerText = i
        opition.value = i
        select.appendChild(opition)
    }
}

popluateSelect()