var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locatio = /** @class */ (function () {
    function Locatio(name, city, zip, address, img, creationdate) {
        this.name = "";
        this.city = "";
        this.zip = "";
        this.address = "";
        this.img = "";
        this.creationdate = "";
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.img = img;
        this.creationdate = creationdate;
    }
    Locatio.prototype.display = function () {
        for (var _i = 0, arrayOfLocatio_1 = arrayOfLocatio; _i < arrayOfLocatio_1.length; _i++) {
            var value = arrayOfLocatio_1[_i];
            $(".location").append("\n        \n\t\t\t<div class=\"col-sm-11 col-md-11 col-lg-5 border rounded d-flex justify-content-between mt-3 mr-3 shadow\">\n            <div class=\"img-cart\">\n               <img  src=\"img/" + value.img + ".jpg\">\t\n                <p class=\"d-none d-md-block\"> <i class=\"far fa-clock\"></i> Created: " + value.creationdate + "</p>\n\t\t\t\t</div>   \n\n\t\t\t\t<div class=\"align-self-center flex-fill text-center col-auto w-100\">\t\n\t\t\t\t\n\t\t\t\t<table class=\"table table-striped\">\n\n\t\t<tbody>\n\t\t<tr>\n\t\t  <th scope=\"row\"> " + value.name + "</th>\n\t\t</tr>\n\t\t<tr>\n\t\t  <th scope=\"row\"> " + value.city + "</th>\n\t\t</tr>\n\t\t<tr>\n\t\t  <th scope=\"row\">ZIP " + value.zip + "</th>\n\t\t</tr>\n\t\t<tr>\n\t\t  <th scope=\"row\"><i class=\"fas fa-map-marker-alt float-left\" style=\"font-size: 18px;\"></i> " + value.address + "</th>\n\t\t</tr>\n\t\t\n\t\t\t</tbody>\n\t\t\t</table>\n           \n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t");
        }
    };
    return Locatio;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, zip, address, img, creationdate, telephone_number, kitchen, web_address) {
        var _this = _super.call(this, name, city, zip, address, img, creationdate) || this;
        _this.telephone_number = "";
        _this.kitchen = "";
        _this.web_address = "";
        _this.telephone_number = telephone_number;
        _this.kitchen = kitchen;
        _this.web_address = web_address;
        return _this;
    }
    Restaurant.prototype.display = function () {
        for (var _i = 0, arrayOfRestaurants_1 = arrayOfRestaurants; _i < arrayOfRestaurants_1.length; _i++) {
            var value = arrayOfRestaurants_1[_i];
            $(".restaurants").append("\n        \n        <div class=\"col-sm-11 col-md-11 col-lg-5 border rounded d-flex justify-content-between mt-3 mr-3 shadow\">\n        <div class=\"img-cart-2\">\n           \n            <img class= \"imgsize d-none d-md-block\" src=\"img/" + value.img + ".jpg\">\t\n            <p class=\"d-none d-md-block\"><i class=\"far fa-clock\"></i> Created: " + value.creationdate + "</p>\n            \n            </div>   \n        <div class=\"align-self-center flex-fill text-center\">\t\n\t\t<table class=\"table table-striped\">\n\n\t\t<tbody>\n\t\t<tr>\n\t\t  <th scope=\"row\"> " + value.name + "</th>\n\t\t</tr>\n\t\t<tr>\n\t\t  <th scope=\"row\"> " + value.city + "</th>\n\t\t</tr>\n\t\t<tr>\n\t\t  <th scope=\"row\"> ZIP " + value.zip + "</th>\n\t\t</tr>\n\t\t<tr>\n\t\t  <th scope=\"row\"><i class=\"fas fa-map-marker-alt float-left\" style=\"font-size: 18px;\"></i>" + value.address + "</th>\n\t\t</tr>\n\t\t<tr>\n\t\t  <th scope=\"row\"><i class=\"fas fa-phone\"></i> " + value.telephone_number + "</th>\n\t\t</tr>\n\t\t<tr>\n\t\t  <th scope=\"row\"> " + value.kitchen + "</th>\n\t\t</tr>\n\t\t<tr>\n\t\t  <th scope=\"row\"> " + value.web_address + "</th>\n\t\t</tr>\n\t\t\n          \n\t\t\t</tbody>\n\t\t\t</table>\n            </div>\n            </div>\n    ");
        }
    };
    return Restaurant;
}(Locatio));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zip, address, img, creationdate, eventtime, eventdate, price) {
        var _this = _super.call(this, name, city, zip, address, img, creationdate) || this;
        _this.eventtime = "";
        _this.eventdate = "";
        _this.price = "";
        _this.eventtime = eventtime;
        _this.eventdate = eventdate;
        _this.price = price;
        return _this;
    }
    Events.prototype.display = function () {
        for (var _i = 0, arrayOfEvents_1 = arrayOfEvents; _i < arrayOfEvents_1.length; _i++) {
            var value = arrayOfEvents_1[_i];
            $(".events").append("\n        <div class=\"col-sm-11 col-md-11 col-lg-5 border rounded d-flex justify-content-between mt-3 mr-3 shadow\">\n        <div class=\"img-cart-3\">\n        <img class= \"imgsize d-none d-md-block\" src=\"img/" + value.img + ".jpg\">\t\n        <p class=\"d-none d-md-block\"><i class=\"far fa-clock\"></i> Created: " + value.creationdate + "</p>\n        \n        </div>   \n\t\t<div class=\"align-self-center flex-fill text-center col-auto w-100\">\t\n\t\t\t\t\n\t\t\n\t\t<table class=\"table table-striped\">\n\n\t\t<tbody>\n\t\t<tr>\n\t\t  <th scope=\"row\"> " + value.name + "</th>\n\t\t</tr>\n\t\t<tr>\n\t\t  <th scope=\"row\"> " + value.city + "</th>\n\t\t</tr>\n\t\t<tr>\n\t\t  <th scope=\"row\">ZIP " + value.zip + "</th>\n\t\t</tr>\n\t\t<tr>\n\t\t  <th scope=\"row\"><i class=\"fas fa-map-marker-alt float-left\" style=\"font-size: 16px;\"></i>" + value.address + "</th>\n\t\t</tr>\n\t\t<tr>\n\t\t  <th scope=\"row\"> " + value.eventtime + "</th>\n\t\t</tr>\n\t\t<tr>\n\t\t  <th scope=\"row\">" + value.eventdate + "</th>\n\t\t</tr>\n\t\t<tr>\n\t\t  <th scope=\"row\"> " + value.price + " <i class=\"fas fa-euro-sign\"></i></th>\n\t\t</tr>\n\t\t\n          \n\t\t\t</tbody>\n\t\t\t</table>\n\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\n\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t");
        }
    };
    return Events;
}(Locatio));
var Olimpic_Park = new Locatio("Olimpic Park", "Adler", 354340, "Olimpic st.", "olimpic-park-adler", "20.06.2020 00:00");
var Center = new Locatio("City-center", "Sochi", 354300, "Kurortnie Avenue", "2", "20.06.2020 00:00");
var chinkali = new Restaurant("Belie Nochi", "Sochi", 35400, "Teotralinai 11", "3", "20.06.2020 00:00", "+7(862) 225-50-25", "Caucasian kitchen", "https://baranrapan.ru/");
var Original = new Restaurant("Original Bar", "Sochi", 34500, "Ostrovsokogo 15", "4", "20.06.2020 00:00", "+7(862) 239-40-80", "Shisha-Bar", "https://facebook.com/original");
var skypark = new Events("Sky Park", "Kazachie brod", 35400, "Krasno st.", "5", "20.06.2020 00:00", "10:00-20:00", "Mon.-Fri. ", 100.00);
var F1 = new Events("Russian Grand Prix F1", "Adler", 35400, "Sochi Autodrom", "f1", "20.06.2020 00:00", "13:10", "Sun, 27.09.2020 ", 250);
var arrayOfLocatio = [];
arrayOfLocatio.push(Olimpic_Park);
arrayOfLocatio.push(Center);
var arrayOfRestaurants = [];
arrayOfRestaurants.push(chinkali);
arrayOfRestaurants.push(Original);
var arrayOfEvents = [];
arrayOfEvents.push(skypark);
arrayOfEvents.push(F1);
Olimpic_Park.display();
chinkali.display();
F1.display();
