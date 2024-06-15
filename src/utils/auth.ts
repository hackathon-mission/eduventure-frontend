export function isLoggedIn(): boolean {
    return localStorage.getItem("user") !== null && localStorage.getItem("user") !=="null";
}
