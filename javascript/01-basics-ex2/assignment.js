const task3Element = document.getElementById('task-3');

const _alert = function() { alert(); }

const _alertName = function(name) { alert(name); }

_alert();
_alertName();
task3Element.addEventListener('click', _alert);

const combineStrings = function(first, second, third) {
    return `${first}, ${second}, ${third}`;
}

alert(combineStrings('Jeden', 'Dwa', 'Trzy'));