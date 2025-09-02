// add ----> done
// clear ----> done
//  display  -----> done
// delete -----> done
// visit   ------> done
// local storage -----> done
// validation (name,url) -----> done
// function to capitalize website name   -----< done




var websiteNameInput = document.getElementById("websiteName");
var websiteUrlInput = document.getElementById("websiteUrl");
var rowData = document.getElementById("rowData");
var deleteBtn = document.getElementById("deleteBtn")
var visitBtn = document.getElementById("visitBtn")



var websitesList 

if(localStorage.getItem('websites') != null){
websitesList =JSON.parse(localStorage.getItem('websites'));
 displayTable();
}
else{
    websitesList = [];
}

function addWebsite(){
    var website = {
        name :capitalizeName(websiteNameInput.value),
        url : websiteUrlInput.value
    };
    
    websitesList.push(website);
    console.log(websitesList);
    localStorage.setItem("websites",JSON.stringify(websitesList));
    clear();
    displayTable();
    
}
function clear(){
    websiteNameInput.value=null;
    websiteUrlInput.value=null;
}

function displayTable(){
    var box = ``;
    for(var i =0; i<websitesList.length;i++){
        box += `<tr>
                        <th scope="row">${i+1}</th>
                        <td>${websitesList[i].name}</td>
                        <td>
                            <button id="visitBtn" class="btn-success btn" onclick="visitWebsite(${i})">
                                <i class="fa-solid fa-eye"></i> Visit
                            </button></td>
                        <td>
                            <button id="deleteBtn" class="btn-danger btn" onclick="deleteWebsite(${i})">
                                <i class="fa-solid fa-trash-can"></i> Delete
                            </button></td>
                        </td>
                    </tr>`

    }
    rowData.innerHTML = box;
}
function capitalizeName(){
    var str = [];

}
function deleteWebsite(deletedIndex){
    console.log(deletedIndex);
    websitesList.splice(deletedIndex,1);
    displayTable();
    localStorage.setItem("websites",JSON.stringify(websitesList));

}

function visitWebsite(visitedIndex){    
    console.log(visitedIndex);
    var url = websitesList[visitedIndex].url;

    if (!/^https?:\/\//i.test(url)) {
        url = "https://" + url;
    }
    window.open(url);

}


function validateInputsName(){
    var regexName = /^[\w-]{3,}\s?/;
    console.log(regexName.test(websiteNameInput.value));
    if(regexName.test(websiteNameInput.value)){
        websiteNameInput.classList.add("is-valid");
        websiteNameInput.classList.remove("is-invalid");
    }
    else{
         websiteNameInput.classList.add("is-invalid");
         websiteNameInput.classList.remove("is-valid");
    }
}
function validateInputsUrl(){
    var regexUrl = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/;
    console.log(regexUrl.test(websiteUrlInput.value));
    if(regexUrl.test(websiteUrlInput.value)){
        websiteUrlInput.classList.add("is-valid");
        websiteUrlInput.classList.remove("is-invalid");
    }
    else{
         websiteUrlInput.classList.add("is-invalid");
         websiteUrlInput.classList.remove("is-valid");
    }
}


function capitalizeName(str) {
  let strArr = str.split("");
  strArr[0] = strArr[0].toUpperCase();
  return strArr.join("");
}