function init() {
    let token = getToken();
    if (token !== undefined && token !== '') {
        document.getElementById("logged").style.display = "inline";
        document.getElementById("name").innerHTML = token.name;
        document.getElementById("token").innerHTML = JSON.stringify(token);
    } else {
        document.getElementById("notlogged").style.display = "inline";
    }
}

function login() {
    popupwindow("login.html", "loginWindow", 600, 600);
}

function logout() {
    popupwindow("logout.html", "logoutWindow", 600, 600);
}

function popupwindow(url, title, w, h) {
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}

function getToken() {
    let token = getCookie("token");
    if (token === undefined || token === '') {
        return '';
    }
    return parseJwt(token);
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
