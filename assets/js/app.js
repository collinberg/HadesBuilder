let build = [];
build.weapon = '';
build.aspect = '';

function set_aspect(item){
  //Grab the data from the Clicked Aspect
  let aspect = item.dataset.aspect;
  let aspectName = item.innerText;
  let aspectImg = item.querySelector('img').src

  //Remove the "No Aspect State"
  let aspectSidebar = document.querySelector('.current__aspect');
  aspectSidebar.classList.remove('no_selection');
  //aspectSidebar.classList.add('active_aspect');

  //Add the data to the sidebar
  document.querySelector('.current__aspect span').innerHTML = aspectName;
  let aspectIconWrap = document.createElement('div');
  aspectIconWrap.classList.add('weapon-icon');

    let aspectIcon = document.createElement('img');
    aspectIcon.src = aspectImg;

  aspectIconWrap.appendChild(aspectIcon);
  document.querySelector('.current__aspect').prepend(aspectIconWrap);

  //Hide Menu
  let aspectmenu = document.querySelector('#aspects');
  aspectmenu.classList.add('hide');

  build.aspect = aspect;

}

function set_weapon(item){
  console.log('set weapon function');

  //Grab the data from the Clicked Aspect
  let weapon = item.dataset.weapon;
  let aspectName = item.dataset.name;
  let aspectImg = item.querySelector('img').src

  //Remove the "No Aspect State"
  let aspectSidebar = document.querySelector('.current__weapon');
  aspectSidebar.classList.remove('no_selection');
  //aspectSidebar.classList.add('active_aspect');

  //Add the data to the sidebar
  document.querySelector('.current__weapon span').innerHTML = aspectName;
  let aspectIconWrap = document.createElement('div');
  aspectIconWrap.classList.add('weapon-icon');

    let aspectIcon = document.createElement('img');
    aspectIcon.src = aspectImg;

  aspectIconWrap.appendChild(aspectIcon);
  document.querySelector('.current__weapon').prepend(aspectIconWrap);

  //Hide Menu
  let menu = document.querySelector('#weapons');
  menu.classList.add('hide');

  let aspectmenu = document.querySelector('#aspects');
  aspectmenu.classList.remove('hide');

  build.weapon = weapon;
}

function switch_weapon(item){
  let menu = document.querySelector('#weapons');
  menu.classList.remove('hide');
}

function aspectChange(e){

  //Add class of "no-aspect"
  let current = e.currentTarget.previousElementSibling;
  current.classList.add('no_selection');
  console.log(current);
  //Remove icon
  if (document.contains(document.querySelector('.weapon-icon'))) {
    current.querySelector('.weapon-icon').remove();
  }
  //Change Text inside span
  current.querySelector('span').innerText = 'Select Weapon';

}

function weapons_build(){
  let requestURL = 'https://hirecollin.com/hades/weapons.json';

  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    const weapons = request.response;

    console.log(weapons);
    //populateHeader(weapons);
    //showHeroes(weapons);
  }

  //let weapons = JSON.parse(weapons);

  return weapons;
}

//Event Handlers
document.querySelector('#switchWeapon').addEventListener('click', (e) => {

    aspectChange(e);

    switch_weapon(e);

});
document.querySelectorAll('.weapon-nav .nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    set_weapon(e.currentTarget);
  })
})
document.querySelectorAll('.aspect-nav .nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    set_aspect(e.currentTarget);
  })
})
