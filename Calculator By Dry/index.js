let displayString = '';

function addToDisplay(str)
{
    displayString += str;
    document.querySelector('.displayscreen').textContent = displayString;
}

function cal()
{
    let result = eval(displayString);
    document.querySelector('.displayscreen').textContent = result;
    displayString = '';

}

function allClear()
{
    displayString = '';
    document.querySelector('.displayscreen').textContent = displayString;

}

function deleteStr()
{
    displayString = displayString.slice(0,-1);
    document.querySelector('.displayscreen').textContent = displayString;
}
