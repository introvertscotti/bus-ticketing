let users = [
    {
        userId: "tkt000001",
        profImg: "/dist/img/user.svg",
        name: "Hope Scott",
        trips: [
            {
                ticketNo: "MTRS2112_0032",
                busReg: "BQ1234",
                busService: "MATOURS",
                fromTerminal: "Gateway Mall",
                tripFrom: "LL",
                tripDest: "MZZ",
                destTerminal: "Depot",
                tripRoute: "Lakeshore",
                tripDate: "15 DEC",
                tripTime: "6pm",
                tripValidity: true,
            },
            {
                ticketNo: "CPTN2112_041",
                busReg: "LA4274",
                busService: "CAPTAIN",
                fromTerminal: "Wenela",
                tripFrom: "BT",
                tripDest: "LL",
                destTerminal: "City Mall",
                tripRoute: "Zalewa",
                tripDate: "20 DEC",
                tripTime: "1pm",
                tripValidity: false,
            },
        ],
    },
];

let busServiceTrips = [
    {
        tripId: "TKT_TRP0001",
        servLogo: "/dist/img/user5.svg",
        servName: "AXA",
        busReg: "TO3278",
        from: "Wenela, BT",
        to: "City Mall, LL",
        route: "Zalewa",
        date: "20 Dec",
        time: "1pm",
    },
    {
        tripId: "TKT_TRP0002",
        servLogo: "/dist/img/user1.svg",
        servName: "AXA",
        busReg: "BY3271",
        from: "Gateway Mall, LL",
        to: "Bus Depot, MZZ",
        route: "Lakeshore",
        date: "05 Jan",
        time: "10am",
    },
    {
        tripId: "TKT_TRP0003",
        servLogo: "/dist/img/user3.svg",
        servName: "MATOURS",
        busReg: "KA3245",
        from: "Wenela, BT",
        to: "Bus Depot, MZZ",
        route: "Lakeshore",
        date: "20 Dec",
        time: "1pm",
    },
    {
        tripId: "TKT_TRP0004",
        servLogo: "/dist/img/user2.svg",
        servName: "MATOURS",
        busReg: "LA1234",
        from: "Bus Depot, LL",
        to: "Wenela, BT",
        route: "Liwonde",
        date: "31 Dec",
        time: "1pm",
    },
];
let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
function displayUserTrips(users) {
    users.forEach(function (user) {
        let userName = user.name;
        document.title = `${userName} - Book yourself a seat and save yourself a trip.`;
        document.querySelector("#user-data h5").textContent = userName;
        let allUserTrips = user.trips;

        let upcomingTrips = allUserTrips.filter((upcomingTrip) => {
            return upcomingTrip.tripValidity == true;
        });

        let recentTrips = allUserTrips.filter((recentTrip) => {
            return recentTrip.tripValidity == false;
        });

        document
            .querySelector("#all-trips-toggle")
            .addEventListener("click", () => {
                document.querySelector("#tab-title h4").textContent =
                    "All Trips";
                document
                    .querySelector("#all-trips-toggle")
                    .classList.add("active");
                document
                    .querySelector("#upcoming-trips-toggle")
                    .classList.remove("active");
                document
                    .querySelector("#recent-trips-toggle")
                    .classList.remove("active");
                document.querySelector("#all-trips").style.display = "flex";
                document.querySelector("#upcoming").style.display = "none";
                document.querySelector("#recent").style.display = "none";
            });
        document
            .querySelector("#upcoming-trips-toggle")
            .addEventListener("click", () => {
                document.querySelector("#tab-title h4").textContent =
                    "Upcoming Trips";
                document
                    .querySelector("#all-trips-toggle")
                    .classList.remove("active");
                document
                    .querySelector("#upcoming-trips-toggle")
                    .classList.add("active");
                document
                    .querySelector("#recent-trips-toggle")
                    .classList.remove("active");
                document.querySelector("#all-trips").style.display = "none";
                document.querySelector("#upcoming").style.display = "flex";
                document.querySelector("#recent").style.display = "none";
            });
        document
            .querySelector("#recent-trips-toggle")
            .addEventListener("click", () => {
                document.querySelector("#tab-title h4").textContent =
                    "Recent Trips";
                document
                    .querySelector("#all-trips-toggle")
                    .classList.remove("active");
                document
                    .querySelector("#upcoming-trips-toggle")
                    .classList.remove("active");
                document
                    .querySelector("#recent-trips-toggle")
                    .classList.add("active");
                document.querySelector("#all-trips").style.display = "none";
                document.querySelector("#upcoming").style.display = "none";
                document.querySelector("#recent").style.display = "flex";
            });

        allUserTrips.forEach(function (trip) {
            let tripsContainer = document.querySelector("#all-trips");
            let tripItem = document.createElement("li");
            tripItem.classList.add("trip");
            // creating the trip's image
            let tripImg = document.createElement("img");
            tripImg.setAttribute("src", "/dist/img/trip.png");
            tripItem.appendChild(tripImg);
            //create dest-serve container
            function createDestServ(trip) {
                let destServ = document.createElement("div");
                destServ.classList.add("dest-serv");
                let dest = document.createElement("h5");
                let busServ = document.createElement("h5");
                dest.textContent = trip.tripDest;
                busServ.textContent = trip.busService;
                destServ.appendChild(dest);
                destServ.appendChild(busServ);
                tripItem.appendChild(destServ);
            }
            createDestServ(trip);

            //create route container
            function createRouteInfo(trip) {
                let fromTerm = document.createElement("p");
                let destTerm = document.createElement("p");
                let busReg = document.createElement("p");
                let tickNo = document.createElement("p");
                fromTerm.classList.add("froterm");
                destTerm.classList.add("destterm");
                busReg.classList.add("busreg");
                tickNo.classList.add("tickno");
                busReg.textContent = trip.busReg;
                tickNo.textContent = trip.ticketNo;
                fromTerm.textContent = trip.fromTerminal;
                destTerm.textContent = trip.destTerminal;
                let route = document.createElement("div");
                route.classList.add("route");
                let routeData = document.createElement("p");
                let routeFrom = document.createElement("span");
                let routeVia = document.createElement("span");
                routeVia.classList.add("via");
                let routeTo = document.createElement("span");
                routeFrom.textContent = trip.tripFrom;
                routeVia.textContent = ` - ${trip.tripRoute} - `;
                routeTo.textContent = trip.tripDest;
                routeData.appendChild(routeFrom);
                routeData.appendChild(routeVia);
                routeData.appendChild(routeTo);
                route.appendChild(routeData);
                tripItem.appendChild(route);
                tripItem.appendChild(fromTerm);
                tripItem.appendChild(destTerm);
                tripItem.appendChild(busReg);
                tripItem.appendChild(tickNo);
            }
            createRouteInfo(trip);

            //create date-time container
            function createDateTimeInfo(trip) {
                let dateTime = document.createElement("div");
                dateTime.classList.add("date-time");
                let dateTimeContainer = document.createElement("h5");
                let timeContainer = document.createElement("small");
                timeContainer.textContent = trip.tripTime;
                dateTimeContainer.textContent = `${trip.tripDate} `;
                dateTimeContainer.appendChild(timeContainer);
                dateTime.appendChild(dateTimeContainer);
                tripItem.appendChild(dateTime);
            }
            createDateTimeInfo(trip);

            tripsContainer.appendChild(tripItem);
        });
        upcomingTrips.forEach(function (upcomingTrip) {
            let tripsContainer = document.querySelector("#upcoming");
            let tripItem = document.createElement("li");
            tripItem.classList.add("trip");
            // creating the trip's image
            let tripImg = document.createElement("img");
            tripImg.setAttribute("src", "/dist/img/trip.png");
            tripItem.appendChild(tripImg);
            //create dest-serve container
            function createDestServ(upcomingTrip) {
                let destServ = document.createElement("div");
                destServ.classList.add("dest-serv");
                let dest = document.createElement("h5");
                let busServ = document.createElement("h5");
                dest.textContent = upcomingTrip.tripDest;
                busServ.textContent = upcomingTrip.busService;
                destServ.appendChild(dest);
                destServ.appendChild(busServ);
                tripItem.appendChild(destServ);
            }
            createDestServ(upcomingTrip);

            //create route container
            function createRouteInfo(upcomingTrip) {
                let fromTerm = document.createElement("p");
                let destTerm = document.createElement("p");
                let busReg = document.createElement("p");
                let tickNo = document.createElement("p");
                fromTerm.classList.add("froterm");
                destTerm.classList.add("destterm");
                busReg.classList.add("busreg");
                tickNo.classList.add("tickno");
                busReg.textContent = upcomingTrip.busReg;
                tickNo.textContent = upcomingTrip.ticketNo;
                fromTerm.textContent = upcomingTrip.fromTerminal;
                destTerm.textContent = upcomingTrip.destTerminal;
                let route = document.createElement("div");
                route.classList.add("route");
                let routeData = document.createElement("p");
                let routeFrom = document.createElement("span");
                let routeVia = document.createElement("span");
                routeVia.classList.add("via");
                let routeTo = document.createElement("span");
                routeFrom.textContent = upcomingTrip.tripFrom;
                routeVia.textContent = ` - ${upcomingTrip.tripRoute} - `;
                routeTo.textContent = upcomingTrip.tripDest;
                routeData.appendChild(routeFrom);
                routeData.appendChild(routeVia);
                routeData.appendChild(routeTo);
                route.appendChild(routeData);
                tripItem.appendChild(route);
                tripItem.appendChild(fromTerm);
                tripItem.appendChild(destTerm);
                tripItem.appendChild(busReg);
                tripItem.appendChild(tickNo);
            }
            createRouteInfo(upcomingTrip);

            //create date-time container
            function createDateTimeInfo(upcomingTrip) {
                let dateTime = document.createElement("div");
                dateTime.classList.add("date-time");
                let dateTimeContainer = document.createElement("h5");
                let timeContainer = document.createElement("small");
                timeContainer.textContent = upcomingTrip.tripTime;
                dateTimeContainer.textContent = `${upcomingTrip.tripDate} `;
                dateTimeContainer.appendChild(timeContainer);
                dateTime.appendChild(dateTimeContainer);
                tripItem.appendChild(dateTime);
            }
            createDateTimeInfo(upcomingTrip);

            tripsContainer.appendChild(tripItem);
        });
        recentTrips.forEach(function (recentTrip) {
            let tripsContainer = document.querySelector("#recent");
            let tripItem = document.createElement("li");
            tripItem.classList.add("trip");
            // creating the trip's image
            let tripImg = document.createElement("img");
            tripImg.setAttribute("src", "/dist/img/trip.png");
            tripItem.appendChild(tripImg);
            //create dest-serve container
            function createDestServ(recentTrip) {
                let destServ = document.createElement("div");
                destServ.classList.add("dest-serv");
                let dest = document.createElement("h5");
                let busServ = document.createElement("h5");
                dest.textContent = recentTrip.tripDest;
                busServ.textContent = recentTrip.busService;
                destServ.appendChild(dest);
                destServ.appendChild(busServ);
                tripItem.appendChild(destServ);
            }
            createDestServ(recentTrip);

            //create route container
            function createRouteInfo(recentTrip) {
                let fromTerm = document.createElement("p");
                let destTerm = document.createElement("p");
                let busReg = document.createElement("p");
                let tickNo = document.createElement("p");
                fromTerm.classList.add("froterm");
                destTerm.classList.add("destterm");
                busReg.classList.add("busreg");
                tickNo.classList.add("tickno");
                busReg.textContent = recentTrip.busReg;
                tickNo.textContent = recentTrip.ticketNo;
                fromTerm.textContent = recentTrip.fromTerminal;
                destTerm.textContent = recentTrip.destTerminal;
                let route = document.createElement("div");
                route.classList.add("route");
                let routeData = document.createElement("p");
                let routeFrom = document.createElement("span");
                let routeVia = document.createElement("span");
                routeVia.classList.add("via");
                let routeTo = document.createElement("span");
                routeFrom.textContent = recentTrip.tripFrom;
                routeVia.textContent = ` - ${recentTrip.tripRoute} - `;
                routeTo.textContent = recentTrip.tripDest;
                routeData.appendChild(routeFrom);
                routeData.appendChild(routeVia);
                routeData.appendChild(routeTo);
                route.appendChild(routeData);
                tripItem.appendChild(route);
                tripItem.appendChild(fromTerm);
                tripItem.appendChild(destTerm);
                tripItem.appendChild(busReg);
                tripItem.appendChild(tickNo);
            }
            createRouteInfo(recentTrip);

            //create date-time container
            function createDateTimeInfo(recentTrip) {
                let dateTime = document.createElement("div");
                dateTime.classList.add("date-time");
                let dateTimeContainer = document.createElement("h5");
                let timeContainer = document.createElement("small");
                timeContainer.textContent = recentTrip.tripTime;
                dateTimeContainer.textContent = `${recentTrip.tripDate} `;
                dateTimeContainer.appendChild(timeContainer);
                dateTime.appendChild(dateTimeContainer);
                tripItem.appendChild(dateTime);
            }
            createDateTimeInfo(recentTrip);

            tripsContainer.appendChild(tripItem);
        });
    });
}

