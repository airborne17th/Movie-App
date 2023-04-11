
// Settings for search by title
let settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://moviesdatabase.p.rapidapi.com/titles/search/title/#",
    "method": "GET",
	"headers": {
		"X-RapidAPI-Key": "e30a340171mshc1787ffa9a27599p1fe4adjsn017dcf68af30",
		"X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
	}
};
// Settings for search by keyword
let settings1 = {
	"async": true,
	"crossDomain": true,
	"url": "https://moviesdatabase.p.rapidapi.com/titles/search/keyword/words?titleType=movie",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "e30a340171mshc1787ffa9a27599p1fe4adjsn017dcf68af30",
		"X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
	}
};

// Get the current year using jQuery
let currentYear = new Date().getFullYear();
// Get the current month using jQuery
let currentMonth = new Date().getMonth() + 1;

$("#mtitle-submit").click(function searchByTitle(){
    let input = $("#mtitle-input").val();
    settings.url = "https://moviesdatabase.p.rapidapi.com/titles/search/title/" + input + "?exact=false&titleType=movie";
    $.ajax(settings).done(function (response) {
        console.log(response);
        resetValues();
        if(response.entries > 0){
        if(response.results[0].titleText != null){
            $("#m-title-result1").text(response.results[0].titleText.text);
        }
        if(response.results[0].titleText != null){
            $("#m-title-result2").text(response.results[1].titleText.text);
        }
        if(response.results[0].titleText != null){
            $("#m-title-result3").text(response.results[2].titleText.text);
        }
        if(response.results[0].releaseYear != null){
            $("#m-release-year1").text(response.results[0].releaseYear.year);
        }
        if(response.results[1].releaseYear != null){
            $("#m-release-year2").text(response.results[1].releaseYear.year);
        }
        if(response.results[2].releaseYear != null){
            $("#m-release-year3").text(response.results[2].releaseYear.year);
        }
        if(response.results[0].primaryImage != null){
            $("#m-title-img1").attr("src", response.results[0].primaryImage.url);
        }
        if(response.results[1].primaryImage != null){
            $("#m-title-img2").attr("src", response.results[1].primaryImage.url);
        }
        if(response.results[2].primaryImage != null){
            $("#m-title-img2").attr("src", response.results[2].primaryImage.url);
        }
        } else {
            alert("Sorry! No Results Found.");
        }
    });    
});

const settings2 = {
	"async": true,
	"crossDomain": true,
	"url": "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?titleType=movie&year=2023",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "e30a340171mshc1787ffa9a27599p1fe4adjsn017dcf68af30",
		"X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
	}
};

$("#mkeyword-submit").click(function searchByKeyword(){
    let input = $("#mkeyword-input").val();
    settings1.url = "https://moviesdatabase.p.rapidapi.com/titles/search/keyword/" + input + "?titleType=movie";
    $.ajax(settings1).done((response) => {
        console.log(response);
        resetValues();
        if(response.entries > 0){
        if (response.results[0].titleText != null) {
            $("#m-keyword-result1").text(response.results[0].titleText.text);
        }
        if (response.results[1].titleText != null) {
            $("#m-keyword-result2").text(response.results[1].titleText.text);
        }
        if (response.results[2].titleText != null) {
            $("#m-keyword-result3").text(response.results[2].titleText.text);
        }
        if (response.results[0].releaseYear != null) {
            $("#m-release-year4").text(response.results[0].releaseYear.year);
        }
        if (response.results[1].releaseYear != null) {
            $("#m-release-year5").text(response.results[1].releaseYear.year);
        }
        if (response.results[2].releaseYear != null) {
            $("#m-release-year6").text(response.results[2].releaseYear.year);
        }
        if (response.results[0].primaryImage != null) {
            $("#m-title-img4").attr("src", response.results[0].primaryImage.url);
        }
        if (response.results[1].primaryImage != null) {
            $("#m-title-img5").attr("src", response.results[1].primaryImage.url);
        }
        if (response.results[2].primaryImage != null) {
            $("#m-title-img6").attr("src", response.results[2].primaryImage.url);
        }
        } else {
            alert("Sorry! No Results Found.");
        }
    });    
});

function resetValues(){
    $("#m-title-result1").text("");
    $("#m-title-result2").text("");
    $("#m-title-result3").text("");
    $("#m-release-year1").text("");
    $("#m-release-year2").text("");
    $("#m-release-year3").text("");
    
    $("#m-keyword-result1").text("");
    $("#m-keyword-result2").text("");
    $("#m-keyword-result3").text("");
    $("#m-release-year4").text("");
    $("#m-release-year5").text("");
    $("#m-release-year6").text("");
    
    $("#m-title-img1").attr("src", "../img/movie-1.png");
    $("#m-title-img2").attr("src", "../img/movie-1.png");
    $("#m-title-img3").attr("src", "../img/movie-1.png");
    $("#m-title-img4").attr("src", "../img/movie-1.png");
    $("#m-title-img5").attr("src", "../img/movie-1.png");
    $("#m-title-img6").attr("src", "../img/movie-1.png");
}

function upcomingMoviesFetch(){
    if(currentMonth >= 11){
        settings2.url = "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?titleType=movie&year=" + (currentYear + 1);
    } else{
        settings2.url = "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?titleType=movie&year=" + currentYear;
    }
   
    $.ajax(settings2).done(function (response) {
        $("#u-title-result1").text(response.results[0].titleText.text);
        $("#u-title-result2").text(response.results[1].titleText.text);
        $("#u-title-result3").text(response.results[2].titleText.text);
        $("#u-title-result4").text(response.results[3].titleText.text);
        $("#u-title-result5").text(response.results[4].titleText.text);
        $("#u-release-year1").text(response.results[0].releaseYear.year);
        $("#u-release-year2").text(response.results[1].releaseYear.year);
        $("#u-release-year3").text(response.results[2].releaseYear.year);
        $("#u-release-year4").text(response.results[3].releaseYear.year);
        $("#u-release-year5").text(response.results[4].releaseYear.year);
        if (response.results[0].primaryImage != null) {
        $("#u-title-img1").attr("src", response.results[0].primaryImage.url);
        }
        if (response.results[1].primaryImage != null) {
        $("#u-title-img2").attr("src", response.results[1].primaryImage.url);
        }
        if (response.results[2].primaryImage != null) {
        $("#u-title-img3").attr("src", response.results[2].primaryImage.url);
        }
        if (response.results[3].primaryImage != null) {
        $("#u-title-img4").attr("src", response.results[3].primaryImage.url);
        }
        if (response.results[5].primaryImage != null) {
        $("#u-title-img5").attr("src", response.results[4].primaryImage.url);
        }
    });
}