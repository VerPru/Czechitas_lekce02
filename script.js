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

//ahoj