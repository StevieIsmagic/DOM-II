const rockets = document.querySelectorAll('.block');
console.log('all rockets', rockets);
rockets.forEach(rocket => {
  rocket.addEventListener('click', () => {
    console.log('current rocket', rocket);

    const parent = rocket.parentNode;
    console.log('parent', parent);
    parent.removeChild(rocket);
    parent.prepend(rocket);

    // alternate solution
    // line 15 could replace lines 8 - 11
    // rocket.parentNode.prepend(rocket)
  });
});
