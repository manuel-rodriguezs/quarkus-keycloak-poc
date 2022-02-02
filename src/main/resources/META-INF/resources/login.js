window.onunload = () => {
    window.opener.location.reload();
};

function keycloakLogin() {
    let keycloak = new Keycloak();
    keycloak.init({
        onLoad: 'login-required'
    }).then((authenticated) => {
        if (authenticated) {
            document.cookie = "token=" + keycloak.token;
            window.close();
        }
    }).catch(() => {
        alert('failed to initialize');
    });
}