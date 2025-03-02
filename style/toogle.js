document.getElementById("fix-mobile").style.display = "none";
document.getElementById("dark-mode").style.display = "none";
document.getElementById("home-page").style.display = "none";
document.getElementById("add-emoji").style.display = "none";
document.getElementById("open-api").style.display = "none";
document.getElementById("job-search").style.display = "none";
document.getElementById("review").style.display = "none";


document.getElementById("ShopEase-btn").addEventListener("click", function () {
    alert("Board Update Successfully");
    document.getElementById("ShopEase-btn").disabled = true;
    document.getElementById("fix-mobile").style.display = "block";

    const mainBalance = document.getElementById("main-balance").innerText;
    const main = document.getElementById("mainbalance").innerText;
    const convertedMainbalance = parseFloat(mainBalance);
    const convertedMain = parseFloat(main);

    const sum = convertedMainbalance + 1;
        document.getElementById("main-balance").innerText = sum;

        const minus = convertedMain - 1;
        document.getElementById("mainbalance").innerText = minus;
        const header = document.getElementById("h1").innerText;
        document.getElementById("first-header").innerText = header;

})
document.getElementById("CloudSync-btn").addEventListener("click", function () {
    alert("Board Update Successfully");
    document.getElementById("CloudSync-btn").disabled = true;
    document.getElementById("dark-mode").style.display = "block";

    const mainBalance = document.getElementById("main-balance").innerText;
    const main = document.getElementById("mainbalance").innerText;
    const convertedMainbalance = parseFloat(mainBalance);
    const convertedMain = parseFloat(main);

    const sum = convertedMainbalance + 1;
        document.getElementById("main-balance").innerText = sum;

        const minus = convertedMain - 1;
        document.getElementById("mainbalance").innerText = minus;
        const header = document.getElementById("h2").innerText;
        document.getElementById("second-header").innerText = header;

})
document.getElementById("SwiftPay-btn").addEventListener("click", function () {
    alert("Board Update Successfully");
    document.getElementById("SwiftPay-btn").disabled = true;
    document.getElementById("home-page").style.display = "block";

    const mainBalance = document.getElementById("main-balance").innerText;
    const main = document.getElementById("mainbalance").innerText;
    const convertedMainbalance = parseFloat(mainBalance);
    const convertedMain = parseFloat(main);

    const sum = convertedMainbalance + 1;
        document.getElementById("main-balance").innerText = sum;

        const minus = convertedMain - 1;
        document.getElementById("mainbalance").innerText = minus;
        const header = document.getElementById("h3").innerText;
        document.getElementById("third-header").innerText = header;

})
document.getElementById("meta-btn").addEventListener("click", function () {
    alert("Board Update Successfully");
    document.getElementById("meta-btn").disabled = true;
    document.getElementById("add-emoji").style.display = "block";

    const mainBalance = document.getElementById("main-balance").innerText;
    const main = document.getElementById("mainbalance").innerText;
    const convertedMainbalance = parseFloat(mainBalance);
    const convertedMain = parseFloat(main);

    const sum = convertedMainbalance + 1;
        document.getElementById("main-balance").innerText = sum;

        const minus = convertedMain - 1;
        document.getElementById("mainbalance").innerText = minus;
        const header = document.getElementById("h4").innerText;
        document.getElementById("fourth-header").innerText = header;

})
document.getElementById("google-btn").addEventListener("click", function () {
    alert("Board Update Successfully");
    document.getElementById("google-btn").disabled = true;
    document.getElementById("open-api").style.display = "block";

    const mainBalance = document.getElementById("main-balance").innerText;
    const main = document.getElementById("mainbalance").innerText;
    const convertedMainbalance = parseFloat(mainBalance);
    const convertedMain = parseFloat(main);

    const sum = convertedMainbalance + 1;
        document.getElementById("main-balance").innerText = sum;

        const minus = convertedMain - 1;
        document.getElementById("mainbalance").innerText = minus;
        const header = document.getElementById("h5").innerText;
        document.getElementById("fifth-header").innerText = header;


})
document.getElementById("glassdoar-btn").addEventListener("click", function () {
    alert("Board Update Successfully");
    document.getElementById("glassdoar-btn").disabled = true;
    document.getElementById("job-search").style.display = "block";

    const mainBalance = document.getElementById("main-balance").innerText;
    const main = document.getElementById("mainbalance").innerText;
    const convertedMainbalance = parseFloat(mainBalance);
    const convertedMain = parseFloat(main);

    const sum = convertedMainbalance + 1;
        document.getElementById("main-balance").innerText = sum;

        const minus = convertedMain - 1;
        document.getElementById("mainbalance").innerText = minus;
        const header = document.getElementById("h6").innerText;
        document.getElementById("sixth-header").innerText = header;

})
document.getElementById("clean-btn").addEventListener("click", function () {
    document.getElementById("fix-mobile").style.display = "none";
    document.getElementById("dark-mode").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("add-emoji").style.display = "none";
    document.getElementById("open-api").style.display = "none";
    document.getElementById("job-search").style.display = "none";
    document.getElementById("review").style.display = "none";
    
    

})

document.addEventListener("DOMContentLoaded", function () {
    // List of button IDs
    const buttonIds = [
        "ShopEase-btn",
        "CloudSync-btn",
        "SwiftPay-btn",
        "meta-btn",
        "google-btn",
        "glassdoar-btn"
    ];

    // Object to track clicked buttons
    let clickedButtons = new Set();

    // Function to handle button click
    function handleClick(event) {
        clickedButtons.add(event.target.id); // Add button ID to the set

        if (clickedButtons.size === buttonIds.length) {
            alert("🎉 Congrates!!! You have completed all the Current Task");
            document.getElementById("review").style.display = "block";
            
        }
    }

    // Attach event listeners to each button
    buttonIds.forEach(id => {
        let button = document.getElementById(id);
        if (button) {
            button.addEventListener("click", handleClick);
       
        }
    });
});
document.getElementById("main-blog-box").addEventListener("click", function () {
    
    document.location.href = 'blog.html';


});
