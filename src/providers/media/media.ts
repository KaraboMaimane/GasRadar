import { Injectable } from '@angular/core';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {
  shop: string;
  house: string;
  fuelpump: string;
  man: string;
  mapstyle;
  icon: string;
  constructor() {
    this.man = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPgSURBVGhD7ZZ/aNR1GMcX+q+EGEn/dHdBW9PMoVY4TN197zu92/e8nJvubkTZXFloEoQTApWiVvZPq24/MqMDIxiky7adM1FKGOX+EEH/KOd/goG2drtzu5P5fXqez57Z4/mpHCT3GdwbXux4vq/nw/vD7Y4rKeY/4vf7qzBH8e9VZAT5kR/NnuAF3sPioGEIeRWVB6ZMg4NF60Txf+Id1s0NljwnS4eDFnywsxrOtofg4qGQa/mrJnF+DVVz3xXLshZQ+WC1Bfu32/BTWxBy34cBkn9zrDWoLmjbto/XzAt+NpY2RKybN75z7iifT+NGK4eXXsJr5qWluXpT0+aAtryEnLe22ht5zbz0fRT0tzTZ2vIScsjlNfMCP9Q/mDpaM6krL1EOurxmZtxkuE9XXoLOMdbNjdsbKod+Z1R3AQU+c5Mbylg3OzBQs9ztdy7nXwJnl9yks4y12RH4+pGHILEQ4JvSKRIPg5uYt4Afz54cPvyuBzpLQNKd2PcoPzY/5V+Me3YMTFz8cHDCvdLpuX2JS12L4cBg1t1xfPwCOaybGU987Hlvezr95sksfHw2B20nz8PAVy9DMvEKtJ36Vc12npgAcrztqQ28ZlZ88VTYFx+b9LWnoeJQBt4fzKnikv1nsrDkYBrImXJTDq+bEd/B9EJvPD2qCjLln2cg2jMOu/AdeAOpPzIOpV2Z28+ZP2mXjyl8vPGxT/MKzoCxT/iYAqcb5mCh63cXvDfwnbxGZ/BphYvns0yFruBM8HZklvJxhcvjHamQrtxMKO0cXc/HFS653k3RU9/uPV3WMZLVlfw3aId26Qw+rnBxjzsx+h2V7asdjn758wVdYR3k0o76DYZn8HGFy/RFiNHeLed1pXWQO71XvMj/meJFihe5T5EX+b2n4TddaR3kGnURSEa8bn/4Fyp0tSc6rCutg1x1CbUb8fJxhQ2cXjMX+p0913tqz616/QDcC+TSDu3yMebk7ZYX19qxbSAJMPlzcnnNvFixrY/lF7a2vKS4a44ur5mXmthr8/MLV9W9oMifk8trZiYQbbolC6+ubVTIGTmsmxv8PPwhSz8XaVDIGTmsmxs71jQsS1c69Qo5I4d1c4NFh2TplaFahZwhQ6ybG/y3OSFLP7MuopAzclg3N1i0W5ZeEXAUcoZ0s25u8BupS5Ze5g8q5Iwc1s0NFm2VpSvWVCvkDGll3dzgN9JuWfqpVZZCzshh3dzgB7lZln6ycq1Czshh3dzYjdvqZOlFz65WyBk5rJsbK9YckKWfWFGpkDNyWDc3WLQCv5VGCAspe7rSJej19Jwc1ou5MyUlfwFPLZECWlJrYwAAAABJRU5ErkJggg==`;
     this.fuelpump = `data:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsgAAALIBa5Ro4AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAU0SURBVFiFpZdrbBRVGIafc2b21tIClRaElquAQAlekR+CeEmMCkZk8YKIBlwVAwlefqnhJj9JjCZ4YYtGAgJlwZDgD8NNEUNEIIgIlJuAlVvpCstud7szc44/KrC3trPwJZPJvOc97/fON2e+MyO01riOYKg7MBMpxmPKEdiqBg14ZCOOOoij9wFfEAmfdSspXBkIhqoxxDykmK6GVSb1oIpyXV0udXU5WgpkYwzRGNPiZDQmDzb5QX+DpRYTCf996waCoTEY8ntdU+6zp48q1beXdSzY1IKx6vekPBYVKD2RSHjLzRsIhp7HZ9bZL9QG1Jhqo2On2SH3ndPmqgMJ0s4rrPlyQ/EGgqHhSLHffv1ejxrVK3MKKSeANLtl0R07hl8mEEKjtQUqhWhowrv0sIPSTxAJb3ZvIBgyMeVeZ2y/O53nRngzh/6K9mbAgFF4vVkwtmNz7OheaqgDnbyOe3eYeH7xXhBJXUMkbOWmkoVvn9m6sqSfM3l4VpaU7UXLMqTp4WLMun40JyyEMBBGN9ZvU1lC6bE2qpoeeMS7hRIVNlDimeNMGNoVQ2TBGoEQgq0NMXadaWHXmRZ2noqz5tcLbDkURSmHZauPc+JM+sYkAelxKQNYRDDk79xAMDSYpN1fDatspzhgOW2PTWnN+WgLtqNIph38fj8TH6th5abLWXynRqENbQD3uKnA07pP2RUCZrsGADRwIZrAspwsfNLjfflpT5yTjRlVkODcAcADbgxUqZE9fQWT2jEABlf6KJGKIVUBRlZ3YWR1F+7q29Yfunf1MWNSBYs+u4Dt3FjgzkBL4hXjcjXzblOXeCoRlOTh2sJJHABzFEN7BhjaM5Bn8GS87Tz1qa7s3Jfgi7VRZk+9rQ1UoLsY/UXOnDwDImVrEWt1gKzGo1qOQEsM3z+/kThwJC85gMcTR/RqQZYK5s2qYvr7jcx8toKAXyASgKPyWnP+g1b6MM3JK0DFDSyFkzyGcVHhqdtGqadwU7xqOxgvWTACeld5GF1bwvbdcZ4cV4ZISERMNeTOKbQGfhbn41ndSbWeBu0UoHYeLam2viCbDRvNUTcG9okrqTJ55FKGAde7KwCWralbH+WPoykeuq8UeVFinBECWNu5gUjYwmssNzYdbQXQKo2yLuXR2ouN264y8a3T7DmYpO6jPlRWmHh3eNABYyORcCyXX/hlT9kfiFOXp4mT//p0jevcAFR0M/h8fm8G9Gnr4rJZYB6UCmUvLsTvYDd8bQmGnJuaV2vYYjdLVzfz3eYY2KKtCxVUA0zN+PtL+XBWFaShdEmJFmm9jPrwm8UZeHihSY/GJgzRNRVsFfFBFpdjqjA3J8q6SMrPmQRW+yBNkkBrJStWJIozADAl9AiarQDOEIfk1HT7+2dG+Dd4Mfdfe1XFNCLLVrXHdfNJ9i3wIoD2g11r4wxW2EOdG2YUGCckZoOBechExK+ps4114Uc7ku94xwGw1Ht45ASgTKTAs8fEs+f/MR9aC4FI6dwOC2AjnDmdyXde0I3Lz6JZWHAsLYRoLZgc0J9S/9WhWzcAEK3+BPgzL8XdvdEPDiw04xyWXuBG2t1/AcCU0Hg0292ReZlIeKUborsKAKwL/wgsz4R0bS/06L65zB/cJi/OAID0zgWOX7+uKoPMHxXNJaT9alGSRRmoXxoHOQ2wAcSJS3CkKYMgZlL/9fliJN2vgcyYHJqPYEEOuoxI+I1ipYqrwLUwrixGsysDaSAt374ZqZurAMAzM2ow5ccgAkj1DvXL87523MR/xxwfAgAsIQkAAAAASUVORK5CYII=`;
     this.shop =`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAACmAAAApgHdff84AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAY9QTFRF////ZjMzTRoaXS4jQxgSWjAgWDAfQxcPWTAdWDAeQBYMWDAeTygXPhULVzEeVi8cPBQLQxwQWDAdWDAeOA8HMwkDNgsEWDAeMgkDMAYBMQcBLwUAMAYBMAcBMQcBMggCNAoEOA4HOQ8HOhAIOxIJPhULRRwQRh0RRx4SSgwGSyIUTiUWUSkZUUFDUikZUioaVCwbVi4cVy8eWC8eWDAeWzcnXT4xZTMhaTwOalE6bHN7bUUmb04qcEgncUUcc0kec3+IdXR0fl44fomPfo+XgYiCiqe1izopjBwUjDopjKy6jTopjjspjpCAkCAWkms1km47lCcblK6zoK+bo6uUpK+UqYI8q0AvtrmTt6pyuCMauLuRvLFtvZdGvrFpwywcxVk5xZ9JyKJHy7VXzbVUzhsTzhwUzxwUzx0V20Ec26Uc28Vx3EMd4KUS5KkS5kw850w864BJ7rYc8s1b89Fm89Jp9t2O9t6Q+OOf+bsQ+bsS/N2B/N6G/PPP/PTU/ein/eqt/u68/vDE/vfZ///1n7Pb7QAAABt0Uk5TAAUKFiowS1dqf4CAjqiytL/Q0Obo9fb6/f7+IqTWWgAAAU5JREFUKJFtkmdXwjAUhgOFQkGxAgIa3HuvuPdGxb23ooIbBBcq4OCHm5u0QM/x/dLT50lu1kWIRxAlm8Nhk0QB5UZndRMlbkmX5UY7Y/61LvjYjSo38+H+8NVyC5tkVsarPBIK+uq6wbA5Ol5nMRyJhC6Dvso2qAbrWDOcCmpK6+mvRPfJCs0DB0ENrmonbgGJWc4EmLIGIiKJ8jnOuQCDq/NQASF9O6ePLHfXkJP9RoyLkANKrcRY3uOQfkxTrIinZPIVxOfPFxceZGPiOZ1+A5FK/3LhZIvTGYnEy9nI6MPHd4oLGbbbM7W6exuLHRFyH4+fXwwPUmGBA04sLK0fqGJrY2a2FXsNcCX/CJldYu/05OZeILA9NHYTjR4eD4xjl55fe3MF1sRrUh+qs1bD83Oetqk8w10mTTN01CjDZb2mT2j7FJZ4nLLFoIA/eHZzHM8DkAAAAAAASUVORK5CYII=`;
     this.house = '../../assets/house.png';
   
     this.mapstyle = [
      {
          "featureType": "water",
          "stylers": [
              {
                  "saturation": 43
              },
              {
                  "lightness": -11
              },
              {
                  "hue": "#0088ff"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "hue": "#ff0000"
              },
              {
                  "saturation": -100
              },
              {
                  "lightness": 99
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#808080"
              },
              {
                  "lightness": 54
              }
          ]
      },
      {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ece2d9"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ccdca1"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#767676"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "poi",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#b8cb93"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi.sports_complex",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi.medical",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi.business",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      }
  ]
  }
  //https://icons8.com/icon/set/shop/color
}
