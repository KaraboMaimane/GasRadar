import { Injectable } from '@angular/core';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {
  shop: string;
  fuelpump: string;
  man: string;
  mapstyle;
  constructor() {
    this.man = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPgSURBVGhD7ZZ/aNR1GMcX+q+EGEn/dHdBW9PMoVY4TN197zu92/e8nJvubkTZXFloEoQTApWiVvZPq24/MqMDIxiky7adM1FKGOX+EEH/KOd/goG2drtzu5P5fXqez57Z4/mpHCT3GdwbXux4vq/nw/vD7Y4rKeY/4vf7qzBH8e9VZAT5kR/NnuAF3sPioGEIeRWVB6ZMg4NF60Txf+Id1s0NljwnS4eDFnywsxrOtofg4qGQa/mrJnF+DVVz3xXLshZQ+WC1Bfu32/BTWxBy34cBkn9zrDWoLmjbto/XzAt+NpY2RKybN75z7iifT+NGK4eXXsJr5qWluXpT0+aAtryEnLe22ht5zbz0fRT0tzTZ2vIScsjlNfMCP9Q/mDpaM6krL1EOurxmZtxkuE9XXoLOMdbNjdsbKod+Z1R3AQU+c5Mbylg3OzBQs9ztdy7nXwJnl9yks4y12RH4+pGHILEQ4JvSKRIPg5uYt4Afz54cPvyuBzpLQNKd2PcoPzY/5V+Me3YMTFz8cHDCvdLpuX2JS12L4cBg1t1xfPwCOaybGU987Hlvezr95sksfHw2B20nz8PAVy9DMvEKtJ36Vc12npgAcrztqQ28ZlZ88VTYFx+b9LWnoeJQBt4fzKnikv1nsrDkYBrImXJTDq+bEd/B9EJvPD2qCjLln2cg2jMOu/AdeAOpPzIOpV2Z28+ZP2mXjyl8vPGxT/MKzoCxT/iYAqcb5mCh63cXvDfwnbxGZ/BphYvns0yFruBM8HZklvJxhcvjHamQrtxMKO0cXc/HFS653k3RU9/uPV3WMZLVlfw3aId26Qw+rnBxjzsx+h2V7asdjn758wVdYR3k0o76DYZn8HGFy/RFiNHeLed1pXWQO71XvMj/meJFihe5T5EX+b2n4TddaR3kGnURSEa8bn/4Fyp0tSc6rCutg1x1CbUb8fJxhQ2cXjMX+p0913tqz616/QDcC+TSDu3yMebk7ZYX19qxbSAJMPlzcnnNvFixrY/lF7a2vKS4a44ur5mXmthr8/MLV9W9oMifk8trZiYQbbolC6+ubVTIGTmsmxv8PPwhSz8XaVDIGTmsmxs71jQsS1c69Qo5I4d1c4NFh2TplaFahZwhQ6ybG/y3OSFLP7MuopAzclg3N1i0W5ZeEXAUcoZ0s25u8BupS5Ze5g8q5Iwc1s0NFm2VpSvWVCvkDGll3dzgN9JuWfqpVZZCzshh3dzgB7lZln6ycq1Czshh3dzYjdvqZOlFz65WyBk5rJsbK9YckKWfWFGpkDNyWDc3WLQCv5VGCAspe7rSJej19Jwc1ou5MyUlfwFPLZECWlJrYwAAAABJRU5ErkJggg==`;
     this.fuelpump = `data:image/png;base64,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`;
     this.shop =`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARcSURBVGhD7ZRdTJNXGMffLKadJHObuiw6prbqjTNj2XYzliwz24UzaDI1FDGRxY9rtmzO3RgvdMLNsumMzI8gjsypAfETDFgoXynKMgQrlWB1ihoHi4F+UEzgPDvP8TRpz3mwrRnQuvef/MJLz/+c5//n7cEwZcqUqedDbG3mdJZr/55Tyxz2uikFM+Tad2EmGS9xYQlw2CGVYA7bThkvcbFcWwN12FSCmWS8xMXbN1OHTSWYScZLXM9PkaMvH4NfZ7iiYVvnVEOuzRUN+3pujeY7+Mol1RdBrKl+PEP14SzVxzPJeImJuSyLmcvKoNEK0bDCN7zaX6rkVZfmq7fc13wSsab4xRmqD2cpPsyE2WTM+OIbdqqHgMs6yPLso9rAky81qt5ki4gzVB/O4jM1L88mYz5dAMYLvPUd7YALGZfVYWJgdUa75k22CJ5BeXGm6sVsPKOMO76gwfqpulmwf6b2+sUw54s+1Zt0ETyD8IqZilfAM8q444s3Lqc2k/eDw1/1sOZNtgieQXmJe/LEbymXcWmxNmMGPzSkbebf1TGHnWmDvpg/oHk5POwD1RtBrFF78CzFK2bS9ySEWWVsXazJukXdhIxWZtxUh4hBW1/vo/zMaQlQfkSsEXtGv+FnEX4xm/BjVhlbF6uZ1gG1FlAJ75n5d3jNfFAZKZrdT/nHLlpDlB9hfI3aM1I0q5/y42zKj1llbF3siFEHZfwfl4Lv5wK48clrGr59BZoX8Vd9CN7PMvU9y98E/6lsck+yM1iZUStj62JHjRx1Q7DiHeh0t4B3pT12yMqF0NnWCqGKrBg/4nMfBs/uwlg/x1P0JfjaDmr+Z5nBSo0VMjYt3nRV6OSSoZHjC2CgJh+6PH9Ax42bcLWhFq5/tRq8jizxs7OhTnyO6/9UrwP0Byvfh1vuA+Lzju4euLZ3B3QXZAvwGT/DNfSg91lmYDbMKOM+XX96e5tFmBQEs8mY8fW/KNJzbwD6/GMTSs+DR+Rs5D8t8sOVx/D24WBclh4IwNzvPAJ8pjwR3isNwooTIdjeGJ68IsXuEbDtD8Rlwb4hmPNtlwCfKc/SQ1ggCBvPD8PmC8OwrT7NirzL38DnFSERPpq0KGIvCcAHZUFwVMWGjya1i2y7Btllflh/Rn8DKilZZHHJEGTu6IV5u+/B+qoAGVwlpYpELnD+qQDMK74vSKsi6gXG8GlTJPoCb+JBPi59BKt+HxKhqCK4tox70BtdIMKkF1n0SxA+Kg/GXODIV2nJTw/F71SRt/ga/p4/zhua1CLbm8JQcE4PgeT8Ngh5lU9CUkUcfC3n2GDMnmgmtQgOo0KoUEXiYRah5Gq/esR5paOJovOvh7cnuojnTv9dajaC2WTM+DrtbG0+Xd8KFG3e2xP+Rtp7+sjZAp5Nxowvs4jC1Bepb/mxytlSR9Hi6e3a1RQIbzgbYPHIq/QzW/FdQPCZ8qjg2e7uW9ep2QhmkzFNmTJlKm1lGP8COvpOliMQT/QAAAAASUVORK5CYII=`;
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
