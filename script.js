class Note {
  constructor(name, year, country, status, image, rating = 3) {
    this.name = name;
    this.year = year;
    this.country = country;
    this.status = status;
    this.image = image;
    //this.rating = Number(rating);
  }
}


const notes = [
  new Note(
    "HKD 1",
    1935,
    "Hong Kong, SAR",
    "In Collection",
    "assets/HKD1_1935.jpg",
    //5
  ),

  new Note(
    "HKD 10",
    2013,
    "Hong Kong, SAR",
    "In Collection",
    "assets/HKD10_2013.jpg",
    //4
  ),

  new Note(
    "RMB 100",
    2000,
    "People's Republic of China",
    "Wishlist",
    "assets/CNY100_2000.jpg"
  ),

  new Note(
    "EGP 100",
    1994,
    "Egypt",
    "In Collection",
    "assets/EGP100_1994.jpg",
    //4
  ),

  new Note(
    "EGP 5",
    1990,
    "Egypt",
    "In Collection",
    "assets/EGP5_1990.jpg",
    //2
  ),

  new Note(
    "EGP 10",
    2003,
    "Egypt",
    "In Collection",
    "assets/EGP10_2003.jpeg",
    //5
  ),

  new Note(
    "EGP 20",
    1979,
    "Egypt",
    "Wishlist",
    "assets/EGP20_1979.jpg",
    //5
  ),

  new Note(
    "EGP 50",
    1993,
    "Egypt",
    "In Collection",
    "assets/EGP50_1993.jpg",
    //4
  ),

  new Note(
    "ZAR 20",
    1962,
    "South Africa",
    "In Collection",
    "assets/ZAR20_1962.jpg",
    //5
  ),

  new Note(
    "ZAR 5",
    1966,
    "South Africa",
    "In Collection",
    "assets/ZAR5_1966.jpg",
   //1
  ),

  new Note(
    "ZAR 50",
    1992,
    "South Africa",
    "Wishlist",
    "assets/ZAR50_1992.jpg",
    //4
  ),

  new Note(
    "ZAR 2",
    1978,
    "South Africa",
    "In Collection",
    "assets/ZAR2_1978.jpeg"
  ),

  new Note(
    "ZAR 100",
    1994,
    "South Africa",
    "In Collection",
    "assets/ZAR100_1994.jpg",
    //2
  ),

  new Note(
    "ZAR 200",
    2013,
    "South Africa",
    "In Collection",
    "assets/ZAR200_2013.jpg",
    //4
  ),

  new Note(
    "USD 1",
    1935,
    "United States",
    "Wishlist",
    "assets/USD1_1935.jpg",
    //5
  ),

  new Note(
    "USD 5",
    1929,
    "United States",
    "In Collection",
    "assets/USD5_1929.jpg",
    //2
  ),

  new Note(
    "USD 10",
    1963,
    "United States",
    "In Collection",
    "assets/USD10_1963.jpg"
  ),

  new Note(
    "USD 20",
    1969,
    "United States",
    "In Collection",
    "assets/USD20_1969.jpg",
    //4
  ),

  new Note(
    "USD 50",
    1974,
    "United States",
    "In Collection",
    "assets/USD50_1974.jpg",
    //2
  ),

  new Note(
    "USD 100",
    1996,
    "United States",
    "In Collection",
    "assets/USD100_1996.jpeg"
  ),

  new Note(
    "FRA 5",
    1966,
    "France",
    "In Collection",
    "assets/FRA5_1966.jpg",
    //2
  ),

  new Note(
    "FRA 10",
    1968,
    "France",
    "In Collection",
    "assets/FRA10_1968.jpg",
    //1
  ),

  new Note(
    "FRA 50",
    1974,
    "France",
    "In Collection",
    "assets/FRA50_1974.jpg",
    //5
  ),

  new Note(
    "FRA 100",
    1969,
    "France",
    "Wishlist",
    "assets/FRA100_1969.jpg",
    //5
  ),

  new Note(
    "FRA 200",
    1990,
    "France",
    "In Collection",
    "assets/FRA200_1990.jpg"
  ),

  new Note(
    "FRA 500",
    1993,
    "France",
    "In Collection",
    "assets/FRA500_1993.jpg",
    //2
  ),

  new Note(
    "GBP 5",
    1962,
    "UK",
    "In Collection",
    "assets/GBP5_1962.jpeg"
  ),

  new Note(
    "GBP 1",
    1963,
    "UK",
    "Wishlist",
    "assets/GBP1_1963.jpg"
  ),

  new Note(
    "GBP 10",
    2000,
    "UK",
    "In Collection",
    "assets/GBP10_2000.jpg"
  ),

  new Note(
    "GBP 20",
    2003,
    "UK",
    "In Collection",
    "assets/GBP20_2003.jpg",
    //5
  ),

  new Note(
    "GBP 50",
    1979,
    "UK",
    "In Collection",
    "assets/GBP50_1979.jpg",
    //4
  ),

  new Note(
    "ESP 2,000",
    1992,
    "Spain",
    "In Collection",
    "assets/ESP2000_1992.jpeg",
    //2
  ),

  new Note(
    "ESP 200",
    1978,
    "Spain",
    "Wishlist",
    "assets/ESP200_1978.jpeg",
    //1
  ),

  new Note(
    "ESP 500",
    1979,
    "Spain",
    "In Collection",
    "assets/ESP500_1979.jpeg"
  ),

  new Note(
    "ESP 1,000",
    1979,
    "Spain",
    "In Collection",
    "assets/ESP1000_1979.jpeg"
  ),

  new Note(
    "INR 5",
    1929,
    "India",
    "Wishlist",
    "assets/INR5_1929.jpg"
  ),

  new Note(
    "INR 10",
    1968,
    "India",
    "In Collection",
    "assets/INR10_1968.jpg"
  ),

  new Note(
    "INR 20",
    1970,
    "India",
    "In Collection",
    "assets/INR20_1970.jpg"
  ),

  new Note(
    "INR 100",
    1996,
    "India",
    "In Collection",
    "assets/INR100_1996.jpg",
    //5
  ),

  new Note(
    "THB 10",
    1970,
    "Thailand",
    "In Collection",
    "assets/THB10_1970.jpg",
    //5
  ),

  new Note(
    "THB 20",
    1981,
    "Thailand",
    "Wishlist",
    "assets/THB20_1981.jpg"
  ),

  new Note(
    "THB 500",
    1992,
    "Thailand",
    "In Collection",
    "assets/THB500_1992.jpg",
    //2
  ),

  new Note(
    "THB 1,000",
    2000,
    "Thailand",
    "In Collection",
    "assets/THB1000_2000.jpg"
  ),

  new Note(
    "THB 1,000",
    2018,
    "Thailand",
    "In Collection",
    "assets/THB1000_2018.jpg",
    //5
  ),

  new Note(
    "RM 5",
    1968,
    "Malaysia",
    "In Collection",
    "assets/RM5_1968.jpg",
    //5
  ),

  new Note(
    "RM 1",
    1967,
    "Malaysia",
    "Wishlist",
    "assets/RM1_1967.jpeg",
    //5
  ),

  new Note(
    "RM 10",
    1983,
    "Malaysia",
    "In Collection",
    "assets/RM10_1983.jpeg",
    //4
  ),

  new Note(
    "RM 20",
    1989,
    "Malaysia",
    "In Collection",
    "assets/RM20_1989.jpg"
  ),

  new Note(
    "RM 50",
    1998,
    "Malaysia",
    "In Collection",
    "assets/RM50_1998.jpeg"
  ),

  new Note(
    "RM 2",
    1996,
    "Malaysia",
    "In Collection",
    "assets/RM2_1996.jpeg",
    //2
  ),

  new Note(
    "RM 100",
    1995,
    "Malaysia",
    "In Collection",
    "assets/RM100_1995.jpg"
  ),

  new Note(
    "RM 500",
    1982,
    "Malaysia",
    "In Collection",
    "assets/RM500_1982.jpg"
  ),

  new Note(
    "RM 1,000",
    1995,
    "Malaysia",
    "In Collection",
    "assets/RM1000_1995.jpg"
  ),
];


