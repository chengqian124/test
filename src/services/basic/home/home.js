
import { AMapManager, lazyAMapApiLoaderInstance } from 'vue-amap'
let amapManager = new AMapManager()
export default {
  data() {
    let self = this
    return {
      searchKey: '',
      amapManager,
      markers: [],
      searchOption: {
        city: '西安',
        citylimit: true
      },
      searchShow: false,
      center: [108.946579, 34.259756],
      zoom: 17,
      lng: 0,
      lat: 0,
      loaded: false,
      markerEvent: {
        click(e) {
          console.log(e);
        }
      },
      events: {
        init() {
          lazyAMapApiLoaderInstance.load().then(() => {
            self.initSearch()
            self.searchShow = true
          })
        },
        // 点击获取地址的数据
        click(e) {
          self.markers = []
          let { lng, lat } = e.lnglat
          self.lng = lng
          self.lat = lat
          self.center = [lng, lat]
          self.markers.push([lng, lat])
          console.log(self.markers)
          // 这里通过高德 SDK 完成。
          let geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: 'all'
          })
          geocoder.getAddress([lng, lat], function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
              if (result && result.regeocode) {
                console.log(result.regeocode.formattedAddress)
                self.address = result.regeocode.formattedAddress
                self.searchKey = result.regeocode.formattedAddress
                self.$nextTick()
              }
            }
          })
        }
      },
      // 一些工具插件
      plugin: [
        {
          // 定位
          pName: 'Geolocation',
          // events: {
          //   init(o) {
          //     // o是高德地图定位插件实例
          //     o.getCurrentPosition((status, result) => {
          //       if (result && result.position) {
          //         // 设置经度
          //         self.lng = result.position.lng
          //         // 设置维度
          //         self.lat = result.position.lat
          //         // 设置坐标
          //         self.center = [self.lng, self.lat]
          //         self.markers.push([self.lng, self.lat])
          //         // load
          //         self.loaded = true

          //         // 页面渲染好后
          //         self.$nextTick()
          //       }
          //     })
          //   },
          //   click(e) {
          //     console.log(e);
          //   }
          // }
        },
        {
          // 工具栏
          pName: 'ToolBar',
          events: {
            init(instance) {
              console.log(instance);
            }
          }
        },
        {
          // 鹰眼
          pName: 'OverView',
          events: {
            init(instance) {
              console.log(instance);
            }
          }
        },
        {
          // 地图类型
          pName: 'MapType',
          defaultType: 0,
          events: {
            init(instance) {
              console.log(instance);
            }
          }
        },
        {
          // 搜索
          pName: 'PlaceSearch',
          events: {
            init(instance) {
              console.log(instance)
            }
          }
        }
      ]
    }
  },
  methods: {
    submitAddress() {

    },
    initSearch() {
      let vm = this
      let map = this.amapManager.getMap()
      let lng = 108.946579
      let lat = 34.259756
      vm.markers.push([lng, lat])
      AMapUI.loadUI(['misc/PositionPicker'], PositionPicker => {
        // 创建地图拖拽
        // let positionPicker = new PositionPicker({
        //   mode: 'dragMap', // 设定为拖拽地图模式
        //   map: map,
        // })
        // positionPicker.on('success', positionResult => {

        //   console.log(positionResult)
        //   let address = positionResult.address
        //   let lng = positionResult.position.lng
        //   let lat = positionResult.position.lat
        //   vm.center = [lng, lat]
        //   // console.log(vm.center, address)
        //   vm.markers.push([lng, lat])
        //   vm.lng = lng
        //   vm.lat = lat
        //   vm.address = address
        //   vm.searchKey = address

        // })

        AMapUI.loadUI(['misc/PoiPicker'], function (PoiPicker) {
          var poiPicker = new PoiPicker({
            input: 'search',
            placeSearchOptions: {
              map: map,
              pageSize: 10
            },
            suggestContainer: 'searchTip',
            searchResultsContainer: 'searchTip'
          })
          vm.poiPicker = poiPicker
          // 监听poi选中信息
          poiPicker.on('poiPicked', function (poiResult) {
            // console.log(poiResult)
            let source = poiResult.source
            let poi = poiResult.item
            if (source !== 'search') {
              poiPicker.searchByKeyword(poi.name)
            } else {
              poiPicker.clearSearchResults()
              vm.markers = []
              let lng = poi.location.lng
              let lat = poi.location.lat
              let address = poi.cityname + poi.adname + poi.name
              vm.center = [lng, lat]
              vm.markers.push([lng, lat])
              vm.lng = lng
              vm.lat = lat
              vm.address = address
              vm.searchKey = address
            }
          })
        })
        // 启动拖放
        // positionPicker.start()
      })
    },
    searchByHand() {
      if (this.searchKey !== '') {
        this.poiPicker.searchByKeyword(this.searchKey)
      }
      // let keyword = this.searchKey;
      // let scop = this;
      // console.log(keyword)
      // AMap.plugin('AMap.Autocomplete', function () {
      //   // 实例化Autocomplete
      //   var autoOptions = {
      //     //city 限定城市，默认全国
      //     city: '西安'
      //   }
      //   var autoComplete = new AMap.Autocomplete(autoOptions);
      //   autoComplete.search(keyword, function (status, result) {
      //     console.log(status)
      //     console.log(result)
      //     // 搜索成功时，result即是对应的匹配数据
      //     if (status === 'complete') {
      //       scop.$emit('searchfinish', result.tips)
      //     }

      //   })
      // })
    },
    clickVideo(){
      this.$router.push('./video')
    }
  }
}