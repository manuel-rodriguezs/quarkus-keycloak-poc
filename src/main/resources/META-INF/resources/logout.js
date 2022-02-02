window.onunload = () => {
    window.opener.location.reload();
};

function keycloakLogout() {
    let keycloak = new Keycloak();
    keycloak.init({
        onLoad: 'login-required'
    }).then(() => {
        keycloak.logout();
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.close();
    }).catch(() => {
        alert('failed to initialize');
    });
}