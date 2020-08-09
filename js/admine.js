// 1. Felvenni egy tömbben objektumokat - users
// 2. táblázat feltöltése adatokkal
// 3. módosítás/ törlés gomb aktiválása

// Video




let ushers = [ 
    {"id":1,"first_name":"Charin","last_name":"Filintsev","email":"cfilintsev0@nature.com","addr":"463 Oneill Road","city":"Fatualam","phone_nr":"+62 (878) 821-8015"},
    {"id":2,"first_name":"Pearl","last_name":"Rens","email":"prens1@umich.edu","addr":"11220 Haas Way","city":"Donja Dubica","phone_nr":"+387 (801) 317-6267"},
    {"id":3,"first_name":"Gearalt","last_name":"Gritsaev","email":"ggritsaev2@ox.ac.uk","addr":"6 Carpenter Street","city":"Hartswater","phone_nr":"+27 (675) 779-7613"},
    {"id":4,"first_name":"Tonya","last_name":"Gubbin","email":"tgubbin3@shareasale.com","addr":"59 Oak Valley Terrace","city":"Severo-Zadonsk","phone_nr":"+7 (658) 162-3104"},
    {"id":5,"first_name":"Antonino","last_name":"Smout","email":"asmout4@senate.gov","addr":"9858 Thierer Road","city":"Merke","phone_nr":"+7 (768) 493-5836"},
    {"id":6,"first_name":"Kippar","last_name":"Kloser","email":"kkloser5@mit.edu","addr":"3 Emmet Crossing","city":"Maebaru","phone_nr":"+81 (382) 315-3379"},
    {"id":7,"first_name":"Aimil","last_name":"Jude","email":"ajude6@github.io","addr":"5196 Loeprich Point","city":"Khairpur","phone_nr":"+92 (868) 474-8147"},
    {"id":8,"first_name":"Fiona","last_name":"Soan","email":"fsoan7@time.com","addr":"17 Luster Hill","city":"Santi Suk","phone_nr":"+66 (152) 831-3380"},
    {"id":9,"first_name":"Yolanda","last_name":"Que buscas","email":"ytrahair8@washington.edu","addr":"90 Killdeer Street","city":"Marialva","phone_nr":"+55 (398) 660-7589"},
    {"id":10,"first_name":"Beatrisa","last_name":"McCartan","email":"bmccartan9@chicagotribune.com","addr":"8252 Duke Plaza","city":"Bogoroditsk","phone_nr":"+7 (325) 932-5282"},
    {"id":11,"first_name":"Ulla","last_name":"Czaja","email":"uczajaa@unc.edu","addr":"66828 3rd Circle","city":"Donggou","phone_nr":"+86 (132) 460-1977"},
    {"id":12,"first_name":"Kiley","last_name":"Gotcher","email":"kgotcherb@barnesandnoble.com","addr":"4540 Shelley Park","city":"Shangrao","phone_nr":"+86 (656) 461-9712"},
    {"id":13,"first_name":"Erinn","last_name":"Eggar","email":"eeggarc@lulu.com","addr":"89624 Kensington Center","city":"El Olivar","phone_nr":"+504 (473) 183-4059"},
    {"id":14,"first_name":"Anthea","last_name":"Keeves","email":"akeevesd@cmu.edu","addr":"14042 Lighthouse Bay Street","city":"Pulo","phone_nr":"+63 (777) 575-4369"},
    {"id":15,"first_name":"Niles","last_name":"Giannasi","email":"ngiannasie@cornell.edu","addr":"38342 Columbus Alley","city":"Shangkuli","phone_nr":"+86 (193) 855-6465"},
    {"id":15,"first_name":"Cher","last_name":"Longcake","email":"cherlongcake@cornell.edu","addr":"3614 Jackson Highway","city":"El Centro","phone_nr":"+36 (30) 855-3946"},
    {"id":17,"first_name":"Sylas","last_name":"Gennrich","email":"sgennrichf@networksolutions.com","addr":"940 Autumn Leaf Avenue","city":"Pavlovskaya","phone_nr":"+7 (948) 738-7336"},
    {"id":18,"first_name":"Saunderson","last_name":"Genty","email":"sgentyg@princeton.edu","addr":"9 5th Road","city":"Mutis","phone_nr":"+57 (159) 633-6566"},
    {"id":19,"first_name":"Jeane","last_name":"Syce","email":"jsyceh@mit.edu","addr":"71 Crownhardt Crossing","city":"Dopang","phone_nr":"+62 (961) 865-2791"},
    {"id":20,"first_name":"Sue","last_name":"Proven","email":"sproveni@businesswire.com","addr":"25911 Mallard Trail","city":"Sơn Trà","phone_nr":"+84 (280) 237-3833"}
]