displayUserTrips(users);

let allTrips = document.querySelectorAll("#all-trips .trip");
allTrips.forEach(function (aTrip) {
    aTrip.addEventListener("click", function () {
        let tripItemData = this.children;
        //create and display corresponding ticket on the sidebar
        document.querySelector("#tick-prev").style.display = "block";
        let busFrom = tripItemData[2].children[0].children[0].textContent;
        let busDestination =
            tripItemData[2].children[0].children[2].textContent;
        let fromTerminal = `${tripItemData[3].textContent}, ${busFrom}`;
        let destTerminal = `${tripItemData[4].textContent}, ${busDestination}`;
        let busReg = tripItemData[5].textContent;
        let ticketNo = tripItemData[6].textContent;
        let boardPassQR = document.querySelector("#board-pass img");
        // insert data into the ticket container
        let ticketContainerItems = document.querySelector("#ticket").children;
        ticketContainerItems[0].children[0].children[1].textContent =
            document.querySelector("#user-data h5").textContent;
        ticketContainerItems[2].children[0].children[1].textContent =
            fromTerminal;
        ticketContainerItems[2].children[1].children[1].textContent =
            destTerminal;
        ticketContainerItems[2].children[2].children[1].textContent = ticketNo;
        ticketContainerItems[2].children[3].children[1].textContent = busReg;

        function generateBoardingQR() {
            let timeStamp = new Date();
            let qrTimeData = timeStamp.getTime();
            let boardPassQRData = `<<<<${
                document.querySelector("#user-data h5").textContent
            }<<<<${qrTimeData}<<<<${ticketNo}<<<<${fromTerminal}<${destTerminal}<<<<`;
            boardPassQR.setAttribute(
                "src",
                `https://api.qrserver.com/v1/create-qr-code/?data=${boardPassQRData}&amp;size=80x80`
            );
        }
        generateBoardingQR();
        let ticketDownloadLink = document.querySelector("#down-tick a");

        const ticketCanvas = document.getElementById("ticket");
        html2canvas(ticketCanvas, {
            scale: 3,
            useCORS: true,
        }).then(function (canvas) {
            ticketDownloadLink.setAttribute("href", canvas.toDataURL());
            ticketDownloadLink.setAttribute(
                "download",
                `${
                    document.querySelector("#user-data h5").textContent
                }_${ticketNo}.png`
            );
        });
    });
});

