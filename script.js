document.body.innerHTML = "<h2>Lekce 02 - Příjem divadla</h2>"

document.body.innerHTML += "Jeden lístek do divadla Pěst na oko stojí 12 euro. Spočítejte měsíční příjem divadla ze vstupného, přichází-li průměrně 174 návštěvníků na jedno představení a divadlo hraje 15 představení měsíčně. Uložte výsledek do proměnné prijem. Hodnotu proměnné prijem vypište do stránky. Divadlo se rozhodlo prodávat studentské vstupné ve výši 65 % plného vstupného. Jak se změní měsíční příjem divadla pokud víme, že 40 % návštěvníků jsou studenti? Vypište do stránky i příjem divadla se započítanou slevou pro studenty."

let listek = 12
let pocetNavstevniku = 174
let pocetPredstaveni = 15
const prijem = listek*pocetNavstevniku*pocetPredstaveni

document.body.innerHTML += "<h3>Hodnota proměnné příjem</h3>"
document.body.innerHTML += "<p>" + "Měsíční příjem bez slev: " + prijem + " euro" + "</p>"

let procentoStudentu = 0.4
let slevaStudenti = 0.65

let prijemStudenti = pocetNavstevniku*procentoStudentu*listek*slevaStudenti*pocetPredstaveni
let prijemNestudenti = pocetNavstevniku* (1-procentoStudentu) * listek * pocetPredstaveni

let prijemSeSlevou = prijemStudenti + prijemNestudenti
document.body.innerHTML += "<p>" + "Měsíční příjem se slevou: " + prijemSeSlevou + " euro" + "</p>"


document.body.innerHTML += "<h2>Lekce 02 - Házení kostkou</h2>"

document.body.innerHTML += "Vymyslete, jak použít funkci Math.random a různé zaokrouhlovací funkce probírané v této lekci k simulování hodu klasickou šestistěnnou kostkou. S použitím vhodných funkcí sestavte výraz, který vygeneruje náhodné celé číslo mezi 1 a 6. Zamyslete se nad tím, zda vámi vytvořený výraz generuje všechna čísla skutečně se stejnou pravděpodobností. Vemte v úvahu, že funkce Math.random generuje náhodná čísla mezi 0 (včetně) a 1 (vyjma). Je tedy malinká pravěpodobnost, že občas padne přesně číslo 0. Naopak číslo 1 padnout nemůže."

let hodKostkou = Math.floor(Math.random() * 6) + 1;

/*	1.	Math.random() generuje náhodné desetinné číslo mezi 0 (včetně) a 1 (mimo).
	2.	Math.random() * 6 rozšíří rozsah na čísla mezi 0 a 5.9999… .
	3.	Math.floor() zaokrouhluje výsledek dolů, čímž získáme celé číslo v rozsahu 0 až 5.
	4.	Přidáním + 1 posuneme rozsah výsledků na 1 až 6, což odpovídá hodu šestihrannou kostkou.
*/

document.body.innerHTML += "<p>" + "Hod kostkou: " + hodKostkou + "</p>"
