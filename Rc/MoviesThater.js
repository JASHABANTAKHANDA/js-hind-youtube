
let jsonString = {
    "TheatreName": "Cineplex",
    "Elite":[
        [
            {"SeatNo": "A1", "Status": "Available", "Price": 750},
            {"SeatNo": "A2", "Status": "Booked", "Price": 750},
            {"SeatNo": "A3", "Status": "Booked", "Price": 750},
            {"SeatNo": "A4", "Status": "Available", "Price": 750},
            {"SeatNo": "A5", "Status": "Booked", "Price": 750},
        ],
        [
            {"SeatNo": "B1", "Status": "Booked", "Price": 750},
            {"SeatNo": "B2", "Status": "Available", "Price": 750},
            {"SeatNo": "B3", "Status": "Booked", "Price": 750},
            {"SeatNo": "B4", "Status": "Available", "Price": 750},
            {"SeatNo": "B5", "Status": "Booked", "Price": 750},

        ]
    ],
    "Normal":[
        [
            {"SeatNo": "C1", "Status": "Available", "Price": 450},
            {"SeatNo": "C2", "Status": "Booked", "Price": 450},
            {"SeatNo": "C3", "Status": "Booked", "Price": 450},
            {"SeatNo": "C4", "Status": "Available", "Price": 450},
            {"SeatNo": "C5", "Status": "Booked", "Price": 450},
        ],
        [
            {"SeatNo": "D1", "Status": "Booked", "Price": 450},
            {"SeatNo": "D2", "Status": "Available", "Price": 450},
            {"SeatNo": "D3", "Status": "Booked", "Price": 450},
            {"SeatNo": "D4", "Status": "Available", "Price": 450},
            {"SeatNo": "D5", "Status": "Booked", "Price": 450},

        ]
    ],
    "Economy":[
        [
            {"SeatNo": "E1", "Status": "Available", "Price": 250},
            {"SeatNo": "E2", "Status": "Booked", "Price": 250},
            {"SeatNo": "E3", "Status": "Booked", "Price": 250},
            {"SeatNo": "E4", "Status": "Available", "Price": 250},
            {"SeatNo": "E5", "Status": "Booked", "Price": 250},
        ],
        [
            {"SeatNo": "E1", "Status": "Booked", "Price": 250},
            {"SeatNo": "E2", "Status": "Available", "Price": 250},
            {"SeatNo": "E3", "Status": "Booked", "Price": 250},
            {"SeatNo": "E4", "Status": "Available", "Price": 250},
            {"SeatNo": "E5", "Status": "Booked", "Price": 250},

        ]
    ]
}

// Book 2 seats in Elite category if available
// Book 3 seats in Normal category if available
// Book 4 seats in Economy category if available
// Calculate to the total amount to be paid for the booked seats

// function to book seats
function bookSeats(category, count) {
    let bookedSeats = [];
    let total = 0;

    for (let row of jsonString[category]) {
        for (let seat of row) {
            if (seat.Status === "Available" && bookedSeats.length < count) {
                seat.Status = "Booked"; // mark booked
                bookedSeats.push(seat.SeatNo);
                total += seat.Price;
            }
        }
    }

    return { bookedSeats, total };
}

// Book seats and calculate total
let eliteBooking = bookSeats("Elite", 2);
let normalBooking = bookSeats("Normal", 3);
let economyBooking = bookSeats("Economy", 4);

let totalAmount = eliteBooking.total + normalBooking.total + economyBooking.total;

// Display result
console.log("Elite Seats Booked:", eliteBooking.bookedSeats);
console.log("Normal Seats Booked:", normalBooking.bookedSeats);
console.log("Economy Seats Booked:", economyBooking.bookedSeats);
console.log("Total Amount to Pay:", totalAmount);

