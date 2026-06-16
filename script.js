function placeOrder() {
    document.getElementById("message").innerHTML =
    "✅ Your order has been placed successfully!";
}
setInterval(() => {
    document.getElementById("clock").innerHTML =
    new Date().toLocaleTimeString();
}, 1000);
window.onload = function(){
    alert("🎉 Welcome to Food Paradise!");
}
