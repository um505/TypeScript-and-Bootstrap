
class Locatio{
	name="";
	city="";
	zip="";
	address="";
	img="";
	creationdate="";


	constructor(name,city,zip,address,img,creationdate){
		this.name=name;
		this.city=city;
		this.zip=zip;
		this.address=address;
		this.img=img;
		this.creationdate=creationdate;

	}
	
	display(){
		for(let value of arrayOfLocatio){
        $(".location").append(`
        
			<div class="col-sm-11 col-md-11 col-lg-5 border rounded d-flex justify-content-between mt-3 mr-3 shadow">
            <div class="img-cart">
               <img  src="img/${value.img}.jpg">	
                <p class="d-none d-md-block"> <i class="far fa-clock"></i> Created: ${value.creationdate}</p>
				</div>   

				<div class="align-self-center flex-fill text-center col-auto w-100">	
				
				<table class="table table-striped">

		<tbody>
		<tr>
		  <th scope="row"> ${value.name}</th>
		</tr>
		<tr>
		  <th scope="row"> ${value.city}</th>
		</tr>
		<tr>
		  <th scope="row">ZIP ${value.zip}</th>
		</tr>
		<tr>
		  <th scope="row"><i class="fas fa-map-marker-alt float-left" style="font-size: 18px;"></i> ${value.address}</th>
		</tr>
		
			</tbody>
			</table>
           
				</div>
				</div>
			
		`)
		}	
	}
}

class Restaurant extends Locatio{
	telephone_number="";
	kitchen="";
	web_address="";

	constructor(name,city,zip,address,img,creationdate,telephone_number,kitchen,web_address){
		super(name,city,zip,address,img,creationdate);
		this.telephone_number=telephone_number;
		this.kitchen=kitchen;
		this.web_address=web_address;

	}
	display(){
		for(let value of arrayOfRestaurants){
		$(".restaurants").append(`
        
        <div class="col-sm-11 col-md-11 col-lg-5 border rounded d-flex justify-content-between mt-3 mr-3 shadow">
        <div class="img-cart-2">
           
            <img class= "imgsize d-none d-md-block" src="img/${value.img}.jpg">	
            <p class="d-none d-md-block"><i class="far fa-clock"></i> Created: ${value.creationdate}</p>
            
            </div>   
        <div class="align-self-center flex-fill text-center">	
		<table class="table table-striped">

		<tbody>
		<tr>
		  <th scope="row"> ${value.name}</th>
		</tr>
		<tr>
		  <th scope="row"> ${value.city}</th>
		</tr>
		<tr>
		  <th scope="row"> ZIP ${value.zip}</th>
		</tr>
		<tr>
		  <th scope="row"><i class="fas fa-map-marker-alt float-left" style="font-size: 18px;"></i>${value.address}</th>
		</tr>
		<tr>
		  <th scope="row"><i class="fas fa-phone"></i> ${value.telephone_number}</th>
		</tr>
		<tr>
		  <th scope="row"> ${value.kitchen}</th>
		</tr>
		<tr>
		  <th scope="row"> ${value.web_address}</th>
		</tr>
		
          
			</tbody>
			</table>
            </div>
            </div>
    `)}	} }

class Events extends Locatio{
	eventtime="";
	eventdate="";
	price="";
constructor(name,city,zip,address,img,creationdate,eventtime,eventdate,price){
		super(name,city,zip,address,img,creationdate);
		this.eventtime=eventtime;
		this.eventdate=eventdate;
		this.price=price;

	}
	display(){
		for(let value of arrayOfEvents){
		$(".events").append(`
        <div class="col-sm-11 col-md-11 col-lg-5 border rounded d-flex justify-content-between mt-3 mr-3 shadow">
        <div class="img-cart-3">
        <img class= "imgsize d-none d-md-block" src="img/${value.img}.jpg">	
        <p class="d-none d-md-block"><i class="far fa-clock"></i> Created: ${value.creationdate}</p>
        
        </div>   
		<div class="align-self-center flex-fill text-center col-auto w-100">	
				
		
		<table class="table table-striped">

		<tbody>
		<tr>
		  <th scope="row"> ${value.name}</th>
		</tr>
		<tr>
		  <th scope="row"> ${value.city}</th>
		</tr>
		<tr>
		  <th scope="row">ZIP ${value.zip}</th>
		</tr>
		<tr>
		  <th scope="row"><i class="fas fa-map-marker-alt float-left" style="font-size: 16px;"></i>${value.address}</th>
		</tr>
		<tr>
		  <th scope="row"> ${value.eventtime}</th>
		</tr>
		<tr>
		  <th scope="row">${value.eventdate}</th>
		</tr>
		<tr>
		  <th scope="row"> ${value.price} <i class="fas fa-euro-sign"></i></th>
		</tr>
		
          
			</tbody>
			</table>

									
				
		</div>
				
			</div>
		`)
		}	

	}  
}

let Olimpic_Park= new Locatio("Olimpic Park","Adler",354340,"Olimpic st.","olimpic-park-adler","20.06.2020 00:00");

let Center= new Locatio("City-center","Sochi",354300,"Kurortnie Avenue","2","20.06.2020 00:00");

let chinkali= new Restaurant("Belie Nochi","Sochi",35400,"Teotralinai 11","3","20.06.2020 00:00","+7(862) 225-50-25", "Caucasian kitchen","https://baranrapan.ru/");
let Original= new Restaurant("Original Bar","Sochi",34500,"Ostrovsokogo 15","4","20.06.2020 00:00","+7(862) 239-40-80", "Shisha-Bar","https://facebook.com/original");

let skypark=new Events("Sky Park","Kazachie brod",35400,"Krasno st.","5","20.06.2020 00:00","10:00-20:00","Mon.-Fri. ",100.00);

let F1=new Events("Russian Grand Prix F1","Adler",35400,"Sochi Autodrom","f1","20.06.2020 00:00","13:10","Sun, 27.09.2020 ",250);


let arrayOfLocatio:Array<any> = [];

arrayOfLocatio.push(Olimpic_Park);
arrayOfLocatio.push(Center);

let arrayOfRestaurants:Array<any> = [];
arrayOfRestaurants.push(chinkali);
arrayOfRestaurants.push(Original);

let arrayOfEvents:Array<any> = [];
arrayOfEvents.push(skypark);
arrayOfEvents.push(F1);


Olimpic_Park.display();
chinkali.display();
F1.display();