function displayCurrentDateTime() {
    let timeNow = new Date();
    let hourNow = timeNow.getHours();

    if (hourNow < 12) {
        let greeting = `Good Morning, <span class="highlight">${
            document.querySelector("#user-data h5").textContent.split(" ")[0]
        }</span>
			`;
        let greetingLine = "Have a great day ahead!";
        document.querySelector("#greeting h3").innerHTML = greeting;
        document.querySelector("#greeting p").textContent = greetingLine;
    } else if (hourNow >= 12 && hourNow < 16) {
        let greeting = `Good Afternoon, <span class="highlight">${
            document.querySelector("#user-data h5").textContent.split(" ")[0]
        }</span>
			`;
        let greetingLine = "I hope you are having an amazing day!";
        document.querySelector("#greeting h3").innerHTML = greeting;
        document.querySelector("#greeting p").textContent = greetingLine;
    } else {
        let greeting = `Good Evening, <span class="highlight">${
            document.querySelector("#user-data h5").textContent.split(" ")[0]
        }</span>`;
        let greetingLine = "I hope you had a fruitful day.";
        document.querySelector("#greeting h3").innerHTML = greeting;
        document.querySelector("#greeting p").textContent = greetingLine;
    }

    if (hourNow < 10) {
        hourNow = `0` + hourNow;
    }
    let minutesNow = timeNow.getMinutes();
    if (minutesNow < 10) {
        minutesNow = `0` + minutesNow;
    }

    let day;
    if (timeNow.getDay() == 0) {
        day = "Sunday";
    } else day = days[timeNow.getDay() - 1];
    document.querySelector("#date h3").textContent = `${hourNow}:${minutesNow}`;
    document.querySelector(
        "#date p"
    ).textContent = `${day}, ${timeNow.getDate()} ${
        months[timeNow.getUTCMonth()]
    }`;
}
setInterval(() => {
    displayCurrentDateTime();
}, 1000);

