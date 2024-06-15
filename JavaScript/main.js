// module profile
function profile(data) {
 var img = data.profile.img
 var name = data.profile.name
 var bio = data.profile.bio
 
 var ele = document.getElementById("profile")
 ele.innerHTML = `   
    <div class="avatar">
       <img  src="${img}" alt="avatar" />
     </div>
     <h1 class="name">${name}</h1>
     <div class="bio" >${bio} </div> `
}

profile(data)


// module mxh

function mxh(data){
  const arrMxh = []
  for (const i in data.mxh ){
   arrMxh.push(` 
   <a  data-aos="flip-down" data-aos-duration="1000" href="${data.mxh[i].link}">
        <div data-aos="flip-down" data-aos-duration="2000" class=" setup_in" style="  background-image: linear-gradient(to left bottom, ${data.mxh[i].color1}, ${data.mxh[i].color2});">
          <i class="${data.mxh[i].icon}"></i>
          <span>${data.mxh[i].name}</span>
        </div></a>
        
   `)
   
  
  }
  var mxh = document.querySelector(".mxh_pl") 
  mxh.innerHTML = arrMxh.join("")
}
mxh(data)


setTimeout(() => {
    const load = document.getElementById("loading")
   load.remove()
    
   var video = document.querySelector("#myvideo") 
   video.play()
  },"3000")