const noteList = document.getElementById("note-list");

const collectionCount = document.getElementById("collection-count");

const displayCount = document.getElementById("display-count");

const noteForm = document.getElementById("noteForm");



function displayNotes(notesToDisplay) {

  noteList.innerHTML = "";
  collectionCount.textContent = notes.length;
  displayCount.textContent = `${notesToDisplay.length} notes displayed`;

  if (notesToDisplay.length === 0) {
    noteList.innerHTML = `
      <li class="empty-message">
        No banknotes found.
      </li>
    `;
    return;
  }

  notesToDisplay.forEach(function(note) {

    let statusClass = "";

    if (note.status === "In Collection") {
      statusClass = "status-in";
    } else {
      statusClass = "status-wishlist";
    }

    //const ratingStars =
  //"★".repeat(note.rating) +
  //"☆".repeat(5 - note.rating);

    noteList.innerHTML += `
      <li class="note-card">

        <div class="note-image-container">
          <img
            src="${note.image}"
            alt="${note.name}"
            class="note-image"
          >
        </div>

        <div class="note-details">

          <h3 class="note-title">${note.name}</h3>

          <div class="note-information">
            <span>Year</span>
            <span>${note.year}</span>
          </div>

          <div class="note-information">
            <span>Country</span>
            <span>${note.country}</span>
          </div>

          <div class="note-information">
            <span>Status</span>
            <span class="status ${statusClass}">
              ${note.status}
            </span>
          </div>
        </div>
      </li>
    `;
  });

}