function openSearchTrips() {
    document.querySelector("#search input").focus();
    document.querySelector("#main-content section").style.display = "none";
    document.querySelector("#main-content #notifications").style.display =
        "none";
    document.querySelector("#main-content #messages").style.display = "none";
    document.querySelector("#main-content #settings").style.display = "none";
    document.querySelector("#results-container").style.display = "flex";
    document.querySelectorAll("#nav-items li").forEach((link) => {
        link.classList.remove("current");
    });
}

document
    .querySelector("#new-trip button")
    .addEventListener("click", openSearchTrips);
document
    .querySelector("#search input")
    .addEventListener("click", openSearchTrips);

document.querySelector("#search input").addEventListener("keyup", function () {
    let queryText = document.querySelector("#search input").value;
    document.querySelector("#search-results").innerHTML = "";
    let tripSearchResults = busServiceTrips.filter((filteredTrip) => {
        return (
            filteredTrip.servName
                .toLowerCase()
                .includes(queryText.toLowerCase()) ||
            filteredTrip.from.toLowerCase().includes(queryText.toLowerCase()) ||
            filteredTrip.to.toLowerCase().includes(queryText.toLowerCase()) ||
            filteredTrip.route.toLowerCase().includes(queryText.toLowerCase())
        );
    });

    if (tripSearchResults.length > 0) {
        document.querySelector("#results-container").style.justifyContent =
            "flex-start";
        document.querySelector("#results-container").style.alignItems =
            "flex-start";
        document.querySelector("#results-container").style.height = "100%";
        document.querySelector("#results-container img").style.display = "none";
        document.querySelector("#search-results").style.display = "flex";
        document.querySelectorAll(".trip-result");
    }
    if (tripSearchResults.length == 0 || queryText.length == 0) {
        document.querySelector("#results-container").style.justifyContent =
            "center";
        document.querySelector("#results-container").style.height = "70%";
        document.querySelector("#search-results").style.display = "none";
        document.querySelector("#results-container").style.alignItems =
            "center";
        document.querySelector("#results-container img").style.display =
            "block";
    }

    //displaying trips search results
    let tripResultsContainer = document.querySelector("#search-results");
    tripSearchResults.forEach((trip) => {
        let tripResultItem = document.createElement("li");
        let tripResultItemLogo = document.createElement("img");
        let tripResultItemDetailsContainer = document.createElement("div");
        let bookBtnOverlay = document.createElement("div");
        let bookOverlayButton = document.createElement("button");
        tripResultItem.classList.add("trip-result");
        bookBtnOverlay.classList.add("book-btn-overlay");
        bookOverlayButton.textContent = "Book Now";
        tripResultItemLogo.setAttribute("src", trip.servLogo);
        tripResultItemDetailsContainer.classList.add("trip-details");
        tripResultItemDetailsContainer.innerHTML = `<p>
										<span class="trip-details-title"
											>Bus Registration:</span
										>
										${trip.busReg}
									</p>
									<p>
										<span class="trip-details-title"
											>From:</span
										>
										${trip.from}
									</p>
									<p>
										<span class="trip-details-title"
											>To:</span
										>
										${trip.to}
									</p>
									<p>
										<span class="trip-details-title"
											>Via:</span
										>
										${trip.route}
									</p>
									<p>
										<span class="trip-details-title"
											>Date/Time:</span
										>
										${trip.date}, ${trip.time}
									</p>`;

        bookBtnOverlay.appendChild(bookOverlayButton);
        tripResultItem.appendChild(tripResultItemLogo);
        tripResultItem.appendChild(tripResultItemDetailsContainer);
        tripResultItem.appendChild(bookBtnOverlay);
        tripResultsContainer.appendChild(tripResultItem);

        return tripResultsContainer;
    });
});

