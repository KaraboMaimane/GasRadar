import { Injectable } from '@angular/core';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {
<<<<<<< HEAD
  shop: string;
  fuelpump: string;
  man: string;
  mapstyle;
  icon: string;
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
=======
    shop: string;
    fuelpump: string;
    man: string;
    mapstyle;
    icon: string;
    avatar: string;
    constructor() { 
        this.avatar = `image/png;base64,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`
        this.man = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPgSURBVGhD7ZZ/aNR1GMcX+q+EGEn/dHdBW9PMoVY4TN197zu92/e8nJvubkTZXFloEoQTApWiVvZPq24/MqMDIxiky7adM1FKGOX+EEH/KOd/goG2drtzu5P5fXqez57Z4/mpHCT3GdwbXux4vq/nw/vD7Y4rKeY/4vf7qzBH8e9VZAT5kR/NnuAF3sPioGEIeRWVB6ZMg4NF60Txf+Id1s0NljwnS4eDFnywsxrOtofg4qGQa/mrJnF+DVVz3xXLshZQ+WC1Bfu32/BTWxBy34cBkn9zrDWoLmjbto/XzAt+NpY2RKybN75z7iifT+NGK4eXXsJr5qWluXpT0+aAtryEnLe22ht5zbz0fRT0tzTZ2vIScsjlNfMCP9Q/mDpaM6krL1EOurxmZtxkuE9XXoLOMdbNjdsbKod+Z1R3AQU+c5Mbylg3OzBQs9ztdy7nXwJnl9yks4y12RH4+pGHILEQ4JvSKRIPg5uYt4Afz54cPvyuBzpLQNKd2PcoPzY/5V+Me3YMTFz8cHDCvdLpuX2JS12L4cBg1t1xfPwCOaybGU987Hlvezr95sksfHw2B20nz8PAVy9DMvEKtJ36Vc12npgAcrztqQ28ZlZ88VTYFx+b9LWnoeJQBt4fzKnikv1nsrDkYBrImXJTDq+bEd/B9EJvPD2qCjLln2cg2jMOu/AdeAOpPzIOpV2Z28+ZP2mXjyl8vPGxT/MKzoCxT/iYAqcb5mCh63cXvDfwnbxGZ/BphYvns0yFruBM8HZklvJxhcvjHamQrtxMKO0cXc/HFS653k3RU9/uPV3WMZLVlfw3aId26Qw+rnBxjzsx+h2V7asdjn758wVdYR3k0o76DYZn8HGFy/RFiNHeLed1pXWQO71XvMj/meJFihe5T5EX+b2n4TddaR3kGnURSEa8bn/4Fyp0tSc6rCutg1x1CbUb8fJxhQ2cXjMX+p0913tqz616/QDcC+TSDu3yMebk7ZYX19qxbSAJMPlzcnnNvFixrY/lF7a2vKS4a44ur5mXmthr8/MLV9W9oMifk8trZiYQbbolC6+ubVTIGTmsmxv8PPwhSz8XaVDIGTmsmxs71jQsS1c69Qo5I4d1c4NFh2TplaFahZwhQ6ybG/y3OSFLP7MuopAzclg3N1i0W5ZeEXAUcoZ0s25u8BupS5Ze5g8q5Iwc1s0NFm2VpSvWVCvkDGll3dzgN9JuWfqpVZZCzshh3dzgB7lZln6ycq1Czshh3dzYjdvqZOlFz65WyBk5rJsbK9YckKWfWFGpkDNyWDc3WLQCv5VGCAspe7rSJej19Jwc1ou5MyUlfwFPLZECWlJrYwAAAABJRU5ErkJggg==`;
        this.fuelpump = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARKSURBVGhD7ZZvTBNnHMfrjAX1hdmLZb4ye7FXM1tMfLEsskxIZGYvli2jS4bYXhfsNmPwH4Z/194YdNQ7mC4aREP8M2gVlMFUooJKa0MYG7iACIiwQvgrTOYM1RCX/vY81+cuVyjS9rgryfpJviHP77n2+X36PMedJkaMGDHmAU3xCT6ntsLn0raAM65NTtB3uH3OuCPgjt9Avl4dfHe0+9HCPnDFwRLnic8Z/x5ZRlmQxFs+V9y/QZpYkqDdGYQujZYspxxoJwqERafakuHmaBc0jvfIStNwK7xwvy7KPLy5+ROynHKgX+ycsOCvg3VweerpS/Pdpatw8rfOoHPSeDp2iSIldaXDCVVPXyNLKgM6VvaFROrGp2FH1rdQ5RkTa6bvj0BJg0sc5/10Eay118SxEE/n16KItfYcJFV6uxSVeZkITsbRMrBdaRTHPza1QEWPRxzr9uXCiZY/xLEQqQhXWzaZZPcqKzNXxFp3HcpaO8SG8G7UjPwV0KQ0FT1/wi+T/4jjQ6cqoLz9foBIf+OmjKTKGY+iMnNFjt5qhk93ZwYcp1CDP5uSkc1/Viric65K/eD88zcUlQl2tM7e6wv4lUMKuv7n8cfg6Bvix3NF8FqKyix2j4SShp5+aOzuC6gFE8Ek2meyeRFBxv7kVTIlD7kiLncztJ93zKuHJIKSWOm1kil5yBFpd9hhgMnhj9XcuVBFUOxkSh7hipzpfAAXej3wwFYA4+mpUD86FfS6ZS2y54dS2JaaDh+iXPz8M7jROxD0Opyoigx1GKH+0QTKo3mpftgPaZk0pFMm2JX2JezJzQ96Hc61iSHwtrwZVGSrw/vutrMTd7eX93cnnx65l2R/piNT8pCKKBWpCIbKY7+izBwYzGwNKcknGiJGmkvBIpSZdZGSfKKyI+bD7xORMVKSTzRETAyzhqK5WSyjp20bSVke0RDB4GPF3yc0W0BK8oiWiJ5m9URkKmV/yWpSjhw1RCy2A7dR09NoF0bQ3+M6XfVKHcNoDTQ3zMuY2WzSTuSoIZJTdKgZNywE7QKF16ZoNpWv0ezfpizbOr6hSFFD5O6lt/cazMWbUdNn/I1zRf7VYQXaDb8kzeX4axGi5j2CBQJFNBoksgXX8L2SdpBbS8rhE20RDLpX2nEdPyhJKXyWhwhr5XfFzJWSUvgsBxHKwhmISD0phY+qImaukG+YZo/xixMoC6vz17k7pBQ+aooYLNxO/y/PDgr/bhmGeQU9X2pxHe3UKVyLCDVFyDvWkCCDjlIZyu9EYlbPsO/wTUWCmiIY3KwgIwQdKa/RUvwFuSQy1BbB4HcrI82mIYlCYx77jYFh15OpyImGyJKgp4s/Rq8LJiE1pz9qbXIkgJIpPb6zXLrmQsG9kTYXB91kbun5XE7BvZE2FycmokLCEkHv/uXoAdQm5ICVHsu1ZXqVzO78/D7pmgsG9UbajBEjxv8PjeY/kppuc52D1QoAAAAASUVORK5CYII=`;
        this.shop = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARcSURBVGhD7ZRdTJNXGMffLKadJHObuiw6prbqjTNj2XYzliwz24UzaDI1FDGRxY9rtmzO3RgvdMLNsumMzI8gjsypAfETDFgoXynKMgQrlWB1ihoHi4F+UEzgPDvP8TRpz3mwrRnQuvef/MJLz/+c5//n7cEwZcqUqedDbG3mdJZr/55Tyxz2uikFM+Tad2EmGS9xYQlw2CGVYA7bThkvcbFcWwN12FSCmWS8xMXbN1OHTSWYScZLXM9PkaMvH4NfZ7iiYVvnVEOuzRUN+3pujeY7+Mol1RdBrKl+PEP14SzVxzPJeImJuSyLmcvKoNEK0bDCN7zaX6rkVZfmq7fc13wSsab4xRmqD2cpPsyE2WTM+OIbdqqHgMs6yPLso9rAky81qt5ki4gzVB/O4jM1L88mYz5dAMYLvPUd7YALGZfVYWJgdUa75k22CJ5BeXGm6sVsPKOMO76gwfqpulmwf6b2+sUw54s+1Zt0ETyD8IqZilfAM8q444s3Lqc2k/eDw1/1sOZNtgieQXmJe/LEbymXcWmxNmMGPzSkbebf1TGHnWmDvpg/oHk5POwD1RtBrFF78CzFK2bS9ySEWWVsXazJukXdhIxWZtxUh4hBW1/vo/zMaQlQfkSsEXtGv+FnEX4xm/BjVhlbF6uZ1gG1FlAJ75n5d3jNfFAZKZrdT/nHLlpDlB9hfI3aM1I0q5/y42zKj1llbF3siFEHZfwfl4Lv5wK48clrGr59BZoX8Vd9CN7PMvU9y98E/6lsck+yM1iZUStj62JHjRx1Q7DiHeh0t4B3pT12yMqF0NnWCqGKrBg/4nMfBs/uwlg/x1P0JfjaDmr+Z5nBSo0VMjYt3nRV6OSSoZHjC2CgJh+6PH9Ax42bcLWhFq5/tRq8jizxs7OhTnyO6/9UrwP0Byvfh1vuA+Lzju4euLZ3B3QXZAvwGT/DNfSg91lmYDbMKOM+XX96e5tFmBQEs8mY8fW/KNJzbwD6/GMTSs+DR+Rs5D8t8sOVx/D24WBclh4IwNzvPAJ8pjwR3isNwooTIdjeGJ68IsXuEbDtD8Rlwb4hmPNtlwCfKc/SQ1ggCBvPD8PmC8OwrT7NirzL38DnFSERPpq0KGIvCcAHZUFwVMWGjya1i2y7Btllflh/Rn8DKilZZHHJEGTu6IV5u+/B+qoAGVwlpYpELnD+qQDMK74vSKsi6gXG8GlTJPoCb+JBPi59BKt+HxKhqCK4tox70BtdIMKkF1n0SxA+Kg/GXODIV2nJTw/F71SRt/ga/p4/zhua1CLbm8JQcE4PgeT8Ngh5lU9CUkUcfC3n2GDMnmgmtQgOo0KoUEXiYRah5Gq/esR5paOJovOvh7cnuojnTv9dajaC2WTM+DrtbG0+Xd8KFG3e2xP+Rtp7+sjZAp5Nxowvs4jC1Bepb/mxytlSR9Hi6e3a1RQIbzgbYPHIq/QzW/FdQPCZ8qjg2e7uW9ep2QhmkzFNmTJlKm1lGP8COvpOliMQT/QAAAAASUVORK5CYII=`;
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
>>>>>>> 6d29239eb125db5061df72f42f139986d951c306
}
