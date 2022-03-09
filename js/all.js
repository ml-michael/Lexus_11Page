const cardTitle = document.getElementById("cardTitle")
const titleSection = document.getElementById("title-section")
const featureSmallItem = document.getElementById("featuresSmallItem")
const featureBigItem = document.getElementById("featuresBigItem")
const replaceName = document.getElementById("replaceName")
const regularName = document.getElementById("regularName")
const regularItem = document.getElementById("regularItem")
const replaceItem = document.getElementById("replaceItem")
const cardImgSection = document.getElementById("card-img-section")


cardTitle.textContent = Page_Data.pageName;
titleSection.textContent = Page_Data.featureName;
replaceName.textContent = Page_Data.replaceName
regularName.textContent = Page_Data.replaceRegular
cardImgSection.innerHTML = `
            <img 
            class="card-img-top img-fluid" id="card-image" alt="picture" 
            src=\"./image/${Page_Data.imageName}.png"\>
        `
// features item
for (let index = 0; index < Page_Data.featuresArray.length; index++) {
    // console.log(Page_Data.featuresArray)
    featureSmallItem.innerHTML += `<span>${Page_Data.featuresArray[index]}</span>`
}
// features big item

// for (let index = 0; index < Page_Data.featuresBigArray.length; index++) {
//     // console.log(Page_Data.featuresArray)
//     featuresBigItem.innerHTML += `
//             ${Page_Data.featuresBigArray[index]}`
// }
// replace item
for (let index = 0; index < Page_Data.replaceArray.length; index++) {
    // console.log(Page_Data.replaceArray)
    replaceItem.innerHTML += `
    
    <li class="text-start" id="replaceItem">
    <span>${Page_Data.replaceArray[index]}</span>
    </li>
    `
}
for (let index = 0; index < Page_Data.regularArray.length; index++) {
    // console.log(Page_Data.replaceArray)
    regularItem.innerHTML += `
    <li class="text-start letter-3" id="replaceItem">
    <span>${Page_Data.regularArray[index]}</span>
    </li>
    
    `
}