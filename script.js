
function navclose(){
    let nav2 = document.getElementById('nav2');

    nav2.style.right = '-100%';
}

function navopen(){
    let nav2 = document.getElementById('nav2');

    nav2.style.right = '0';
}

function ageInDays() {
    let birthYear = prompt('What year were you born... Good friend?');
    let ageInDayss = (2020 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are' + ageInDayss + 'days old' );
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
    } 
    
    function reset() {
        document.getElementById('ageInDays').remove();
    }
    
    

function navclose(){
    let nav2 = document.getElementById('nav2');

    nav2.style.right = '-100%';
}

function navopen(){
    let nav2 = document.getElementById('nav2');

    nav2.style.right = '0';
}

function ageInDays() {
    let birthYear = prompt('What year were you born... Good friend?');
    let ageInDayss = (2020 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are' + ageInDayss + 'days old' );
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
    } 
    
    function reset() {
        document.getElementById('ageInDays').remove();
    }
    
    

