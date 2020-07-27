import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() { }

  productList: any[] = [
    {
      'id': '1',
      'img': '../../assets/main/1.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    },
    {
      'id': '2',
      'img': '../../assets/main/2.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    },
    {
      'id': '3',
      'img': '../../assets/main/3.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    },
    {
      'id': '4',
      'img': '../../assets/main/4.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    },
    {
      'id': '5',
      'img': '../../assets/main/5.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    },
    {
      'id': '6',
      'img': '../../assets/main/6.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    },
    {
      'id': '7',
      'img': '../../assets/main/7.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    },
    {
      'id': '8',
      'img': '../../assets/main/8.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    },
    {
      'id': '9',
      'img': '../../assets/main/9.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    },
    {
      'id': '10',
      'img': '../../assets/main/10.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    },
    {
      'id': '11',
      'img': '../../assets/main/11.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    },
    {
      'id': '12',
      'img': '../../assets/main/12.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    },
    {
      'id': '13',
      'img': '../../assets/main/13.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    },
    {
      'id': '14',
      'img': '../../assets/main/14.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    },
    {
      'id': '15',
      'img': '../../assets/main/15.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    },
    {
      'id': '16',
      'img': '../../assets/main/16.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    },
    {
      'id': '17',
      'img': '../../assets/main/17.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    },
    {
      'id': '18',
      'img': '../../assets/main/18.png',
      'name': 'Gucci Star Garden-Print Dress',
      'price': 'AED 455',
      'description': 'From its unique print to the various vintage style influences, the Star-Garden Print Dress by Gucci is an eclectic masterpiece that brings a hint of fun to the fall and winter',
      'sizeS':true,
      'sizeM':true,
      'sizeL': false
    }
  ]


  ngOnInit(): void {

  }

  logScrolling($event) {

  }
}