document
    .querySelector("#nav-items #home-link")
    .addEventListener("click", () => {
        document.querySelector("#results-container").style.display = "none";
        document.querySelector("#main-content section").style.display = "block";
        document.querySelector("#main-content #notifications").style.display =
            "none";
        document.querySelector("#main-content #messages").style.display =
            "none";
        document.querySelector("#main-content #settings").style.display =
            "none";
        document
            .querySelector("#nav-items #home-link")
            .classList.add("current");
        document
            .querySelector("#nav-items #noti-link")
            .classList.remove("current");
        document
            .querySelector("#nav-items #sett-link")
            .classList.remove("current");
        document
            .querySelector("#nav-items #msgs-link")
            .classList.remove("current");
    });
document
    .querySelector("#nav-items #noti-link")
    .addEventListener("click", () => {
        document
            .querySelector("#nav-items #home-link")
            .classList.remove("current");
        document
            .querySelector("#nav-items #msgs-link")
            .classList.remove("current");
        document
            .querySelector("#nav-items #sett-link")
            .classList.remove("current");
        document
            .querySelector("#nav-items #noti-link")
            .classList.add("current");
        document.querySelector("#results-container").style.display = "none";
        document.querySelector("#noti-link .noti-alert").style.display = "none";
        document.querySelector("#main-content #notifications").style.display =
            "block";
        document.querySelector("#main-content section").style.display = "none";
        document.querySelector("#main-content #messages").style.display =
            "none";
        document.querySelector("#main-content #settings").style.display =
            "none";
    });
