var APP_DATA = {
  "scenes": [
    {
      "id": "0-day",
      "name": "Day",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.334719009654728
      },
      "linkHotspots": [
        {
          "yaw": 0.08814105475670608,
          "pitch": -0.194117776352968,
          "rotation": 0,
          "target": "1-day--light"
        },
        {
          "yaw": 0.08814109911379475,
          "pitch": 0.3122083670486102,
          "rotation": 0,
          "target": "3-night"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-day--light",
      "name": "Day + Light",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.334719009654728
      },
      "linkHotspots": [
        {
          "yaw": 0.08814115086372887,
          "pitch": -0.17142038862695763,
          "rotation": 0,
          "target": "0-day"
        },
        {
          "yaw": 0.08814117304227231,
          "pitch": 0.3306969081728859,
          "rotation": 0,
          "target": "2-night--light"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-night--light",
      "name": "Night + Light",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.334719009654728
      },
      "linkHotspots": [
        {
          "yaw": 0.08229246440313176,
          "pitch": -0.1857191134195233,
          "rotation": 0,
          "target": "3-night"
        },
        {
          "yaw": 0.08521743460998898,
          "pitch": 0.3333985733560212,
          "rotation": 0,
          "target": "1-day--light"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-night",
      "name": "NIght",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.334719009654728
      },
      "linkHotspots": [
        {
          "yaw": 0.08814103257816264,
          "pitch": -0.20539237577735925,
          "rotation": 0,
          "target": "2-night--light"
        },
        {
          "yaw": 0.07643805576451079,
          "pitch": 0.3492645745376102,
          "rotation": 0,
          "target": "0-day"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
