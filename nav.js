
async function includeHTML(attr) {
    
    let allTags = [...document.body.getElementsByTagName("*")];
   
    
    for (let i = 0; i < allTags.length; i++) {

        let element = allTags[i];
        
        if(element.hasAttribute(attr)) {
            console.log(i, '----has');
            
            
            let file = element.getAttribute(attr)
            let response = await fetch(`./${file}`, );
            if (response.ok) {
                let insertText = await response.text();
                element.innerHTML = insertText;
            } else {
                element.innerHTML = 'page not found'
            } 
            element.removeAttribute('data-navMenu');
      
        }        
    }
    
}   


includeHTML('data-navMenu');