function addNote(event) {

  event.preventDefault();

  const name = document.getElementById("noteName").value.trim();
  const year = Number(document.getElementById("noteYear").value);
  const country = document.getElementById("noteCountry").value.trim();
  const status = document.getElementById("collectionStatus").value;
  const imageName = document.getElementById("noteImage").value.trim();
  const rating = Number(document.getElementById("noteRating").value);

  if (!Number.isInteger(year) || year < 1000 || year > 9999) {
    alert("Please enter a valid four-digit year.");
    return;
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    alert("Please select a rating between 1 and 5.");
    return;
  }

  const imagePath = `assets/${imageName}`;
  const newNote = new Note(
    name,
    year,
    country,
    status,
    imagePath,
    rating,
  );

  notes.push(newNote);
  noteForm.reset();

  filterNotes();
}

noteForm.addEventListener("submit", addNote);

function filterNotes() {

  const nameValue = document
    .getElementById("searchName")
    .value
    .toLowerCase()
    .trim();

  const yearValue = document.getElementById("filterYear").value;

  const countryValue = document
    .getElementById("filterCountry")
    .value
    .toLowerCase()
    .trim();

  const statusValue = document.getElementById("filterStatus").value;

  //const ratingValue = document.getElementById("filterRating").value;

  const filteredNotes = notes.filter(function(note) {

    const matchesName = note.name
      .toLowerCase()
      .includes(nameValue);

    const matchesYear =
      yearValue === "" || note.year === Number(yearValue);

    const matchesCountry = note.country
      .toLowerCase()
      .includes(countryValue);

    const matchesStatus =
      statusValue === "" || note.status === statusValue;

    //const matchesRating =
      //ratingValue === "" || note.rating === Number(ratingValue);
    
    return (
      matchesName &&
      matchesYear &&
      matchesCountry &&
      matchesStatus
    );
  });

  sortNotes(filteredNotes);
}

function sortNotes(notesToSort) {

  const sortValue = document.getElementById("sortNotes").value;
  const sortedNotes = [...notesToSort];

  switch (sortValue) {

    case "name-asc":
      sortedNotes.sort(function(a, b) {
        return a.name.localeCompare(b.name);
      });
      break;

    case "name-desc":
      sortedNotes.sort(function(a, b) {
        return b.name.localeCompare(a.name);
      });
      break;

    case "year-asc":
      sortedNotes.sort(function(a, b) {
        return a.year - b.year;
      });
      break;

    case "year-desc":
      sortedNotes.sort(function(a, b) {
        return b.year - a.year;
      });
      break;

    case "country-asc":
      sortedNotes.sort(function(a, b) {
        return a.country.localeCompare(b.country);
      });
      break;

    case "country-desc":
      sortedNotes.sort(function(a, b) {
        return b.country.localeCompare(a.country);
      });
      break;

  }

  displayNotes(sortedNotes);

}


document
  .getElementById("searchName")
  .addEventListener("input", filterNotes);

document
  .getElementById("filterYear")
  .addEventListener("input", filterNotes);

document
  .getElementById("filterCountry")
  .addEventListener("input", filterNotes);

document
  .getElementById("filterStatus")
  .addEventListener("change", filterNotes);

//document
  //.getElementById("filterRating")
  //.addEventListener("change", filterNotes);

document
  .getElementById("sortNotes")
  .addEventListener("change", filterNotes);

filterNotes();


//<div class="note-information">
//<span>Rating</span>
//<span class="note-rating" aria-label="Rating ${note.rating} out of 5">${ratingStars}

//<span class="rating-number">${note.rating}/5</span>
//</span>
//</div>