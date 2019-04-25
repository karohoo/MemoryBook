var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('muistot.db');

db.serialize(function() {

	let sql = "CREATE TABLE muisto (" + "id integer PRIMARY KEY NOT NULL, " + "ika text NOT NULL, " + "paivamaara text NOT NULL, " + "tilanne text, " + "sanonta text NOT NULL)";

	db.run(sql, function(err) {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Taulu tehtiin");
	});

	sql = "INSERT INTO `muisto` (`id`, `ika`, `paivamaara`, `tilanne`, `sanonta`) "+
	" VALUES (1, '4 vuotta', '2019-02-21', 'Menossa nukkumaan', 'Syökö siat sieniä? Kärpäset syö ainakin kärpässieniä.')";
	db.run(sql, function(err) {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	sql = "INSERT INTO `muisto` (`id`, `ika`, `paivamaara`, `tilanne`, `sanonta`) "+
	" VALUES (2, '4 vuotta', '2019-01-27', 'Kantoi siskoa sylissä', 'Nyt sisko on kyllä muuttunut aika painavaksi, kun se on 2-vuotias. Nyt se on kokonainen.')";
	db.run(sql, function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	sql = "INSERT INTO `muisto` (`id`, `ika`, `paivamaara`, `tilanne`, `sanonta`) "+
	" VALUES (3, '4 vuotta', '2019-03-24', 'Kova hikka', 'Meinasi lentää sydän ulos, sitten ei olisi ollut enää rakkautta.')";
	db.run(sql, function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	db.each("SELECT id, ika FROM muisto", function(err, row) {
		if (err) {
		  return console.log(err.message);
		}
		console.log(row.id + ", " + row.ika);
	});

	db.close();
});
