/**
 * Created by a619678 on 20. 3. 2017.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import {Feed} from "../sport/model/Feed.model";

@Injectable()
export class DemoService {

  private firstCommentHeader = "Klasické tipovanie (1 X 2, kombinované stávky, dvojtipy)";
  private firstCommentType = `
  Hneď na začiatku by si mal každý tipujúci určiť vlastné pravidlá, pretože sám vie,
  čo sa mu už v minulosti osvedčilo alebo to počul od iných a musí si určiť vlastnú hranicu sumy, ktorú je ochotný staviť a taktiež hranicu rizika,
  po ktorú je schopný ísť.
  Zápasy s nízkym kurzom ako napr. 1,05 alebo 1,15 len minimálne zvyšujú výhru, preto sa na takéto kurzy radšej neodporúča staviť.
  Lepšie je, ak si na jeden tiket stavíte max. 2 - 5 zápasov, nie viac.
  Určite poznáte ľudí, ktorí si stavia aj 12 zápasov, a potom sú sklamaní, že im nevyšiel tip na 1, 2 či 3 zápasy.
  Odporúča sa radšej staviť si na menej zápasov a zbytočne neriskovať, prípadne rozdeliť viac tipovaných zápasov po 2-3 na každom tikete.
  Ďalšou dôležitou radou je to, aby stávkujúci tipoval radšej za väčšie sumy,
  čomu však bezprostredne musí predchádzať naštudovanie si zápasov a mužstva a vybrať si čo najlepšiu kurzovú ponuku a vsadenie len na vybraté zápasy.
  Veľký pozor si treba dávať najmä čo sa týka tipov na víťazstvo hostí (2).
  Je veľmi dobré priebežne sledovať mužstvo a zaznamenávať, či víťazí na súperovej pôde alebo je jeho súper v domácom prostredí málokedy zdolateľný.
  Odporúča sa stávku radšej poistiť  na dvojtip (X2) - hlavne v kombinácii s ďalšími zápasmi na jednom tikete.
  Ďalším rizikom môže byť tipovanie výsledkov pohárových súťaží. Veľakrát sa stane, že papierový favorit zaváha a prehrá so súperom,
  ktorý je v nižšej lige a preukázateľne slabší.
  Preto sa takéto zápasy veľmi ani neodporúča tipovať. Niekedy lepšie mužstvo takýto zápas aj vypustí a do základnej zostavy zaradí hráčov,
  ktorí sú v ligových zápasoch len na lavičke a dobrých hráčov klub šetrí.
  Najvýhodnejšie je tipovať mužstvá, ktoré poznáte a o ktorých viete čo najviac informácií.
  Tipovanie naslepo nesie veľké riziko. Podstatné je sledovanie športových stránok, oboznamovanie sa s aktuálnym stavom mužstva,
  tabuľkovým umiestnením, bilanciou zápasov s daným súperom a samozrejme aj získavanie informácií o hernej pohode hráčov či zranených,
  ktorí nebudú v aktuálnom zápasoch k dispozícii.
  No a na záver ešte jedna rada. Netreba vždy tipovať podľa kurzov.
  Niekedy je kurz príliš vysoký a to nás v konečnom rozhodnutí môže ovplyvniť a zľakneme sa staviť tak, ako sme chceli.
  Preto si radšej najprv pripravte svoje stávky a až potom pozrite kurzy.`;

  private secondCommentHeader = "Sólo stávky (resp. single bet)";
  private secondCommentType = `Ide o systém tipovania, pri ktorom sa nekombinujú zápasy. 
Princíp je taký, že čím menej zápasov tipujte na jednom tikete, tým je vyššia šanca výhry a následného zisku. 
Ide o tipovanie každého vybraného zápasu na jednom tikete samostatne a navyše vždy za rovnakú sumu. 
Odporúča sa kombinovať tento systém s vyhľadaním najvyššieho kurzu v rôznych stávkových kanceláriách.`;

  private thirdCommentHeader = "Stávky na hodnotné vysoké kurzy (resp. value bet)";
  private thirdCommentType = `
Niekedy sa stáva, že stávkové kancelárie nerozložia kurzy správne a niektorý kurz zostane nadhodnotený.
 Pri tejto metóde ide aj o hľadanie týchto chýb stávkových kancelárií. 
Nevyhnutné je preto porovnávať kurzy stávkových spoločností pri rovnakej udalosti a vybrať si ten, ktorý je najvyšší a teda má aj hodnotný kurz.
 Ide o menej náročný spôsob, pri ktorom sa môžete rýchlo rozhodovať a za vložený vklad vyhrať čo najviac.
 Väčšinou sa touto formou tipuje iba jeden zápas na tiket.`;

  private fourthCommentHeader = "Tipovanie na istý zisk (resp. arbitrážne stávky)";
  private fourthCommentType = `Tipovanie na systém „istý zisk“ v rôznych stávkových kanceláriách a využite rozdielnych kurzov 
na tú istú udalosť. 
Základom je to, aby si tipér vsadil v min. dvoch rôznych stávkových kanceláriách čo najvyššie 
kurzy na všetky možnosti výsledku - napr. na výhru aj na prehru v tenise.
Treba si to prepočítať a zistiť či dosiahneme zisk pri akomkoľvek výsledku práve na rozdielnych kurzoch. 
Dôležité je správne rozloženie vkladov na jednotlivé kurzy, čo sa dá vypočítať napr. prostredníctvom kalkulačky pre arbitrážne stávky. 
Zisky sa pri tejto metóde väčšinou pohybujú cca od 1 do 5% z vkladu.`;

  private fifthCommentHeader = "Opakovaná stávka na jedného favorita"
  private fifthCommentType = `Tipér podáva rovnaký tip na svojho favorita až dovtedy, 
kým nebude úspešný a zároveň po každom neúspešnom tipe zvýši ďalší vklad dvojnásobne. 
Je to zaujímavý spôsob, ale používajú ho najmä tí, ktorí nemajú problém postupne investovať aj viac finančných prostriedkov. 
Využíva sa aj ďalšia forma tejto stávkovacej metódy so stanovením cieľového zisku. Pri výbere tipu si stanovíme zisk, ktorý chceme dosiahnuť. 
Aj tu podávame stávky opakovane na jedného favorita. Aktuálny kurz znásobíme potrebným vkladom, aby sme svoj zisk dosiahli. 
V prípade neúspechu pri ďalšej stávke kurz znásobíme nielen vkladom, ale pripočítame k tomu aj predchádzajúcu stratu. 
Takýto postup opakujeme až dovtedy, kým stávka vyjde.`;

  private commentTypes = [this.firstCommentType, this.secondCommentType,
    this.thirdCommentType, this.fourthCommentType,
    this.fifthCommentType];

  private commentHeaders = [this.firstCommentHeader, this.secondCommentHeader,
                            this.thirdCommentHeader, this.fourthCommentHeader,
                            this.fifthCommentHeader];

  getCommentTypes() {
    return this.commentTypes;
  }

  getHeaders(){
    return this.commentHeaders;
  }
}
