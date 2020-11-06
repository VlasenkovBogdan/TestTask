function logPassTest(){
    let log = document.getElementById('log').value
    let pass = document.getElementById('pass').value

    if (log == 'test' && pass == 'test'){
        localStorage.setItem(log, pass)
        document.location = 'map.html'
    } else (alert('Неправильный пароль'))
}