document
    .querySelector("#nav-items #msgs-link")
    .addEventListener("click", () => {
        document
            .querySelector("#nav-items #home-link")
            .classList.remove("current");
        document
            .querySelector("#nav-items #noti-link")
            .classList.remove("current");
        document
            .querySelector("#nav-items #sett-link")
            .classList.remove("current");
        document
            .querySelector("#nav-items #msgs-link")
            .classList.add("current");
        document.querySelector("#results-container").style.display = "none";
        document.querySelector("#main-content #notifications").style.display =
            "none";
        document.querySelector("#main-content section").style.display = "none";
        document.querySelector("#main-content #messages").style.display =
            "block";
        document.querySelector("#main-content #settings").style.display =
            "none";
    });
document
    .querySelector("#nav-items #sett-link")
    .addEventListener("click", () => {
        document
            .querySelector("#nav-items #home-link")
            .classList.remove("current");
        document
            .querySelector("#nav-items #noti-link")
            .classList.remove("current");
        document
            .querySelector("#nav-items #msgs-link")
            .classList.remove("current");
        document
            .querySelector("#nav-items #sett-link")
            .classList.add("current");
        document.querySelector("#results-container").style.display = "none";
        document.querySelector("#main-content #settings").style.display =
            "block";
        document.querySelector("#main-content section").style.display = "none";
        document.querySelector("#main-content #notifications").style.display =
            "none";
        document.querySelector("#main-content #messages").style.display =
            "none";
    });
