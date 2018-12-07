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
     this.shop =`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMBSURBVEiJrZRbaBNpGIaff2aSdJo0qSfaYO1hFzxiUausCLZbRQreiOiqIKhtUSxeeEDBXgkiiAr1SliVWGS9UBC8UNiL1dplCx7R1I1FLXgotp5tapo0sZn5vWrNaZIU/WDg/99v3veZ4yeklGStprplCFYhRQ2CmreXXpeoLttHRVcea071oifw6Gw2u7AEbGlwYo+dQNKSKPef70Ma3z2O6foz11T7Ct3v788Uo2QM315bjT3WnRqeqWL9IzODvcOvgvMWNOUHaKwvwFQuIfk1V/hYGRFDjb4Mn44snuvNDVDMo8DsVPmL4qSx5CAtG6/wrigth3gkrkXecyNVT34HjXXzUUQ3IBJP6tQXsK20lUFbMUt7PgMmDT0+NtxvTwO55rm3FQe6z2e+A1WpSwyPCjv7pu1iRdlJKr0uHu100NIYgyKNjlnN7P3jIqECT1KEETPWJz2QpK6UNWPLXlsZNeVnODVpHcfqBR1NTio8MLv0K227gngXqoQdM9i98Rp3qmq/A8JGtTUAFo0tSoxBfhl9w71FtzjwG8RNePIJHvQ5iI4K9q0eonntEJoRoWzw5XiAGYqXZgMMjy3cZpirA61UO0MAPA/CnLNw4S8bD/scACzxhjlzoYHpwb7xAKGJeBaA+I8fLNVte2YNED8BUKhdT9xryV21i7gZAQrHtSvt8M9lqtB4KLw8Maew8FwvReYIcuAdiYNGqALNJn1J15w2i5p/PwAct7rC1FmUWHplYceUF49XJmrpf3K5OInAbwWwKs2txUynWJOqpwMO3YxjsAMwJgLQy517pgUCw6l65mna3nkPyeG8wyv0257//X9m6mUGAFT8ewRJZ65w+2R7KFQ1Um/VtwYckiYivhn4YGm2K9Lm1VdX3nwRnTgAwNc1AGwFMn42hZWutkkBf1e2iOwAAF/n3yDaUmW9TO8pftq9P5c9NwBAC7UCd8e3bi1q8yjL87HmBzh9fxRFbgKGhCpkQYVrkzsQ+JyXV0qZ/9FUu2FwznzfRDzfAKAdPgKwztgMAAAAAElFTkSuQmCC`;
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
