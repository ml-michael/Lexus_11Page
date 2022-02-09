const cardTitle = document.getElementById("cardTitle")
const titleSection = document.getElementById("title-section")
const featureSmallItem = document.getElementById("featuresSmallItem")
const featureBigItem = document.getElementById("featuresBigItem")
const replaceName = document.getElementById("replaceName")
const replaceItem = document.getElementById("replaceItem")
const cardImgSection = document.getElementById("card-img-section")


cardTitle.textContent = Page_Data.pageName;
titleSection.textContent = Page_Data.featureName;
replaceName.textContent = Page_Data.replaceName
cardImgSection.innerHTML = `
            <img 
            class="card-img-top img-fluid" id="card-image" alt="picture" 
            src=\"./image/${Page_Data.imageName}.jpeg"\>
        `
// features item
for (let index = 0; index < Page_Data.featuresArray.length; index++) {
    // console.log(Page_Data.featuresArray)
    featureSmallItem.innerHTML += `
            <li class="text-start" id="featuresSmallItem">    
                ${Page_Data.featuresArray[index]}
            </li>`
}
// features big item

for (let index = 0; index < Page_Data.featuresBigArray.length; index++) {
    // console.log(Page_Data.featuresArray)
    featuresBigItem.innerHTML += `
            <span class="text-start big-item " id="featuresBigItem">    
                ${Page_Data.featuresBigArray[index]}
            </span>`
}
// replace item
for (let index = 0; index < Page_Data.replaceArray.length; index++) {
    // console.log(Page_Data.replaceArray)
    replaceItem.innerHTML += `
            <li class="text-start" id="replaceItem">    
                ${Page_Data.replaceArray[index]}
            </li>`
}